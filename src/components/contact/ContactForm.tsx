"use client";

import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/923218968667?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20legal%20services.";

const MATTER_OPTIONS = [
  "Tax Litigation",
  "International Arbitration",
  "Constitutional Law",
  "Commercial Litigation",
  "Regulatory Disputes",
  "Civil Litigation",
  "Corporate Advisory",
  "Other",
];

interface FormFields {
  name: string;
  email: string;
  phone: string;
  matter: string;
  message: string;
  website: string; // honeypot
}

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  matter?: string;
  message?: string;
}

const initialFields: FormFields = {
  name: "",
  email: "",
  phone: "",
  matter: "",
  message: "",
  website: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: FormFields): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.name.trim()) errors.name = "Full name is required.";
  if (!fields.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_RE.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.phone.trim()) errors.phone = "Phone / WhatsApp number is required.";
  if (!fields.matter) errors.matter = "Please select the nature of your matter.";
  if (!fields.message.trim()) errors.message = "Message is required.";
  return errors;
}

const inputBase =
  "w-full px-4 py-3 font-inter text-sm text-text bg-white border focus:outline-none focus:border-blue transition-colors";

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 shrink-0"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as the user types
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fieldErrors = validate(fields);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = (await res.json()) as { success: boolean; error?: string };

      if (data.success) {
        setStatus("success");
        setFields(initialFields);
      } else {
        setStatus("error");
        setServerError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerError("Could not connect. Please try again or contact us directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-border p-10 text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue/10 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6 text-blue"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-cormorant font-semibold text-2xl text-navy mb-2">
          Message received
        </h3>
        <p className="font-inter text-sm text-muted">
          Thank you for getting in touch. We will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from humans, visible to bots */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block font-inter text-xs uppercase tracking-widest text-muted mb-2"
          >
            Full Name <span className="text-blue">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={handleChange}
            className={`${inputBase} ${errors.name ? "border-red-500" : "border-border"}`}
          />
          {errors.name && (
            <p className="font-inter text-xs text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block font-inter text-xs uppercase tracking-widest text-muted mb-2"
          >
            Email Address <span className="text-blue">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={handleChange}
            className={`${inputBase} ${errors.email ? "border-red-500" : "border-border"}`}
          />
          {errors.email && (
            <p className="font-inter text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label
            htmlFor="phone"
            className="block font-inter text-xs uppercase tracking-widest text-muted mb-2"
          >
            Phone / WhatsApp Number <span className="text-blue">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={handleChange}
            className={`${inputBase} ${errors.phone ? "border-red-500" : "border-border"}`}
          />
          {errors.phone && (
            <p className="font-inter text-xs text-red-500 mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Nature of Matter */}
        <div>
          <label
            htmlFor="matter"
            className="block font-inter text-xs uppercase tracking-widest text-muted mb-2"
          >
            Nature of Matter <span className="text-blue">*</span>
          </label>
          <div className="relative">
            <select
              id="matter"
              name="matter"
              value={fields.matter}
              onChange={handleChange}
              className={`${inputBase} ${errors.matter ? "border-red-500" : "border-border"} appearance-none bg-white cursor-pointer pr-10`}
            >
              <option value="" disabled>
                Select…
              </option>
              {MATTER_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {/* Custom dropdown chevron */}
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
          {errors.matter && (
            <p className="font-inter text-xs text-red-500 mt-1">{errors.matter}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block font-inter text-xs uppercase tracking-widest text-muted mb-2"
          >
            Message <span className="text-blue">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={fields.message}
            onChange={handleChange}
            className={`${inputBase} resize-y ${errors.message ? "border-red-500" : "border-border"}`}
          />
          {errors.message && (
            <p className="font-inter text-xs text-red-500 mt-1">{errors.message}</p>
          )}
        </div>

        {/* Server error */}
        {status === "error" && serverError && (
          <p className="font-inter text-sm text-red-500 border border-red-200 bg-red-50 px-4 py-3">
            {serverError}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3 px-8 bg-blue hover:bg-blue-light text-white font-inter font-medium text-sm uppercase tracking-widest transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>

        {/* WhatsApp fallback */}
        <p className="font-inter text-sm text-muted text-center">
          Prefer to message directly?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-whatsapp hover:opacity-80 transition-opacity font-medium"
          >
            <WhatsAppIcon />
            Chat on WhatsApp →
          </a>
        </p>
      </div>

      {/* Legal disclaimer */}
      <p className="font-inter text-xs text-muted italic leading-relaxed mt-8 pt-6 border-t border-border">
        The transmission of information through this website does not establish a
        lawyer-client relationship. Please do not send confidential information
        through the contact form until a formal engagement has been confirmed.
      </p>
    </form>
  );
}
