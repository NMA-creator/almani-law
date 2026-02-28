"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { heroSlides, heroContent } from "@/data/hero-config";

const SLIDE_DURATION = 9000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const { eyebrow, tagline, ctaPrimary, ctaSecondary } = heroContent;

  return (
    <section className="relative h-screen overflow-hidden" aria-label="Hero">
      {/* Image slides — Ken Burns runs continuously, opacity toggles visibility */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 ken-burns"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 1200ms ease-in-out",
            zIndex: i === current ? 1 : 0,
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={slide.priority}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: "rgba(10, 15, 35, 0.60)" }}
      />

      {/* Content — left-aligned, 10% desktop left-padding */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full px-6 md:pl-[10%] md:pr-16">
        <div className="max-w-[850px]">

          {/* Pre-headline label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-inter font-medium uppercase text-[0.85rem] tracking-[0.25em] text-gold mb-5"
          >
            {eyebrow}
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-cormorant font-normal text-[clamp(2.5rem,5vw,4.2rem)] leading-[1.15] tracking-[-0.02em] text-[#F9F9F9] mb-10"
          >
            {tagline}
          </motion.h1>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href={ctaPrimary.href}
              className="inline-flex items-center py-[14px] px-[28px] border border-gold text-[#F9F9F9] bg-transparent font-inter font-medium text-sm hover:bg-gold/10 transition-colors"
            >
              OUR PRACTICE →
            </Link>
            <Link
              href={ctaSecondary.href}
              className="inline-flex items-center py-[14px] px-[28px] border border-white text-[#F9F9F9] bg-transparent font-inter font-medium text-sm hover:bg-white/10 transition-colors"
            >
              MEET THE TEAM →
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Slide dot indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Chevron scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="chevron-bounce">
          <ChevronDown className="w-6 h-6 text-white/50" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
