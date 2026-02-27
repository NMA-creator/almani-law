import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#1E2A3A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://almani.law"),
  title: {
    default: "Ali Almani & Partners — Advocates & Legal Consultants, Karachi",
    template: "%s | Ali Almani & Partners",
  },
  description:
    "Ali Almani & Partners is a full service law firm in Karachi, Pakistan, specialising in tax litigation, international arbitration, constitutional law and commercial disputes. Founded by Ali Almani, Advocate of the Supreme Court of Pakistan.",
  openGraph: {
    locale: "en_PK",
    type: "website",
    siteName: "Ali Almani & Partners",
    title: "Ali Almani & Partners — Advocates & Legal Consultants, Karachi",
    description:
      "Ali Almani & Partners is a full service law firm in Karachi, Pakistan, specialising in tax litigation, international arbitration, constitutional law and commercial disputes.",
    url: "https://almani.law",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Almani & Partners — Advocates & Legal Consultants, Karachi",
    description:
      "Full service law firm in Karachi, Pakistan — tax litigation, international arbitration, constitutional law.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${inter.variable} font-inter antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
