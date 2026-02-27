export interface HeroSlide {
  id: number;
  src: string;
  alt: string;
  /** First slide only — load eagerly for LCP */
  priority?: boolean;
}

export interface HeroContent {
  eyebrow: string;
  heading: string;
  /** TODO: confirm with client */
  tagline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  whatsappUrl: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    src: "/images/hero/hero-1.jpg",
    alt: "Ali Almani & Partners — law offices, Karachi",
    priority: true,
  },
  {
    id: 2,
    src: "/images/hero/hero-2.jpg",
    alt: "Superior courts of Pakistan",
  },
];

export const heroContent: HeroContent = {
  eyebrow: "Advocates & Legal Consultants · Karachi",
  heading: "Ali Almani & Partners",
  tagline: "Pakistan's courts. The world's standards.", // TODO: confirm with client
  ctaPrimary: { label: "Our Practice", href: "/practice" },
  ctaSecondary: { label: "Meet the Team", href: "/people" },
  whatsappUrl:
    "https://wa.me/923218968667?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20legal%20services.",
};
