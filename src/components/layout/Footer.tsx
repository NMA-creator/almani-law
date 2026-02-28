import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const WHATSAPP_URL =
  "https://wa.me/923218968667?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20legal%20services.";

const practiceLinks = [
  { label: "Tax Litigation", href: "/practice#tax-litigation" },
  { label: "International Arbitration", href: "/practice#international-arbitration" },
  { label: "Constitutional Law", href: "/practice#constitutional-law" },
  { label: "Commercial Litigation", href: "/practice#commercial-litigation" },
  { label: "Regulatory Disputes", href: "/practice#regulatory-disputes" },
  { label: "Civil Litigation", href: "/practice#civil-litigation" },
  { label: "Corporate Advisory", href: "/practice#corporate-advisory" },
];

const siteLinks = [
  { label: "Our People", href: "/people" },
  { label: "About the Firm", href: "/about" },
  { label: "Contact", href: "/contact" },
];


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

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo + Contact details */}
          <div className="space-y-6">
            <Logo dark />
            <address className="not-italic space-y-2 text-sm text-white/70 font-inter leading-relaxed">
              <p>F8/3, Block 4, Old Clifton</p>
              <p>Karachi 75600, Pakistan</p>
            </address>
            <div className="space-y-2 text-sm font-inter">
              <a
                href="mailto:info@almani.law"
                className="block text-white/70 hover:text-white transition-colors"
              >
                info@almani.law
              </a>
              <a
                href="tel:+922135178212"
                className="block text-white/70 hover:text-white transition-colors"
              >
                +92 21 351 78212 &amp; 59
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-whatsapp hover:opacity-90 transition-opacity"
              >
                <WhatsAppIcon />
                +92 321 896 8667 (WhatsApp)
              </a>
            </div>
          </div>

          {/* Column 2: Practice Areas */}
          <div>
            <h3 className="font-inter font-medium text-xs uppercase tracking-widest text-white/50 mb-5">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Site links */}
          <div>
            <h3 className="font-inter font-medium text-xs uppercase tracking-widest text-white/50 mb-5">
              The Firm
            </h3>
            <ul className="space-y-3">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-inter text-xs text-white/40">
            &copy; 2026 Ali Almani &amp; Partners. All rights reserved.
          </p>
          <p className="font-inter text-xs text-white/40">
            Advocates &amp; Legal Consultants · Karachi, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
