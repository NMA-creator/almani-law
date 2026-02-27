import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import type { TeamMember } from "@/data/team";

interface ProfileSidebarProps {
  member: TeamMember;
}

interface SidebarSectionProps {
  title: string;
  items: string[];
}

function SidebarSection({ title, items }: SidebarSectionProps) {
  if (items.length === 0) return null;
  return (
    <div>
      <h3 className="font-inter font-medium text-xs uppercase tracking-widest text-muted mb-3">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="text-gold text-sm mt-px shrink-0 select-none">–</span>
            <span className="font-inter text-sm text-text leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProfileSidebar({ member }: ProfileSidebarProps) {
  return (
    <aside className="sticky top-24">
      <PhotoPlaceholder
        width={300}
        height={380}
        className="w-full mb-10"
      />

      <div className="space-y-8">
        <SidebarSection title="Admissions" items={member.admissions} />
        <SidebarSection title="Education" items={member.education} />
        {member.affiliations && (
          <SidebarSection title="Affiliations" items={member.affiliations} />
        )}
        {member.languages && (
          <SidebarSection title="Languages" items={member.languages} />
        )}
      </div>
    </aside>
  );
}
