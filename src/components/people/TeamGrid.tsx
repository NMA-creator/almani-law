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
}

function Section({ label, members }: SectionProps) {
  return (
    <div className="mb-20">
      <div className="mb-10">
        <h2 className="font-inter font-medium text-xs uppercase tracking-widest text-gold pb-4 border-b border-border">
          {label}
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12">
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
      <Section label="Partners" members={partners} />
      <Section label="Senior Associates" members={seniorAssociates} />
      <Section label="Associates" members={associates} />
    </div>
  );
}
