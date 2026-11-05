"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass } from "lucide-react";
import OpeningStatusBadge from "../OpeningStatusBadge";

export default function Hero() {
  return (
    <section className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-espresso-950 text-cream-100">
      {/* Background Cinematic Image with Editorial Filmic Treatment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2200&q=85"
          alt="Hideaway Coffee House interior ambiance in Soho London"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.38] contrast-[1.1] scale-105 animate-in fade-in zoom-in-95 duration-1000"
        />
        {/* Soft Vignette & Warm Amber/Espresso Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/60 to-espresso-950/30" />
        <div className="absolute inset-0 bg-radial from-transparent via-espresso-950/40 to-espresso-950/85" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* London Hallmark / Postcode Stamp */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-xs bg-cream-50/10 backdrop-blur-md border border-cream-100/15 text-cream-200 text-xs font-mono tracking-widest uppercase mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-caramel-400 animate-ping" />
          <span>Soho, London W1D</span>
          <span className="text-caramel-400/60">•</span>
          <span className="text-caramel-300 font-serif lowercase italic">Farrier&apos;s Passage Courtyard</span>
        </div>

        {/* Main Heading in British Editorial Typography */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-50 font-normal tracking-tight max-w-5xl leading-[1.08] mb-6 drop-shadow-sm">
          A Little Hideaway in the{" "}
          <span className="italic font-light text-caramel-300 font-serif">Heart of Soho.</span>
        </h1>

        {/* Supporting text with London tone */}
        <p className="text-base sm:text-xl md:text-2xl text-cream-200/90 font-light max-w-2xl leading-relaxed mb-10">
          Specialty coffee, thoughtful moments and a welcoming space tucked away from the London rush.
        </p>

        {/* Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-caramel-600 hover:bg-caramel-500 text-espresso-950 font-medium px-8 py-4 rounded-xs text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-caramel-500/25 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore The Menu &amp; Roasts</span>
            <ArrowRight className="w-4 h-4 text-espresso-950" />
          </Link>

          <Link
            href="/visit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-cream-50/10 hover:bg-cream-50/20 text-cream-100 border border-cream-100/25 backdrop-blur-xs font-medium px-8 py-4 rounded-xs text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Compass className="w-4 h-4 text-caramel-300" />
            <span>Find Farrier&apos;s Passage</span>
          </Link>
        </div>

        {/* Live London Barometer Stamp */}
        <div className="mt-12">
          <OpeningStatusBadge variant="london-stamp" />
        </div>
      </div>

      {/* Bottom Editorial Ticker / London Coffee Barometer */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-cream-100/10 bg-espresso-950/80 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-cream-100/10 text-xs">
            <div className="px-2">
              <span className="block font-serif text-sm sm:text-base text-cream-100 font-medium">
                Ethical Micro-Lots
              </span>
              <span className="text-[10px] text-charcoal-400 font-mono uppercase tracking-wider">
                Direct Trade Sourcing
              </span>
            </div>
            <div className="px-2">
              <span className="block font-serif text-sm sm:text-base text-cream-100 font-medium">
                Proper Flat Whites
              </span>
              <span className="text-[10px] text-charcoal-400 font-mono uppercase tracking-wider">
                Organic Dairy &amp; Minor Figures
              </span>
            </div>
            <div className="px-2">
              <span className="block font-serif text-sm sm:text-base text-cream-100 font-medium">
                7 Farrier&apos;s Passage
              </span>
              <span className="text-[10px] text-charcoal-400 font-mono uppercase tracking-wider">
                Soho Pedestrian Alleyway
              </span>
            </div>
            <div className="px-2">
              <span className="block font-serif text-sm sm:text-base text-cream-100 font-medium">
                Swedish Morning Bakes
              </span>
              <span className="text-[10px] text-charcoal-400 font-mono uppercase tracking-wider">
                Cardamom Knots &amp; Sourdough
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
