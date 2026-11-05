"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { GalleryItem } from "@/data/galleryData";

interface Props {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function LightboxModal({ items, currentIndex, onClose, onNavigate }: Props) {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % items.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Preview"
      className="fixed inset-0 z-50 bg-espresso-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between text-cream-200 max-w-7xl mx-auto w-full z-10" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-caramel-400 font-mono">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="text-espresso-700">·</span>
          <span className="text-xs tracking-wider uppercase text-cream-300">
            {currentItem.categoryLabel}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-espresso-800 text-cream-200 hover:text-white transition-colors"
          aria-label="Close Lightbox (Esc)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full py-4 select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-espresso-900/80 hover:bg-espresso-800 text-cream-100 hover:text-white border border-espresso-700 transition-all hover:scale-110 active:scale-95"
          aria-label="Previous Image (Left Arrow)"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="relative w-full h-full max-h-[75vh] flex items-center justify-center">
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain"
            priority
          />
        </div>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-espresso-900/80 hover:bg-espresso-800 text-cream-100 hover:text-white border border-espresso-700 transition-all hover:scale-110 active:scale-95"
          aria-label="Next Image (Right Arrow)"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Bottom Info Bar */}
      <div
        className="max-w-3xl mx-auto w-full text-center z-10 px-4 space-y-1.5"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-serif text-lg sm:text-xl text-cream-50 font-medium">
          {currentItem.title}
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-400 font-light">
          {currentItem.description}
        </p>
        {currentItem.cameraInfo && (
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-caramel-400/80 font-mono pt-1">
            <Camera className="w-3 h-3" />
            <span>{currentItem.cameraInfo}</span>
          </div>
        )}
      </div>
    </div>
  );
}

