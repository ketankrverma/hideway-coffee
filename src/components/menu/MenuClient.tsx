"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { MENU_ITEMS, FEATURED_ORIGINS } from "@/data/coffeeData";
import { Coffee, Search, Sparkles, Filter, Leaf, Info } from "lucide-react";

const CATEGORIES = [
  { key: "all", label: "All Offerings" },
  { key: "espresso", label: "Espresso & Filter" },
  { key: "milk-based", label: "Milk-Based Coffee" },
  { key: "iced", label: "Iced & Cold Brew" },
  { key: "tea-drinks", label: "Rare Tea & Drinks" },
  { key: "pastries", label: "Morning Bakes" },
  { key: "food", label: "Sourdough & Fare" },
];

export default function MenuClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [dietaryFilter, setDietaryFilter] = useState<string>("all");

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }
      // Dietary filter match
      if (dietaryFilter !== "all") {
        if (!item.dietary || !item.dietary.some((d) => d.toLowerCase().includes(dietaryFilter.toLowerCase()))) {
          return false;
        }
      }
      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesDietary = item.dietary?.some((d) => d.toLowerCase().includes(query));
        return matchesName || matchesDesc || matchesDietary;
      }
      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Featured Single Origin Strip - Hopper Showcase */}
      <section className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-caramel-700 text-xs font-mono tracking-widest uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Currently Dialled In on the Hopper</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-espresso-950 font-medium">
            Featured Single Origins &amp; Seasonal Roasts
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light">
            We partner with independent micro-lot roasters to bring exceptional seasonal coffees to Farrier&apos;s Passage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_ORIGINS.map((origin) => (
            <div
              key={origin.name}
              className="bg-white p-6 rounded-xs border border-cream-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-caramel-400 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-caramel-700 font-mono font-semibold">
                    {origin.region}
                  </span>
                  <span className="text-[11px] text-charcoal-500 font-mono">{origin.altitude}</span>
                </div>
                <h3 className="font-serif text-xl text-espresso-950 font-medium">
                  {origin.name}
                </h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  {origin.roasterNote}
                </p>
              </div>

              <div className="pt-3 border-t border-cream-200 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-charcoal-500 font-mono">
                  <span>Process:</span>
                  <span className="font-medium text-espresso-950">{origin.process}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {origin.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className="text-[10px] bg-cream-100 text-espresso-900 px-2 py-0.5 rounded-xs font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter & Search Bar */}
      <div className="space-y-6 mb-12">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xs text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-espresso-950 text-cream-50 shadow-xs"
                  : "bg-white text-charcoal-700 hover:bg-cream-100 border border-cream-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Dietary Filters Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 bg-white rounded-xs border border-cream-200">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coffee, drinks, fresh bakes or sourdough fare..."
              className="w-full pl-9 pr-4 py-2 bg-cream-50/50 border border-cream-200 rounded-xs text-xs text-espresso-950 placeholder:text-charcoal-400 focus:outline-none focus:border-caramel-500"
            />
          </div>

          {/* Dietary Filter Selector */}
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-charcoal-500 shrink-0" />
            <span className="text-xs text-charcoal-600 hidden md:inline font-mono">Dietary:</span>
            <select
              value={dietaryFilter}
              onChange={(e) => setDietaryFilter(e.target.value)}
              className="bg-cream-50/50 border border-cream-200 rounded-xs text-xs px-3 py-2 text-espresso-950 focus:outline-none focus:border-caramel-500 cursor-pointer font-mono"
            >
              <option value="all">All Dietary Options</option>
              <option value="vegan">Vegan</option>
              <option value="gluten-free">Gluten-Free</option>
              <option value="oat">Oat M*lk Available</option>
            </select>
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xs border border-cream-200 space-y-3">
          <Coffee className="w-8 h-8 text-charcoal-400 mx-auto" />
          <h3 className="font-serif text-xl text-espresso-950">No items match your criteria</h3>
          <p className="text-xs text-charcoal-500 font-light">
            Try clearing your search query or changing the category filter.
          </p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
              setDietaryFilter("all");
            }}
            className="text-xs text-caramel-700 underline font-medium pt-2 cursor-pointer font-mono"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xs border border-cream-200 p-5 sm:p-6 flex flex-col sm:flex-row gap-5 hover:shadow-md hover:border-caramel-400/60 transition-all duration-300"
            >
              {/* Optional Item Thumbnail */}
              {item.image && (
                <div className="relative w-full sm:w-28 h-36 sm:h-28 shrink-0 rounded-xs overflow-hidden bg-cream-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 120px"
                    className="object-cover"
                  />
                  {item.highlight && (
                    <span className="absolute top-1 left-1 bg-espresso-950 text-caramel-300 text-[9px] font-mono px-1.5 py-0.5 rounded-xs">
                      Soho Pick
                    </span>
                  )}
                </div>
              )}

              {/* Item Details */}
              <div className="flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-lg text-espresso-950 font-medium">
                      {item.name}
                    </h3>
                    <span className="font-mono text-sm sm:text-base text-espresso-950 font-semibold shrink-0">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                    {item.description}
                  </p>

                  {item.notes && (
                    <p className="text-[11px] text-caramel-700/90 font-light italic font-serif">
                      {item.notes}
                    </p>
                  )}
                </div>

                {/* Dietary Tags */}
                {item.dietary && item.dietary.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-cream-100">
                    {item.dietary.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-cream-100 text-charcoal-700 px-2 py-0.5 rounded-xs flex items-center gap-1 font-mono"
                      >
                        <Leaf className="w-2.5 h-2.5 text-caramel-600" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Editable Menu Disclaimer Box */}
      <div className="mt-16 p-6 bg-cream-100 rounded-xs border border-cream-200 flex items-start gap-4">
        <Info className="w-5 h-5 text-caramel-700 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-charcoal-600 font-mono">
          <p className="font-medium text-espresso-950">
            Sample London Specialty Menu &amp; Seasonal Rotation Notice
          </p>
          <p className="font-light leading-relaxed font-sans">
            This menu presents representative specialty coffee drinks, Swedish pastries, and light
            sourdough fare for Hideaway Coffee House. Prices and specific single-origin lots rotate
            regularly according to crop arrivals. Please inform your barista of any allergies prior to ordering.
          </p>
        </div>
      </div>
    </div>
  );
}
