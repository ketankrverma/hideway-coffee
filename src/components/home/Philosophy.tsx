import { Award, Compass, SunMedium, Heart } from "lucide-react";

const PILLARS = [
  {
    number: "01",
    title: "Quality Coffee",
    subtitle: "Ethical Origins & Transparent Roasting",
    description:
      "We partner directly with smallholder coffee farms across Ethiopia, Colombia, Guatemala, and Kenya. Sourced for clean sweetness, ethical traceability, and roasted lightly to preserve the distinct terroir of the soil.",
    icon: Award,
  },
  {
    number: "02",
    title: "Thoughtful Preparation",
    subtitle: "Precision Ratios & Filtered Water",
    description:
      "Espresso is an exact science. Every dose is weighed to a tenth of a gram, extraction water is mineral-adjusted for soft London profiles, and steam wands are textured to microscopic microfoam perfection.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Great Atmosphere",
    subtitle: "Scandinavian Serenity in Soho",
    description:
      "Tucked away from the honking taxis of central London, our space is shaped by natural oak timber, tactile ceramic vessels, acoustic quiet, and soft amber lighting. A haven where conversations flourish.",
    icon: SunMedium,
  },
  {
    number: "04",
    title: "Everyday Moments",
    subtitle: "Mindful Hospitality for Everyone",
    description:
      "Whether you are popping in for an 8:00 AM flat white before the tube, working quietly on a notebook in the afternoon corner, or lingering over cardamom buns with a close friend, you are always at home.",
    icon: Heart,
  },
];

export default function Philosophy() {
  return (
    <section className="py-24 lg:py-32 bg-espresso-950 text-cream-100 border-b border-espresso-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-caramel-700/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-caramel-400 text-xs tracking-[0.25em] uppercase font-semibold">
            <span>Our Foundation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream-50 font-normal leading-tight">
            Our Philosophy
          </h2>
          <p className="text-charcoal-400 font-light text-base sm:text-lg leading-relaxed">
            Four quiet pillars that guide every bean we source, every cup we pour, and the welcoming space we open every morning.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative p-8 bg-espresso-900/60 hover:bg-espresso-900 border border-espresso-800/80 hover:border-caramel-500/40 rounded-xs transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between border-b border-espresso-800/80 pb-4">
                    <span className="font-serif text-2xl text-caramel-400/80 font-normal">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-espresso-950 border border-espresso-800 flex items-center justify-center text-caramel-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-cream-100 font-medium group-hover:text-caramel-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-caramel-400/90 font-medium">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-400 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-espresso-800/40 flex items-center gap-2 text-[11px] font-mono text-charcoal-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-caramel-600" />
                  <span>Hideaway Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

