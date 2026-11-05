import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Coffee } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="relative py-28 lg:py-36 bg-espresso-950 text-cream-100 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1900&q=80"
          alt="Warm cafe corner in Soho London"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.24] contrast-[1.1] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-950 via-espresso-950/70 to-espresso-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-caramel-300 text-xs font-mono tracking-[0.25em] uppercase font-semibold">
          <Coffee className="w-3.5 h-3.5" />
          <span>A Quiet Haven in W1</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-cream-50 leading-[1.12]">
          Your Little Escape <br />
          <span className="italic font-light text-caramel-300 font-serif">in Soho.</span>
        </h2>

        <p className="text-base sm:text-xl text-cream-200/90 font-light max-w-2xl mx-auto leading-relaxed">
          Step off the bustling pavements of central London. Settle into the tactile warmth of natural
          oak, the aroma of fresh single-origin espresso, and a moment genuinely your own.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/visit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-caramel-600 hover:bg-caramel-500 text-espresso-950 font-medium px-8 py-4 rounded-xs text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-caramel-500/25 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Visit Us in Farrier&apos;s Passage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cream-50/10 hover:bg-cream-50/20 text-cream-100 border border-cream-100/20 font-medium px-8 py-4 rounded-xs text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Explore The Menu &amp; Bakes</span>
          </Link>
        </div>

        <div className="pt-8 text-xs text-cream-400 font-mono flex items-center justify-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-caramel-400" />
          <span>7 Farrier&apos;s Passage, Soho, London W1D 7DP · Open 7 Days · Walk-ins Welcome</span>
        </div>
      </div>
    </section>
  );
}
