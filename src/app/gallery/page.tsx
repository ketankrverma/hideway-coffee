import type { Metadata } from "next";
import GalleryClient from "@/components/gallery/GalleryClient";
import Image from "next/image";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Visual chronicle of Hideaway Coffee House. Barista craft, single origin extractions, Scandinavian interior details, pastries, and life in Farrier's Passage, Soho.",
};

export default function GalleryPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Header */}
      <section className="relative py-20 lg:py-28 bg-espresso-950 text-cream-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=80"
            alt="Hideaway Coffee House interior photography"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.3] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-caramel-400 text-xs tracking-[0.25em] uppercase font-semibold">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Journal</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-cream-50 leading-tight">
            The Gallery
          </h1>
          <p className="text-base sm:text-lg text-cream-200/90 font-light max-w-2xl mx-auto leading-relaxed">
            Close-up extractions, steam wand rituals, warm Scandinavian timber, and quiet mornings
            captured inside 7 Farrier&apos;s Passage.
          </p>
        </div>
      </section>

      {/* Gallery Client Grid with Lightbox */}
      <GalleryClient />
    </div>
  );
}

