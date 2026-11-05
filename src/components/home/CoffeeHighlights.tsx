import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplets, Sparkles } from "lucide-react";

interface HighlightCoffee {
  title: string;
  category: string;
  description: string;
  tastingNotes: string[];
  price: string;
  image: string;
  metric: string;
}

const HIGHLIGHTS: HighlightCoffee[] = [
  {
    title: "Specialty Espresso",
    category: "Signature Double Shot",
    description: "Concentrated 18.5g dose pulled over 27 seconds. Rich crema, sparkling stone-fruit acidity, and a lingering cacao finish. Served with chilled sparkling water.",
    tastingNotes: ["Dark Chocolate", "Bergamot", "Marmalade"],
    price: "£3.60",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    metric: "18.5g in · 38g out · 93°C",
  },
  {
    title: "Velvet Flat White",
    category: "London Specialty Classic",
    description: "Double ristretto gently folded into micro-textured organic British whole milk or Minor Figures oat m*lk with a glossy, silky sheen.",
    tastingNotes: ["Toasted Hazelnut", "Caramelised Sugar", "Velvety Crema"],
    price: "£4.10",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
    metric: "6oz handmade ceramic · 62°C milk",
  },
  {
    title: "Artisan Cappuccino",
    category: "Espresso & Dense Foam",
    description: "Equal proportions of espresso, steamed milk, and dense micro-foam, dusted with Valrhona 70% dark cocoa.",
    tastingNotes: ["Dark Cacao", "Roasted Almond", "Brown Butter"],
    price: "£4.20",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    metric: "Equal 1:1:1 harmonious balance",
  },
  {
    title: "Caffè Latte",
    category: "Morning Comfort",
    description: "Gentle double espresso stretched with velvety steamed milk. Mellow, rounded, and wonderfully soothing for an easy London morning.",
    tastingNotes: ["Sweet Cream", "Almond Nougat", "Milk Chocolate"],
    price: "£4.30",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80",
    metric: "8oz artisanal stoneware tumbler",
  },
  {
    title: "Kyoto Cold Brew",
    category: "16-Hour Slow Drip",
    description: "Single water drops filtered through freshly ground single-origin coffee over 16 hours. Wine-like clarity and natural dark fruit sweetness.",
    tastingNotes: ["Black Cherry", "Bourbon Vanilla", "Dark Chocolate"],
    price: "£4.50",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    metric: "1 drop per 1.5 seconds",
  },
];

export default function CoffeeHighlights() {
  return (
    <section className="py-24 lg:py-32 bg-cream-50 text-espresso-950 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-caramel-700 text-xs font-mono tracking-[0.2em] uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dialled-in Daily · Soho London</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-espresso-950 leading-tight">
              Coffee Highlights
            </h2>
            <p className="text-charcoal-600 font-light text-base sm:text-lg">
              Precision extractions, rotating single-origin lots, and properly steamed British organic dairy.
              Every drink is crafted with deliberate care.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 font-serif text-base text-espresso-950 hover:text-caramel-700 font-medium group transition-colors self-start md:self-end"
          >
            <span>Explore Full Menu &amp; Origins</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-caramel-600" />
          </Link>
        </div>

        {/* Coffee Grid - 5 image-led cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col bg-white rounded-xs border border-cream-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-3 right-3 bg-espresso-950/85 backdrop-blur-xs text-cream-100 text-xs font-mono font-medium px-2.5 py-1 rounded-xs">
                  {item.price}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-caramel-700 font-semibold block font-mono">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl text-espresso-950 font-medium group-hover:text-caramel-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 font-light leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-cream-200">
                  {/* Flavour notes */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tastingNotes.map((note) => (
                      <span
                        key={note}
                        className="text-[10px] bg-cream-100 text-espresso-900 px-2 py-0.5 rounded-xs font-medium"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  {/* Calibration metric */}
                  <span className="block text-[10px] font-mono text-charcoal-500 truncate">
                    {item.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* London Coffee House Note */}
        <div className="mt-12 p-4 bg-cream-100/80 border border-cream-200 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-700 font-mono">
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-caramel-600 shrink-0" />
            <span>
              All milk-based coffees served with organic British dairy or Minor Figures Oat M*lk at no surcharge.
            </span>
          </div>
          <span className="text-caramel-700 font-semibold">
            Single-origin filter rotates weekly on Tuesdays
          </span>
        </div>
      </div>
    </section>
  );
}
