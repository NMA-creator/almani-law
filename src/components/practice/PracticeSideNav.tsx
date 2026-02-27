"use client";

import { useState, useEffect } from "react";
import { practiceAreas } from "@/data/practice";

const NAV_HEIGHT = 64; // matches h-16 in Navbar

export default function PracticeSideNav() {
  const [activeId, setActiveId] = useState<string>(practiceAreas[0].anchor);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      // Section is "active" when its top edge is in the upper third of the viewport
      { rootMargin: `-${NAV_HEIGHT + 32}px 0px -60% 0px`, threshold: 0 }
    );

    practiceAreas.forEach((area) => {
      const el = document.getElementById(area.anchor);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    anchor: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(anchor);
    if (el) {
      const top =
        el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 32;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-24" aria-label="Practice areas navigation">
      <p className="font-inter text-xs uppercase tracking-widest text-muted mb-5">
        Practice Areas
      </p>
      <ul className="space-y-0.5">
        {practiceAreas.map((area) => (
          <li key={area.anchor}>
            <a
              href={`#${area.anchor}`}
              onClick={(e) => handleClick(e, area.anchor)}
              className={`block font-inter text-sm py-2.5 pl-4 border-l-2 transition-colors duration-150 ${
                activeId === area.anchor
                  ? "border-blue text-navy font-medium"
                  : "border-transparent text-muted hover:text-navy hover:border-border"
              }`}
            >
              {area.shortTitle}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
