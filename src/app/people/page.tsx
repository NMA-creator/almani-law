import type { Metadata } from "next";
import TeamGrid from "@/components/people/TeamGrid";

export const metadata: Metadata = {
  title: "Our People",
  description:
    "Meet the lawyers of Ali Almani & Partners — a team of advocates trained across Pakistan's superior courts and leading international institutions.",
};

export default function PeoplePage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-inter font-medium text-xs uppercase tracking-widest text-gold mb-3">
            The Firm
          </p>
          <h1 className="font-cormorant font-normal text-5xl md:text-6xl text-white leading-tight">
            Our People
          </h1>
        </div>
      </div>

      {/* Team grid */}
      <div className="bg-white py-[140px] px-6">
        <div className="max-w-7xl mx-auto">
          <TeamGrid />
        </div>
      </div>
    </>
  );
}
