import type { Metadata } from "next";
import MenuClient from "@/components/menu/MenuClient";
import Image from "next/image";
import { Coffee } from "lucide-react";

export const metadata: Metadata = {
  title: "Coffee & Menu",
  description:
    "Explore the specialty coffee, espresso, cold brew, loose leaf teas, fresh pastries, and light brunch menu at Hideaway Coffee House in Soho, London.",
};

export default function MenuPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Menu Header */}
      <section className="relative py-20 lg:py-28 bg-espresso-950 text-cream-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=80"
            alt="Hideaway Coffee menu preparation"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.32] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-caramel-400 text-xs tracking-[0.25em] uppercase font-semibold">
            <Coffee className="w-3.5 h-3.5" />
            <span>Seasonal Offerings</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-cream-50 leading-tight">
            Coffee &amp; Menu
          </h1>
          <p className="text-base sm:text-lg text-cream-200/90 font-light max-w-2xl mx-auto leading-relaxed">
            Meticulously sourced single-origin coffees, calibrated espresso drinks, organic dairy,
            and freshly baked Swedish cardamom knots and sourdough creations.
          </p>
        </div>
      </section>

      {/* Interactive Menu List */}
      <MenuClient />
    </div>
  );
}

