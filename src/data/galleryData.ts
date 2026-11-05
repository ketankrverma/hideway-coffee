export interface GalleryItem {
  id: string;
  title: string;
  category: "coffee" | "interiors" | "pastries" | "moments";
  categoryLabel: string;
  image: string;
  aspectRatio: "portrait" | "landscape" | "square";
  description: string;
  cameraInfo?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Morning Ritual on Farrier's Passage",
    category: "moments",
    categoryLabel: "Soho Moments",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    description: "Quiet daylight slipping down the brickwork of Farrier's Passage before Soho awakens.",
    cameraInfo: "35mm · Natural Ambient Light",
  },
  {
    id: "gal-2",
    title: "Precision Micro-Foam Pour",
    category: "coffee",
    categoryLabel: "Specialty Coffee",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "portrait",
    description: "Handcrafted latte art with glossy steamed organic milk folded into double espresso.",
    cameraInfo: "50mm f/1.8 · Barista Station",
  },
  {
    id: "gal-3",
    title: "Scandinavian Oak & Brass Lighting",
    category: "interiors",
    categoryLabel: "Cafe Interiors",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    description: "Minimalist timber seating, warm recessed glow, and tactile linen upholstery designed for calm.",
    cameraInfo: "24mm · Courtyard Room",
  },
  {
    id: "gal-4",
    title: "Single Origin Batch Extraction",
    category: "coffee",
    categoryLabel: "Specialty Coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "portrait",
    description: "Freshly brewed Ethiopian Guji lot dripping with vibrant bergamot and stone fruit aromatics.",
    cameraInfo: "85mm Macro · Brew Bar",
  },
  {
    id: "gal-5",
    title: "Warm Cardamom Knots Fresh from the Oven",
    category: "pastries",
    categoryLabel: "Fresh Bakes",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "square",
    description: "Laminated brioche dusted with crushed green cardamom seeds and Swedish pearl sugar.",
    cameraInfo: "50mm · Pastry Bench",
  },
  {
    id: "gal-6",
    title: "Dialing In the Morning Espresso",
    category: "coffee",
    categoryLabel: "Specialty Coffee",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "portrait",
    description: "Calibrating burrs and weighing dry 18.0g doses for crystal sweet extraction.",
    cameraInfo: "50mm · Espresso Machine",
  },
  {
    id: "gal-7",
    title: "The Quiet Reading Corner",
    category: "interiors",
    categoryLabel: "Cafe Interiors",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    description: "A sunlit corner table tucked away from the Soho bustling crowds, surrounded by curated art books.",
    cameraInfo: "35mm · Window Seat",
  },
  {
    id: "gal-8",
    title: "Artisanal Laminated Croissants",
    category: "pastries",
    categoryLabel: "Fresh Bakes",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "square",
    description: "Honeycomb honeycomb structure achieved through 72 hours of slow cold fermentation.",
    cameraInfo: "85mm · Morning Delivery",
  },
  {
    id: "gal-9",
    title: "Afternoon Conversations & Flat Whites",
    category: "moments",
    categoryLabel: "Soho Moments",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    description: "The steady hum of relaxed conversations, steam wand whispers, and gentle jazz.",
    cameraInfo: "35mm · Main Hall",
  },
  {
    id: "gal-10",
    title: "Handmade Ceramic Cups & Saucers",
    category: "interiors",
    categoryLabel: "Cafe Interiors",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "portrait",
    description: "Locally thrown stoneware ceramics with tactile earthy glazes designed to hold temperature.",
    cameraInfo: "50mm · Bar Counter",
  },
  {
    id: "gal-11",
    title: "Slow Pour Japanese Kyoto Cold Drip",
    category: "coffee",
    categoryLabel: "Specialty Coffee",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "portrait",
    description: "Drop by single drop over 16 hours producing wine-like clarity and natural chocolate sweetness.",
    cameraInfo: "85mm · Cold Drip Tower",
  },
  {
    id: "gal-12",
    title: "Sourdough Toast with Fresh Botanicals",
    category: "pastries",
    categoryLabel: "Fresh Bakes",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    description: "Seasonal brunch creations paired harmoniously with single origin pour overs.",
    cameraInfo: "50mm · Kitchen Pass",
  },
];

