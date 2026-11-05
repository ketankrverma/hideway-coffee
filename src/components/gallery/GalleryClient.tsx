"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/data/galleryData";
import LightboxModal from "../LightboxModal";
import { Eye } from "lucide-react";

const CATEGORIES = [
  { key: "all", label: "All Photographs" },
  { key: "coffee", label: "The Brew Bar & Coffee" },
  { key: "interiors", label: "Cafe Interiors & Calm" },
  { key: "pastries", label: "Fresh Bakes & Food" },
  { key: "moments", label: "Soho Moments" },
];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 rounded-xs text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
              activeCategory === cat.key
                ? "bg-espresso-900 text-cream-50 shadow-xs"
                : "bg-white text-charcoal-700 hover:bg-cream-100 border border-cream-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry / Dynamic Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => {
          // Visual aspect ratio variation for editorial rhythm
          const aspectClass =
            item.aspectRatio === "portrait"
              ? "aspect-[3/4]"
              : item.aspectRatio === "square"
              ? "aspect-square"
              : "aspect-[4/3]";

          return (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className={`group relative cursor-pointer overflow-hidden rounded-xs bg-espresso-950 shadow-sm hover:shadow-2xl transition-all duration-300 ${aspectClass}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-100"
              />

              {/* Hover Dark Overlay & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-espresso-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-widest text-caramel-400 font-mono bg-espresso-950/70 px-2 py-0.5 rounded-xs backdrop-blur-xs">
                    {item.categoryLabel}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-cream-50/20 backdrop-blur-md text-cream-100 flex items-center justify-center">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-lg text-cream-50 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs text-cream-200/80 line-clamp-2 font-light">
                    {item.description}
                  </p>
                  {item.cameraInfo && (
                    <span className="text-[10px] text-caramel-400/80 font-mono block pt-1">
                      {item.cameraInfo}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <LightboxModal
          items={filteredItems}
          currentIndex={activeLightboxIndex}
          onClose={() => setActiveLightboxIndex(null)}
          onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
        />
      )}
    </div>
  );
}

