import { matters } from "@/data/matters";

export function SelectedMatters() {
  return (
    <section id="selected-matters" className="scroll-mt-28 pt-16 border-t border-border">
      <h2 className="font-cormorant font-normal text-3xl md:text-4xl text-navy mb-10">
        Selected Matters
      </h2>

      <div>
        {matters.map((matter, i) => (
          <div
            key={matter.id}
            className={`grid grid-cols-1 sm:grid-cols-[120px_1fr_auto] gap-3 sm:gap-6 items-start py-12 hover:bg-[rgba(26,36,51,0.02)] transition-colors ${
              i < matters.length - 1 ? "border-b border-border/50" : ""
            }`}
          >
            {/* Subject tag */}
            <p className="font-inter text-xs uppercase tracking-widest text-muted pt-0.5">
              {matter.subject}
            </p>

            {/* Case name */}
            <p className="font-cormorant italic text-lg text-navy leading-snug">
              {matter.caseName}
            </p>

            {/* Judgment link */}
            <a
              href={matter.judgmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm text-blue hover:text-blue-light transition-colors whitespace-nowrap"
            >
              View judgment ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
