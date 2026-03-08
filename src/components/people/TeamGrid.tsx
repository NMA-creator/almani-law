import Link from "next/link";
import { team, type TeamMember } from "@/data/team";
import { ProfileCard } from "./ProfileCard";

const partners = team.filter((m) => m.slug === "ali-almani");
const seniorAssociates = team.filter((m) =>
  ["furqan-mushtaq", "akber-sohail"].includes(m.slug)
);
const management = team.filter((m) => m.slug === "fahad-khan");
const associates = team.filter((m) =>
  ["shahzeb-sahito", "saad-sohaib-yousuf"].includes(m.slug)
);

const administrativeOfficers: { name: string; title: string; slug?: string }[] = [
  { name: "Naveed Khan", title: "Paralegal", slug: "naveed-khan" },
  { name: "Muhammad Ahsan Khan", title: "Paralegal" },
  { name: "Vinod Kumar", title: "Librarian & Court Clerk", slug: "vinod-kumar" },
  { name: "Khalid Hussain", title: "Secretary" },
  { name: "Israr Khan", title: "Office Assistant" },
  { name: "Pervez Baloch", title: "Office Assistant" },
];

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

      {/* Management */}
      <Section label="Management" members={management} gridCols="grid-cols-1 sm:grid-cols-3" />

      {/* Senior Associates */}
      <Section label="Senior Associates" members={seniorAssociates} gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" />

      {/* Associates */}
      <Section label="Associates" members={associates} gridCols="grid-cols-1 sm:grid-cols-3" />

      {/* Administrative Officers */}
      <div className="mb-20">
        <div className="mb-10">
          <h2 className="font-inter font-medium text-xs uppercase tracking-widest text-gold pb-5 border-b-2 border-gold/30">
            Administrative Officers
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {administrativeOfficers.map((officer) => (
            <div key={officer.name}>
              {officer.slug ? (
                <Link href={`/people/${officer.slug}`} className="group block">
                  <p className="font-cormorant font-normal text-2xl text-navy mb-1 leading-tight group-hover:text-blue transition-colors">
                    {officer.name}
                  </p>
                  <p className="font-inter text-sm text-muted">{officer.title}</p>
                </Link>
              ) : (
                <>
                  <p className="font-cormorant font-normal text-2xl text-navy mb-1 leading-tight">
                    {officer.name}
                  </p>
                  <p className="font-inter text-sm text-muted">{officer.title}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
