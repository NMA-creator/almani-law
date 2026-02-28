import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTeamMember } from "@/data/team";
import { ProfileSidebar } from "@/components/people/ProfileSidebar";
import { SelectedMatters } from "@/components/people/SelectedMatters";

const WHATSAPP_URL =
  "https://wa.me/923218968667?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20legal%20services.";

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

export const metadata: Metadata = {
  title: "Ali Almani — Managing Partner",
  description:
    "Ali Almani is the Managing Partner of Ali Almani & Partners and one of Pakistan's leading counsel in tax litigation, constitutional law, and international commercial arbitration.",
};

export default function AliAlmaniPage() {
  const ali = getTeamMember("ali-almani")!;

  return (
    <>
      {/* Header band */}
      <div className="relative flex items-end bg-navy pt-36 pb-16 min-h-[50vh]">
        <Image
          src="/images/hero/hero-2.jpg"
          alt="Ali Almani — Managing Partner, Ali Almani & Partners"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-navy/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="font-inter font-medium text-xs uppercase tracking-widest text-gold mb-3">
            Managing Partner
          </p>
          <h1 className="font-cormorant font-normal text-5xl md:text-6xl text-white mb-4 leading-tight">
            {ali.name}
          </h1>
          <p className="font-inter text-sm text-white/65 tracking-wide">
            B.A. (Yale) · J.D. (Harvard) · LL.M. (Cantab)
          </p>
        </div>
      </div>

      {/* Profile content */}
      <div className="bg-white py-[140px] px-6">
        <div className="max-w-7xl mx-auto">
          {/*
            DOM order: sidebar first so screen readers get credentials before bio.
            On mobile: bio appears first visually (order-1), sidebar below (order-2).
            On desktop: sidebar left (order-1), bio right (order-2) via CSS grid.
          */}
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">
            {/* Sticky sidebar */}
            <div className="order-2 lg:order-1">
              <ProfileSidebar member={ali} />
            </div>

            {/* Bio + buttons + selected matters */}
            <div className="order-1 lg:order-2">
              {/* Full biography */}
              <div className="space-y-10 mb-12 max-w-[760px]">
                {ali.bio.map((para, i) => (
                  <p
                    key={i}
                    className="font-inter text-base text-text leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-navy text-navy font-inter font-medium text-sm uppercase tracking-widest hover:bg-navy hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-whatsapp text-white font-inter font-medium text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </div>

              {/* Selected matters */}
              <SelectedMatters />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
