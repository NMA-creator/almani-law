import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Ali Almani & Partners was founded in January 2026 by Ali Almani, with the conviction that the best litigation practice is built on three things: rigorous preparation, deep knowledge of the law, and the courage to argue difficult positions before difficult courts.",
};

const bodyParagraphs = [
  "Ali Almani & Partners was founded in January 2026 by Ali Almani, with the conviction that the best litigation practice is built on three things: rigorous preparation, deep knowledge of the law, and the courage to argue difficult positions before difficult courts.",
  "The firm is based in Karachi, and practises across Pakistan's superior courts — the Federal Constitutional Court, the Supreme Court of Pakistan, and the High Courts in each province and the Islamabad Capital Territory — as well as before the country's major regulatory bodies and, in arbitration matters, before international tribunals.",
  "Our founding partner spent seventeen years, including eleven years as a partner, at Fazleghani Advocates, one of Pakistan's most distinguished litigation chambers, where he built a practice spanning tax litigation, constitutional law, international arbitration, and commercial disputes. The lawyers who have joined him here trained alongside him through some of the most complex matters in Pakistan's courts. This is not a new firm in the sense of being untested — it is a practice with deep roots, carried forward under a new name.",
  "What we offer our clients is straightforward: serious lawyers who prepare thoroughly, argue precisely, and treat every matter — however routine it may appear — as if the outcome matters, because to our clients, it always does.",
];

const values = [
  {
    title: "Preparation",
    body: "Every case we take, we take seriously. We prepare as if the outcome will turn on a single argument — because sometimes it does.",
  },
  {
    title: "Expertise",
    body: "Our practice areas are not a menu of services. They are the fields in which we have spent years developing genuine depth, tested in the highest courts.",
  },
  {
    title: "Integrity",
    body: "We tell our clients what the law is, not what they want to hear. That candour is the foundation of every relationship we have.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="relative flex items-end bg-navy pt-36 pb-16 min-h-[45vh]">
        <Image
          src="/images/about/photo-clifton.jpg"
          alt="Ali Almani & Partners — Old Clifton, Karachi"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-navy/55" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="font-inter font-medium text-xs uppercase tracking-widest text-gold mb-3">
            The Firm
          </p>
          <h1 className="font-cormorant font-semibold text-5xl md:text-6xl text-white leading-tight">
            About the Firm
          </h1>
        </div>
      </div>

      {/* Body copy */}
      <div className="bg-off-white py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          {bodyParagraphs.map((para, i) => (
            <p
              key={i}
              className={`font-inter leading-relaxed ${
                i === 0
                  ? "text-xl text-navy font-medium"
                  : "text-base text-text opacity-80"
              }`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Photo placeholder — replace with firm/office photo when available */}
      <div className="relative h-[50vh] min-h-[360px] bg-navy">
        <Image
          src="/images/hero/hero-2.jpg"
          alt="Ali Almani & Partners — Karachi (placeholder)"
          fill
          className="object-cover opacity-70"
          sizes="100vw"
        />
        {/* TODO: replace with dedicated firm or office photograph */}
      </div>

      {/* Values panels */}
      <div className="bg-navy py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {values.map((value) => (
              <div key={value.title} className="bg-navy px-10 py-12">
                <h2 className="font-inter font-medium text-xs uppercase tracking-widest text-gold mb-5">
                  {value.title}
                </h2>
                <p className="font-cormorant text-xl text-white leading-relaxed">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
