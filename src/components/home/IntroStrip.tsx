const stats = [
  {
    value: "17 years",
    description: "Combined senior experience at Fazleghani Advocates",
  },
  {
    value: "10+",
    description: "Leading judgments in public court records",
  },
  {
    value: "4",
    description: "International arbitral institutions",
  },
  {
    value: "2024–2030",
    description: "ICSID Panel of Arbitrators nomination",
  },
];

const pullQuote =
  "Ali Almani & Partners was founded in January 2026 by Ali Almani, with the conviction that the best litigation practice is built on three things: rigorous preparation, deep knowledge of the law, and the courage to argue difficult positions before difficult courts.";

const bodyParagraphs = [
  "The firm is based in Karachi, and practises across Pakistan's superior courts — the Federal Constitutional Court, the Supreme Court of Pakistan, and the High Courts in each province and the Islamabad Capital Territory — as well as before the country's major regulatory bodies and, in arbitration matters, before international tribunals.",
  "Our founding partner spent seventeen years, including eleven years as a partner, at Fazleghani Advocates, one of Pakistan's most distinguished litigation chambers. The lawyers who have joined him here trained alongside him through some of the most complex matters in Pakistan's courts.",
];

export default function IntroStrip() {
  return (
    <section className="bg-off-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Pull quote */}
        <blockquote className="font-cormorant text-2xl md:text-3xl lg:text-4xl text-navy leading-relaxed mb-16 text-justify">
          &ldquo;{pullQuote}&rdquo;
        </blockquote>

        {/* 2-col: intro text + credential stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: body text */}
          <div className="space-y-6">
            {bodyParagraphs.map((para, i) => (
              <p key={i} className="font-inter text-base text-text leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="border-l-2 border-gold pl-5">
                <p className="font-cormorant font-normal text-3xl text-navy mb-1">
                  {stat.value}
                </p>
                <p className="font-inter text-sm text-muted leading-snug">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
