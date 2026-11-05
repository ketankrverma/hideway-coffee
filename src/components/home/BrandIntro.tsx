import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Coffee, Sparkles } from "lucide-react";

export default function BrandIntro() {
  return (
    <section className="py-24 lg:py-32 bg-cream-100 text-espresso-950 overflow-hidden border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Storytelling (Cols 1-6) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-caramel-700 text-xs font-mono tracking-[0.2em] uppercase font-semibold">
                <Coffee className="w-3.5 h-3.5 text-caramel-600" />
                <span>The Soho Sanctuary · London W1</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-normal text-espresso-950 leading-[1.15]">
                An oasis of calm tucked off the vibrant streets of{" "}
                <span className="italic font-light text-caramel-600 font-serif">the West End.</span>
              </h2>
            </div>

            <div className="space-y-5 text-charcoal-700 text-base sm:text-lg font-light leading-relaxed">
              <p>
                Farrier&apos;s Passage has long been one of Soho&apos;s best-kept secrets. While the kinetic
                hum of Wardour Street and the theatre crowds of Shaftesbury Avenue sweep past just
                paces away, step beneath our lantern and the tempo softly shifts.
              </p>
              <p>
                Hideaway was born from an appreciation for proper specialty coffee, served without
                pretence. Here, Scandinavian architectural warmth—solid English oak, tactile stoneware,
                and linen banquettes—meets the timeless independent spirit of central London.
              </p>
            </div>

            {/* Editorial London Barometer / Dial-in Metrics */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-cream-300">
              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl font-medium text-espresso-950">
                  Dialled-In Daily
                </span>
                <p className="text-xs text-charcoal-600 font-light">
                  Water remineralised to London specialty standards. Extraction calibrated every morning at dawn.
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl font-medium text-espresso-950">
                  Quiet Courtyard
                </span>
                <p className="text-xs text-charcoal-600 font-light">
                  A pedestrian alleyway shielded from traffic. Soft natural light, acoustic calm, and proper hospitality.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-6">
              <Link
                href="/story"
                className="inline-flex items-center gap-2 font-serif text-base text-espresso-950 hover:text-caramel-700 font-medium group transition-colors"
              >
                <span>Read The Farrier&apos;s Passage Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-caramel-600" />
              </Link>
              <span className="text-charcoal-300">•</span>
              <Link
                href="/visit"
                className="text-xs font-mono uppercase tracking-widest text-charcoal-600 hover:text-espresso-950 font-medium transition-colors"
              >
                How to find us in Soho &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Large Lifestyle Photography (Cols 7-12) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Lifestyle Image */}
              <div className="relative aspect-[4/5] rounded-xs overflow-hidden shadow-2xl border border-cream-300 bg-espresso-950">
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
                  alt="Hideaway Coffee House interior with natural English oak and warm pendant light"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Accent Card with Barista Precision */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 bg-cream-50 p-5 sm:p-6 rounded-xs shadow-xl border border-cream-200 max-w-xs hidden sm:block">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xs bg-caramel-100 flex items-center justify-center text-caramel-700 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest font-mono text-caramel-700 font-semibold">
                      London Barista Standard
                    </span>
                    <p className="font-serif text-sm text-espresso-900 font-medium leading-snug">
                      &ldquo;Every cup weighed, calibrated, and poured with genuine warmth.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Image */}
              <div className="absolute -top-6 -right-6 sm:-right-8 w-32 sm:w-44 aspect-square rounded-xs overflow-hidden shadow-lg border-2 border-cream-50 hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80"
                  alt="Velvet Flat white latte art pour"
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
