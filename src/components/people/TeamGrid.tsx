import { team, type TeamMember } from "@/data/team";
import { ProfileCard } from "./ProfileCard";

const partners = team.filter((m) => m.slug === "ali-almani");
const seniorAssociates = team.filter((m) =>
  ["furqan-mushtaq", "akber-sohail", "fahad-khan"].includes(m.slug)
);
const associates = team.filter((m) => m.slug === "shahzeb-sahito");

interface SectionProps {
  label: string;
  members: TeamMember[];
  /** Tailwind grid-cols classes for the card grid */
  gridCols?: string;
}

function Section({ label, members, gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" }: SectionProps) {
  return (
    <div className="mb-20">
      <div className="mb-10">
        <h2 className="font-inter font-medium text-xs uppercase tracking-widest text-gold pb-5 border-b-2 border-gold/30">
          {label}
        </h2>
      </div>
      <div className={`grid ${gridCols} gap-x-10 gap-y-12`}>
        {members.map((member) => (
          <ProfileCard key={member.slug} member={member} />
        ))}
      </div>
    </div>
  );
}

export default function TeamGrid() {
  return (
    <div>
      {/* Managing Partner — card is 1/3 width, prominent but consistent */}
      <Section label="Partners" members={partners} gridCols="grid-cols-1 sm:grid-cols-3" />

      {/* Senior Associates — 3 members fill a 3-col row perfectly */}
      <Section label="Senior Associates" members={seniorAssociates} gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" />

      {/* Associates */}
      <Section label="Associates" members={associates} gridCols="grid-cols-1 sm:grid-cols-3" />
    </div>
  );
}
