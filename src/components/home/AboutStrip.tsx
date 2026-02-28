import Link from "next/link";
import Image from "next/image";

const pullQuote =
  "What we offer our clients is straightforward: serious lawyers who prepare thoroughly, argue precisely, and treat every matter — however routine it may appear — as if the outcome matters, because to our clients, it always does.";

export default function AboutStrip() {
  return (
    <section className="bg-navy">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: editorial image */}
        <div className="relative min-h-72 md:min-h-auto bg-navy/60">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="Ali Almani & Partners — Old Clifton, Karachi"
            fill
            className="object-cover opacity-75"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right: pull quote + CTA */}
        <div className="flex flex-col justify-center px-10 md:px-14 py-[140px]">
          <blockquote className="font-cormorant italic text-2xl md:text-3xl text-white leading-relaxed mb-10">
            &ldquo;{pullQuote}&rdquo;
          </blockquote>

          <Link
            href="/about"
            className="inline-flex items-center font-inter font-medium text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
          >
            About the Firm →
          </Link>
        </div>
      </div>
    </section>
  );
}
