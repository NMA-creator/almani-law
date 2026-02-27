import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTeamMember, team } from "@/data/team";
import { ProfileSidebar } from "@/components/people/ProfileSidebar";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Ali Almani has his own dedicated static page; exclude him here
  return team
    .filter((m) => m.slug !== "ali-almani")
    .map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};
  return {
    title: `${member.name} — ${member.title}`,
    description: member.bio[0],
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) notFound();

  return (
    <>
      {/* Page header — navy (no editorial image for associate profiles) */}
      <div className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-inter font-medium text-xs uppercase tracking-widest text-gold mb-3">
            {member.title}
          </p>
          <h1 className="font-cormorant font-semibold text-5xl md:text-6xl text-white mb-4 leading-tight">
            {member.name}
          </h1>
          <p className="font-inter text-sm text-white/65 tracking-wide">
            {member.credentialsLine}
          </p>
        </div>
      </div>

      {/* Profile content */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/*
            DOM: sidebar first (credentials before bio for screen readers).
            Mobile: bio appears first visually (order-1), sidebar below (order-2).
            Desktop: sidebar left (order-1), bio right (order-2).
          */}
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">
            {/* Sticky sidebar */}
            <div className="order-2 lg:order-1">
              <ProfileSidebar member={member} />
            </div>

            {/* Bio + CTA */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6 mb-12">
                {member.bio.map((para, i) => (
                  <p
                    key={i}
                    className="font-inter text-base text-text leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-navy text-navy font-inter font-medium text-sm uppercase tracking-widest hover:bg-navy hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
