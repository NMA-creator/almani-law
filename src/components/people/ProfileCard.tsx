import Link from "next/link";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import type { TeamMember } from "@/data/team";

interface ProfileCardProps {
  member: TeamMember;
}

export function ProfileCard({ member }: ProfileCardProps) {
  return (
    <Link href={`/people/${member.slug}`} className="group block">
      {/* Portrait photo — overflow hidden for scale-on-hover */}
      <div className="overflow-hidden mb-4">
        <PhotoPlaceholder
          width={3}
          height={4}
          className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <h2 className="font-cormorant font-semibold text-2xl text-navy mb-1 leading-tight group-hover:text-blue transition-colors duration-200">
        {member.name}
      </h2>

      <p className="font-inter text-sm text-muted mb-3">{member.title}</p>

      <p className="font-inter text-xs text-muted leading-relaxed">
        {member.credentialsLine}
      </p>

      <p className="font-inter font-medium text-sm text-blue group-hover:text-blue-light transition-colors duration-200 mt-5">
        View Profile →
      </p>
    </Link>
  );
}
