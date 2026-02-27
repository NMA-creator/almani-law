import type { Metadata } from "next";
import Image from "next/image";
import { practiceAreas } from "@/data/practice";
import PracticeSection from "@/components/practice/PracticeSection";
import PracticeSideNav from "@/components/practice/PracticeSideNav";

export const metadata: Metadata = {
  title: "Our Practice",
  description:
    "Ali Almani & Partners practises across tax litigation, international arbitration, constitutional law, commercial litigation, regulatory disputes, civil litigation and corporate advisory.",
};

export default function PracticePage() {
  return (
    <>
      {/* Page header band */}
      <div className="relative flex items-end bg-navy pt-32 pb-16 min-h-[45vh]">
        <Image
          src="/images/practice/photo-library.jpg"
          alt="Legal library — Ali Almani & Partners"
          fill
          className="object-cover opacity-35"
          sizes="100vw"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="font-inter font-medium text-xs uppercase tracking-widest text-gold mb-3">
            Our Practice
          </p>
          <h1 className="font-cormorant font-semibold text-5xl md:text-6xl text-white leading-tight">
            Areas of Expertise
          </h1>
        </div>
      </div>

      {/* Content — sidebar + sections */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16">
            {/* Sticky side nav — desktop only */}
            <aside className="hidden lg:block">
              <PracticeSideNav />
            </aside>

            {/* Practice sections */}
            <div>
              {practiceAreas.map((area, i) => (
                <PracticeSection
                  key={area.slug}
                  area={area}
                  isLast={i === practiceAreas.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
