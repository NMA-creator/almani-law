interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  centered = false,
  light = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="font-inter font-medium text-xs uppercase tracking-widest text-gold mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-cormorant font-normal text-3xl md:text-4xl lg:text-5xl leading-tight ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {heading}
      </h2>
    </div>
  );
}
