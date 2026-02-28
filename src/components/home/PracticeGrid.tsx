import Link from "next/link";
import {
  Scale,
  Globe,
  Landmark,
  Briefcase,
  Building2,
  FileText,
  TrendingUp,
  type LucideProps,
} from "lucide-react";
import type { FC } from "react";
import { practiceAreas } from "@/data/practice";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<string, FC<LucideProps>> = {
  Scale,
  Globe,
  Landmark,
  Briefcase,
  Building2,
  FileText,
  TrendingUp,
};

export default function PracticeGrid() {
  return (
    <section className="bg-white py-[140px] px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Our Practice"
          heading="Areas of Expertise"
          className="mb-8"
        />

        {/* 3-col grid with collapsed borders — 7th tile spans full row */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border">
          {practiceAreas.map((area, idx) => {
            const Icon = iconMap[area.icon];
            const isLast = idx === practiceAreas.length - 1;
            return (
              <Link
                key={area.slug}
                href={`/practice#${area.anchor}`}
                className={`group block p-8 border-r border-b border-border hover:bg-navy transition-colors duration-300 ${
                  isLast ? "md:col-span-3" : ""
                }`}
              >
                <div className="mb-5">
                  {Icon && (
                    <Icon
                      className="w-6 h-6 text-blue group-hover:text-white/60 transition-colors"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <h3 className="font-inter font-semibold text-sm uppercase tracking-wide text-navy group-hover:text-white transition-colors mb-2">
                  {area.title}
                </h3>

                <p className="font-inter text-sm text-muted group-hover:text-white/70 transition-colors leading-relaxed mb-5">
                  {area.descriptor}
                </p>

                <span className="font-inter text-sm text-blue group-hover:text-white/80 transition-all duration-200">
                  →
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href="/practice"
            className="font-inter font-medium text-sm uppercase tracking-widest text-blue hover:text-blue-light transition-colors"
          >
            View all practice areas →
          </Link>
        </div>
      </div>
    </section>
  );
}
