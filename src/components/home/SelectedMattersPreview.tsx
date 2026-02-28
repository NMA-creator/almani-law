import Link from "next/link";
import { featuredMatters } from "@/data/matters";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function SelectedMattersPreview() {
  return (
    <section className="bg-white py-[140px] px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Selected Matters"
          heading="Recent Work"
          className="mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border">
          {featuredMatters.map((matter) => (
            <div
              key={matter.id}
              className="border-r border-b border-border p-8 flex flex-col"
            >
              <p className="font-inter text-xs uppercase tracking-widest text-muted mb-5">
                {matter.subject}
              </p>

              <p className="font-cormorant italic text-xl text-navy leading-snug mb-8 flex-1">
                {matter.caseName}
              </p>

              <a
                href={matter.judgmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm text-blue hover:text-blue-light transition-colors"
              >
                View judgment ↗
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/people/ali-almani#selected-matters"
            className="font-inter font-medium text-sm uppercase tracking-widest text-blue hover:text-blue-light transition-colors"
          >
            View all matters →
          </Link>
        </div>
      </div>
    </section>
  );
}
