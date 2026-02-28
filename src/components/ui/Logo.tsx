interface LogoProps {
  dark?: boolean;
}

/**
 * Inline SVG logo matching the reference:
 *
 *   ALI ALMANI          ← Inter 300, wide tracking, dark charcoal / white on dark
 *   ————————————————▶   ← thin blue rule (#285295) terminating in right-pointing ▶
 *      & PARTNERS        ← Inter 400, smaller, centred, moderate tracking
 *
 * dark=false (light bg) → text #1A2433, accent #285295
 * dark=true  (dark bg)  → text #FFFFFF,  accent #285295
 */
export function Logo({ dark = false }: LogoProps) {
  const textFill = dark ? "#FFFFFF" : "#1A2433";
  const accentFill = "#285295";

  /*
   * Layout (all values in SVG user units ≈ px):
   *
   *  y=18  — "ALI ALMANI" baseline
   *  y=24  — rule centre (midpoint of the triangle's flat left side)
   *  y=37  — "& PARTNERS" baseline
   *
   *  x=0   — left edge of "ALI ALMANI" and start of rule
   *  x=118 — estimated right edge of "ALI ALMANI" text / left side of triangle
   *  x=130 — right point of triangle (triangle is 12px wide, 14px tall)
   *
   *  Total viewBox: 130 × 40
   */

  return (
    <svg
      viewBox="0 0 130 40"
      width="130"
      height="40"
      role="img"
      aria-label="Ali Almani & Partners"
      className="select-none shrink-0"
    >
      {/* ── ALI ALMANI ─────────────────────────────────────────────────────── */}
      <text
        x="0"
        y="18"
        fill={textFill}
        style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontSize: "17px",
          fontWeight: 300,
          letterSpacing: "3px",
        }}
      >
        ALI ALMANI
      </text>

      {/* ── Horizontal rule ────────────────────────────────────────────────── */}
      <line
        x1="0"
        y1="24"
        x2="118"
        y2="24"
        stroke={accentFill}
        strokeWidth="1.5"
      />

      {/*
        ── Right-pointing triangle ▶ ──────────────────────────────────────────
        Formula: "x,centerY-h  x,centerY+h  x+w,centerY"
        Rule ends at x=118, centred on y=24, half-height=7, width=10:
          top-left    (118, 17)  ← centerY - 7
          bottom-left (118, 31)  ← centerY + 7
          right-point (128, 24)  ← x + 10, centerY
        Flat vertical LEFT side, single point to the RIGHT → ▶
      */}
      <polygon
        points="118,17 118,31 128,24"
        fill={accentFill}
      />

      {/* ── & PARTNERS ─────────────────────────────────────────────────────── */}
      <text
        x="65"
        y="37"
        textAnchor="middle"
        fill={textFill}
        style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontSize: "9px",
          fontWeight: 400,
          letterSpacing: "2.5px",
        }}
      >
        &amp; PARTNERS
      </text>
    </svg>
  );
}
