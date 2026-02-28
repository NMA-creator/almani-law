interface LogoProps {
  dark?: boolean;
}

/**
 * Inline SVG logo — matches reference:
 *   "ALI ALMANI"  — Inter 300, wide tracking
 *   Blue rule     — thin horizontal line terminating in a downward-pointing triangle
 *   "& PARTNERS"  — Inter 400, smaller, centred under the lockup
 *
 * dark=false → charcoal text (#1A2433); dark=true → white text (#FFFFFF)
 * Accent (#285295) is always blue, regardless of background.
 */
export function Logo({ dark = false }: LogoProps) {
  const textFill = dark ? "#FFFFFF" : "#1A2433";
  const accentFill = "#285295";

  return (
    <svg
      viewBox="0 0 148 42"
      width="148"
      height="42"
      role="img"
      aria-label="Ali Almani & Partners"
      className="select-none shrink-0"
    >
      {/* ALI ALMANI — Inter Light, wide tracking (matches reference sans-serif) */}
      <text
        x="0"
        y="17"
        fill={textFill}
        style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontSize: "16px",
          fontWeight: 300,
          letterSpacing: "3.5px",
        }}
      >
        ALI ALMANI
      </text>

      {/* Horizontal rule — ends where the triangle begins */}
      <line
        x1="0"
        y1="24"
        x2="130"
        y2="24"
        stroke={accentFill}
        strokeWidth="1.5"
      />

      {/*
        Downward-pointing triangle — top-left corner meets the line's right end.
        Base spans x 130–148, apex points down to y 37.
        Width 18px, height 13px — proportional to the reference.
      */}
      <polygon
        points="130,21 148,21 139,34"
        fill={accentFill}
      />

      {/* & PARTNERS — centred under the full lockup, modest tracking */}
      <text
        x="74"
        y="41"
        textAnchor="middle"
        fill={textFill}
        style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontSize: "8.5px",
          fontWeight: 400,
          letterSpacing: "2px",
        }}
      >
        &amp; PARTNERS
      </text>
    </svg>
  );
}
