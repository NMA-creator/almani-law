import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ─── Simple in-memory rate limiter ───────────────────────────────────────────
// Note: resets per serverless instance. Sufficient for a low-traffic contact form.
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;

  entry.count += 1;
  return true;
}

// ─── Validation helpers ───────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VALID_MATTERS = [
  "Tax Litigation",
  "International Arbitration",
  "Constitutional Law",
  "Commercial Litigation",
  "Regulatory Disputes",
  "Civil Litigation",
  "Corporate Advisory",
  "Other",
];

// ─── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limit
  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  // Honeypot — bots fill this hidden field; humans never see it
  if (body.website) {
    // Silently discard; return success so bots don't retry
    return NextResponse.json({ success: true });
  }

  // Extract + sanitise fields
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const matter = String(body.matter ?? "").trim();
  const message = String(body.message ?? "").trim();

  // Validate
  if (!name || !email || !phone || !matter || !message) {
    return NextResponse.json(
      { success: false, error: "All fields are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (!VALID_MATTERS.includes(matter)) {
    return NextResponse.json(
      { success: false, error: "Please select a valid matter type." },
      { status: 400 }
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { success: false, error: "Message is too long." },
      { status: 400 }
    );
  }

  // Send email via Nodemailer
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_FORM_TO ?? "info@almani.law",
      replyTo: email,
      subject: `New enquiry — ${matter} — ${name}`,
      text: [
        `Name:              ${name}`,
        `Email:             ${email}`,
        `Phone / WhatsApp:  ${phone}`,
        `Nature of Matter:  ${matter}`,
        ``,
        message,
      ].join("\n"),
      html: `
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px 0;color:#6B7280;width:160px">Name</td><td style="padding:8px 0;color:#1C1C1C"><strong>${name}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#6B7280">Email</td><td style="padding:8px 0;color:#1C1C1C"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#6B7280">Phone / WhatsApp</td><td style="padding:8px 0;color:#1C1C1C">${phone}</td></tr>
          <tr><td style="padding:8px 0;color:#6B7280">Nature of Matter</td><td style="padding:8px 0;color:#1C1C1C">${matter}</td></tr>
        </table>
        <hr style="margin:16px 0;border:none;border-top:1px solid #E5E7EB" />
        <p style="font-family:sans-serif;font-size:14px;color:#1C1C1C;line-height:1.7;white-space:pre-wrap">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
      `,
    });
  } catch (err) {
    console.error("[contact/route] Nodemailer error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again or contact us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
