"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Camera } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/galleryData";
import LightboxModal from "../LightboxModal";

export default function GalleryPreview() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Take first 6 items for the home preview
  const previewItems = GALLERY_ITEMS.slice(0, 6);

  return (
    <section className="py-24 lg:py-32 bg-cream-100 text-espresso-950 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-caramel-700 text-xs tracking-[0.2em] uppercase font-semibold">
              <Camera className="w-3.5 h-3.5" />
              <span>Life in Farrier&apos;s Passage</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-espresso-900 leading-tight">
              Atmosphere &amp; Moments
            </h2>
            <p className="text-charcoal-600 font-light text-base sm:text-lg">
              A visual glimpse into our daily craft, warm Scandinavian interiors, freshly baked pastries,
              and quiet London moments.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 font-serif text-base text-espresso-900 hover:text-caramel-700 font-medium group transition-colors self-start md:self-end"
          >
            <span>View Full Gallery ({GALLERY_ITEMS.length} Photos)</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-xs bg-espresso-950 shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-100"
              />

              {/* Hover Dark Overlay & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-espresso-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <span className="w-9 h-9 rounded-full bg-cream-50/20 backdrop-blur-md text-cream-100 flex items-center justify-center">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-widest text-caramel-400 font-mono">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg text-cream-50 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs text-cream-200/80 line-clamp-1 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-espresso-900 hover:bg-espresso-800 text-cream-50 text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm font-medium transition-all shadow-sm hover:shadow-md"
          >
            <span>Explore All Photography &amp; Details</span>
            <ArrowRight className="w-4 h-4 text-caramel-400" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <LightboxModal
          items={previewItems}
          currentIndex={activeLightboxIndex}
          onClose={() => setActiveLightboxIndex(null)}
          onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
        />
      )}
    </section>
  );
}

