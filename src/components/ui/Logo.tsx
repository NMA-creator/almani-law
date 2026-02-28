interface LogoProps {
  dark?: boolean;
}

/**
 * Inline SVG logo lockup — "ALI ALMANI" / blue rule + arrowhead / "& PARTNERS"
 *
 * dark=false (light bg): navy text (#1A2433), blue accent (#285295)
 * dark=true  (dark bg):  white text (#FFFFFF), blue accent (#285295)
 */
export function Logo({ dark = false }: LogoProps) {
  const textFill = dark ? "#FFFFFF" : "#1A2433";
  const accentFill = "#285295";

  return (
    <svg
      viewBox="0 0 116 36"
      width="116"
      height="36"
      role="img"
      aria-label="Ali Almani & Partners"
      className="select-none shrink-0"
    >
      {/* ALI ALMANI — Libre Baskerville 500, letter-spacing 1px */}
      <text
        x="0"
        y="14"
        fill={textFill}
        style={{
          fontFamily: "var(--font-libre-baskerville), Georgia, serif",
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "1px",
        }}
      >
        ALI ALMANI
      </text>

      {/* Horizontal rule spanning full lockup width */}
      <line
        x1="0"
        y1="21.5"
        x2="109"
        y2="21.5"
        stroke={accentFill}
        strokeWidth="1.5"
      />

      {/* Right-pointing arrowhead — CSS border-trick equivalent in SVG */}
      <polygon
        points="109,17.5 116,21.5 109,25.5"
        fill={accentFill}
      />

      {/* & PARTNERS — Inter, 8.5px, wide letter-spacing, right-aligned */}
      <text
        x="116"
        y="33"
        textAnchor="end"
        fill={textFill}
        style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontSize: "8.5px",
          letterSpacing: "5.5px",
        }}
      >
        &amp; PARTNERS
      </text>
    </svg>
  );
}
