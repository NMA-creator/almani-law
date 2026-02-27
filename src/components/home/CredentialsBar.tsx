const credentials = [
  "Yale University",
  "Harvard Law School",
  "University of Cambridge",
  "Lincoln's Inn",
  "ICSID Panel of Arbitrators",
];

const Dot = () => (
  <span className="text-gold mx-4 text-xs select-none" aria-hidden="true">
    ·
  </span>
);

export default function CredentialsBar() {
  return (
    <div className="bg-navy py-4 overflow-hidden">
      {/* Desktop: static single line */}
      <div className="hidden md:flex items-center justify-center max-w-7xl mx-auto px-6">
        {credentials.map((c, i) => (
          <span key={c} className="flex items-center">
            {i > 0 && <Dot />}
            <span className="font-inter text-xs uppercase tracking-widest text-white/75">
              {c}
            </span>
          </span>
        ))}
      </div>

      {/* Mobile: continuous marquee — content duplicated for seamless loop */}
      <div className="md:hidden">
        <div className="marquee-track flex items-center whitespace-nowrap">
          {[...credentials, ...credentials].map((c, i) => (
            <span key={i} className="flex items-center">
              <span className="font-inter text-xs uppercase tracking-widest text-white/75 px-2">
                {c}
              </span>
              <Dot />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
