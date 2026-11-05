import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story of Hideaway Coffee House in Farrier's Passage, Soho. London specialty coffee culture, Scandinavian minimalism, and mindful hospitality in W1.",
};

export default function StoryPage() {
  return (
    <div className="bg-cream-50 text-espresso-950">
      {/* Editorial Header */}
      <section className="relative py-24 lg:py-32 bg-espresso-950 text-cream-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=2000&q=80"
            alt="Hideaway Coffee House interior storytelling"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.35] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-caramel-300 text-xs font-mono tracking-[0.25em] uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Soho Narrative · W1</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-cream-50 leading-tight">
            Craft, Quiet, &amp; The Art of the{" "}
            <span className="italic font-light text-caramel-300 font-serif">Everyday Cup.</span>
          </h1>
          <p className="text-base sm:text-xl text-cream-200/90 font-light max-w-2xl mx-auto leading-relaxed">
            How a quiet passage off London&apos;s most kinetic neighbourhood became an everyday refuge
            for coffee enthusiasts, flâneurs, and contemplative spirits.
          </p>
        </div>
      </section>

      {/* Chapter 1: The Passage */}
      <section className="py-20 lg:py-28 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-caramel-700 font-semibold block">
                Chapter I · The Sanctuary in W1
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-espresso-950 leading-tight">
                Tucked away from the London rush.
              </h2>
              <div className="space-y-4 text-charcoal-700 text-base sm:text-lg font-light leading-relaxed">
                <p>
                  Soho is celebrated worldwide for its creative pulse—the neon signs, West End
                  theatre queues, historic jazz basements, and buzzing record shops. Yet great
                  cities require counterpoints: spaces where the pace gently slows to the steady
                  drip of a pour-over.
                </p>
                <p>
                  At 7 Farrier&apos;s Passage, the cobblestones absorb the clamour of black cabs.
                  We designed Hideaway as a natural extension of this architectural secrecy.
                  Stepping through our oak threshold, you are met with gentle acoustic warmth,
                  the fragrance of freshly ground Ethiopian beans, and baristas who know that hospitality
                  is an art of human connection.
                </p>
              </div>

              {/* Pull quote */}
              <blockquote className="p-6 bg-cream-100 border-l-2 border-caramel-600 rounded-r-xs italic font-serif text-lg text-espresso-950">
                &ldquo;We wanted a space where you could pause without feeling hurried. Where
                proper coffee and timeless simplicity create an effortless sense of calm.&rdquo;
              </blockquote>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] rounded-xs overflow-hidden shadow-xl border border-cream-200">
                <Image
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
                  alt="Farriers passage exterior mood in central London"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Coffee Culture & Quality */}
      <section className="py-20 lg:py-28 bg-cream-100 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="relative aspect-[4/5] rounded-xs overflow-hidden shadow-xl border border-cream-200">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
                  alt="Barista calibrating single origin filter coffee"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-caramel-700 font-semibold block">
                Chapter II · The London Specialty Craft
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-espresso-950 leading-tight">
                Respecting the bean, from origin to cup.
              </h2>
              <div className="space-y-4 text-charcoal-700 text-base sm:text-lg font-light leading-relaxed">
                <p>
                  London possesses one of the world&apos;s most discerning coffee scenes. To stand
                  out here is not about chasing passing fads; it is about relentless calibration,
                  ethical traceability, and pure extraction discipline.
                </p>
                <p>
                  We roast and brew in harmony with seasonal harvest cycles. Every coffee on our hopper has
                  a farmer, a washing station, an altitude, and a distinct processing method. We remineralise
                  London water with precision magnesium-calcium balance to unlock floral aromatics, and we steam
                  milk to an exact 62°C so natural sweetness shines without compromise.
                </p>
              </div>

              {/* 3 Quality Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-white/80 rounded-xs border border-cream-200 space-y-1">
                  <span className="font-serif font-medium text-espresso-950 block text-base">
                    Direct Trade
                  </span>
                  <p className="text-xs text-charcoal-600 font-light">
                    Micro-lots paid significantly above Fairtrade minimums.
                  </p>
                </div>
                <div className="p-4 bg-white/80 rounded-xs border border-cream-200 space-y-1">
                  <span className="font-serif font-medium text-espresso-950 block text-base">
                    Mineral Water
                  </span>
                  <p className="text-xs text-charcoal-600 font-light">
                    Custom reverse-osmosis filtration tuned for London soft water profile.
                  </p>
                </div>
                <div className="p-4 bg-white/80 rounded-xs border border-cream-200 space-y-1">
                  <span className="font-serif font-medium text-espresso-950 block text-base">
                    Micro-Foam
                  </span>
                  <p className="text-xs text-charcoal-600 font-light">
                    Silky texture poured with organic British dairy and Minor Figures oat m*lk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Architectural Experience */}
      <section className="py-20 lg:py-28 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-caramel-700 font-semibold block">
              Chapter III · The Space
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-espresso-950 leading-tight">
              Scandinavian Calm Meets London Character
            </h2>
            <p className="text-charcoal-600 font-light text-base sm:text-lg leading-relaxed">
              Every detail inside Hideaway has been chosen to cultivate serenity. From solid English
              oak tables and matte linen banquettes to warm recessed architectural lighting and
              tactile stoneware ceramics made by independent potters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-xs overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                  alt="Minimal Scandinavian cafe interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-espresso-950 font-medium">Natural Timber &amp; Daylight</h3>
              <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                Untreated oak benches and wide light wells that catch London daylight through the seasons.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-xs overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80"
                  alt="Handmade ceramic cups and saucers"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-espresso-950 font-medium">Tactile Ceramics</h3>
              <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                Custom stoneware fired with iron-speckled clay that retains thermal heat and feels grounding in the hand.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-xs overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80"
                  alt="Warm corner nook for reading and conversation"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-espresso-950 font-medium">Acoustic Balance</h3>
              <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                Carefully tuned acoustics allowing gentle conversations to unfold without reverberation or noise fatigue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editable Business Note / Archive Notice */}
      <section className="py-16 bg-cream-100 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-cream-50 rounded-xs border border-cream-300 space-y-3">
            <div className="flex items-center gap-2 text-caramel-700 text-xs font-mono uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Brand Documentation &amp; Archival Note</span>
            </div>
            <p className="text-xs text-charcoal-600 font-light leading-relaxed font-mono">
              This brand story reflects Hideaway Coffee House’s verified location at 7 Farrier&apos;s Passage,
              Soho, London, and its culinary ethos. Specific historical founding milestones and founder
              biographies are maintained as editable placeholders until the official archival records
              are released by the team.
            </p>
          </div>
        </div>
      </section>

      {/* CTA to Visit */}
      <section className="py-20 text-center bg-espresso-950 text-cream-100">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream-50 font-normal">
            Experience Farrier&apos;s Passage for yourself.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-400 font-light">
            We are open daily in Soho, ready to brew you a thoughtful cup. Walk-ins always welcome.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              href="/visit"
              className="inline-flex items-center gap-2 bg-caramel-600 hover:bg-caramel-500 text-espresso-950 font-medium px-6 py-3 rounded-xs text-xs uppercase tracking-widest transition-colors"
            >
              <span>Visit Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-espresso-900 hover:bg-espresso-800 text-cream-200 px-6 py-3 rounded-xs text-xs uppercase tracking-widest border border-espresso-800 transition-colors"
            >
              <span>View The Menu</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
