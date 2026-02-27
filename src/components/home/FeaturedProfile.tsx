import Link from "next/link";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { team } from "@/data/team";

const ali = team[0]; // Ali Almani

// First two sentences of the full bio — used on the home page
const shortBio =
  "Ali Almani is the Managing Partner of Ali Almani & Partners and one of Pakistan's leading counsel in tax litigation, constitutional law, and international commercial arbitration. He is an Advocate of the Federal Constitutional Court and the Supreme Court of Pakistan.";

export default function FeaturedProfile() {
  return (
    <section className="bg-off-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: photo placeholder (400×500) */}
          <div className="w-full max-w-sm mx-auto md:mx-0">
            <PhotoPlaceholder width={400} height={500} className="w-full" />
          </div>

          {/* Right: bio excerpt */}
          <div className="flex flex-col justify-center md:pt-8">
            <p className="font-inter font-medium text-xs uppercase tracking-widest text-gold mb-4">
              Managing Partner
            </p>

            <h2 className="font-cormorant font-semibold text-4xl md:text-5xl text-navy mb-4 leading-tight">
              {ali.name}
            </h2>

            <p className="font-inter text-sm text-muted mb-8 leading-relaxed">
              {ali.credentialsLine}
            </p>

            <p className="font-inter text-base text-text leading-relaxed mb-10">
              {shortBio}
            </p>

            <Link
              href="/people/ali-almani"
              className="font-inter font-medium text-sm uppercase tracking-widest text-blue hover:text-blue-light transition-colors"
            >
              Full Profile →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
