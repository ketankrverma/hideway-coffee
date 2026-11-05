export interface MenuItem {
  id: string;
  name: string;
  category: "espresso" | "milk-based" | "iced" | "tea-drinks" | "pastries" | "food";
  description: string;
  price: string;
  notes?: string;
  dietary?: string[];
  image?: string;
  highlight?: boolean;
}

export interface CoffeeOrigin {
  name: string;
  region: string;
  variety: string;
  process: string;
  altitude: string;
  tastingNotes: string[];
  roasterNote: string;
}

export const FEATURED_ORIGINS: CoffeeOrigin[] = [
  {
    name: "Guji Highland Lot #4",
    region: "Oromia, Ethiopia",
    variety: "Heirloom & Kurume",
    process: "Washed / Sun-dried on raised African beds",
    altitude: "2,050 - 2,200 MASL",
    tastingNotes: ["Bergamot", "White Peach", "Jasmine Blossom", "Meyer Lemon"],
    roasterNote:
      "A transcendent washed Ethiopian lot offering vibrant floral aromatics and a sparkling, tea-like clarity. Dialled in for V60 pour-overs and delicate batch brews.",
  },
  {
    name: "Finca El Paraiso",
    region: "Cauca, Colombia",
    variety: "Castillo",
    process: "Thermal Shock Double Anaerobic Fermentation",
    altitude: "1,930 MASL",
    tastingNotes: ["Red Currant", "Pink Grapefruit", "Wild Strawberry", "Cacao Nib"],
    roasterNote:
      "Diego Bermúdez’s renowned precision processing yielding an extraordinarily layered and juicy cup with sublime mouthfeel.",
  },
  {
    name: "Hideaway Soho Espresso Roast",
    region: "Seasonal: Huehuetenango (Guatemala) & Mogiana (Brazil)",
    variety: "Bourbon, Caturra, Yellow Catuai",
    process: "Washed & Pulped Natural",
    altitude: "1,400 - 1,800 MASL",
    tastingNotes: ["Dark Chocolate Truffle", "Roasted Hazelnut", "Seville Marmalade", "Brown Butter"],
    roasterNote:
      "Engineered specifically for cut-through sweetness with steamed British organic dairy and Minor Figures oat m*lk.",
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Espresso
  {
    id: "esp-1",
    name: "Single Origin Double Espresso",
    category: "espresso",
    description: "Precisely extracted 18.5g dose yielding 38g of rich, syrupy espresso. Served with a chilled sparkling water palate cleanser.",
    price: "£3.60",
    notes: "Rotating single origin or signature seasonal house roast",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    highlight: true,
  },
  {
    id: "esp-2",
    name: "Single Origin Filter (V60 or Calibrated Batch)",
    category: "espresso",
    description: "Slow-dripped pour-over or calibrated Marco batch brew emphasizing floral terroir, bright fruit acidity, and delicate clarity.",
    price: "£4.00",
    notes: "Ethiopian Guji or Colombian Micro-lot",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    highlight: true,
  },
  {
    id: "esp-3",
    name: "Cortado / Piccolo",
    category: "espresso",
    description: "Double ristretto cut 1:1 with silky steamed textured milk in an artisanal 4oz ceramic tumbler.",
    price: "£3.80",
    dietary: ["Oat M*lk Available"],
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "esp-4",
    name: "Long Black / Americano",
    category: "espresso",
    description: "Double shot of single-origin espresso gently pulled over 92°C filtered soft London water, preserving the golden crema.",
    price: "£3.70",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80",
  },

  // Milk-Based
  {
    id: "milk-1",
    name: "Velvet Flat White",
    category: "milk-based",
    description: "Double ristretto folded into micro-foamed whole organic British milk with a silky glossy sheen. Our quintessential London pour.",
    price: "£4.10",
    notes: "Organic dairy or Minor Figures oat m*lk",
    dietary: ["Oat M*lk Available"],
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
    highlight: true,
  },
  {
    id: "milk-2",
    name: "Artisan Cappuccino",
    category: "milk-based",
    description: "Equal proportions of rich espresso, textured milk, and dense micro-foam, dusted with Valrhona 70% dark cocoa.",
    price: "£4.20",
    dietary: ["Oat M*lk Available"],
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    highlight: true,
  },
  {
    id: "milk-3",
    name: "Caffè Latte",
    category: "milk-based",
    description: "Gentle double espresso stretched with velvety steamed milk for a lighter, warming morning ritual.",
    price: "£4.30",
    dietary: ["Oat M*lk Available"],
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80",
    highlight: true,
  },
  {
    id: "milk-4",
    name: "Valrhona Single-Origin Mocha",
    category: "milk-based",
    description: "Melted Valrhona Single Origin dark chocolate ganache infused with double espresso and textured organic milk.",
    price: "£4.70",
    dietary: ["Oat M*lk Available"],
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "milk-5",
    name: "Spiced Cardamom & Ceylon Cinnamon Latte",
    category: "milk-based",
    description: "Freshly crushed green cardamom pods, slow-steeped Ceylon cinnamon bark reduction, double espresso, and creamy oat m*lk.",
    price: "£4.80",
    dietary: ["Vegan", "Oat M*lk standard"],
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
  },

  // Iced Coffee
  {
    id: "ice-1",
    name: "Kyoto 16-Hour Cold Drip",
    category: "iced",
    description: "Single water drop extraction over organic ice. Silky, naturally sweet, with lingering dark cocoa and black cherry notes.",
    price: "£4.50",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    highlight: true,
  },
  {
    id: "ice-2",
    name: "Iced Oat Flat White",
    category: "iced",
    description: "Chilled Minor Figures oat m*lk poured over crystal clear ice, topped with a floating double shot of espresso.",
    price: "£4.40",
    dietary: ["Vegan"],
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ice-3",
    name: "Soho Espresso Tonic & Blood Orange",
    category: "iced",
    description: "Fever-Tree Mediterranean tonic water, fresh sprig of garden rosemary, organic blood orange wheel, crowned with single origin espresso.",
    price: "£4.90",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ice-4",
    name: "Iced Ceremonial Uji Matcha Latte",
    category: "iced",
    description: "Stone-ground first-harvest Kyoto matcha whisked to order with chilled oat m*lk and a touch of agave nectar.",
    price: "£5.10",
    dietary: ["Vegan"],
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
  },

  // Tea & Other Drinks
  {
    id: "tea-1",
    name: "Rare Tea Co. London English Breakfast",
    category: "tea-drinks",
    description: "Handcrafted loose-leaf single-estate black tea from Satemwa Estate. Robust, malted, and perfectly suited to British mornings.",
    price: "£3.80",
    dietary: ["Vegan"],
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tea-2",
    name: "Ceremonial Uji Matcha Flat White",
    category: "tea-drinks",
    description: "Vibrant shade-grown Japanese matcha whisked with 70°C water and textured into micro-foamed oat m*lk.",
    price: "£4.90",
    dietary: ["Vegan"],
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tea-3",
    name: "Sticky Masala Chai (Simmered in House)",
    category: "tea-drinks",
    description: "Whole roasted botanicals and spices slow-simmered with raw wildflower honey, single estate Assam, and steamed British milk.",
    price: "£4.60",
    dietary: ["Vegetarian", "Oat M*lk Available"],
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tea-4",
    name: "Single-Estate Jasmine Silver Needle White Tea",
    category: "tea-drinks",
    description: "Fujian white tea leaves repeatedly scent-infused over whole fresh jasmine blossoms under moonlight.",
    price: "£4.20",
    dietary: ["Vegan"],
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
  },

  // Pastries
  {
    id: "pastry-1",
    name: "Swedish Cardamom & Brown Butter Knot",
    category: "pastries",
    description: "Scandinavian style hand-twisted laminated brioche dough packed with freshly ground green cardamom and pearl sugar. Baked fresh every morning.",
    price: "£4.20",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    highlight: true,
  },
  {
    id: "pastry-2",
    name: "Twice-Baked Almond Frangipane Croissant",
    category: "pastries",
    description: "Butter croissant soaked in delicate syrup, filled with rich almond cream and toasted flaked almonds.",
    price: "£4.50",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pastry-3",
    name: "Valrhona Pain au Chocolat",
    category: "pastries",
    description: "48-hour fermented laminated pastry folded around two batons of 66% dark Caraïbe chocolate.",
    price: "£4.00",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pastry-4",
    name: "Amalfi Lemon & Bronte Pistachio Polenta Cake",
    category: "pastries",
    description: "Naturally gluten-free moist polenta crumb soaked in fragrant lemon syrup with roasted Sicilian pistachios.",
    price: "£4.40",
    dietary: ["Gluten-Free", "Vegetarian"],
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
  },

  // Food
  {
    id: "food-1",
    name: "Loch Duart Smoked Salmon & Whipped Herb Ricotta",
    category: "food",
    description: "London-cured sustainable Scottish salmon on toasted Hackney Wild sourdough, dill-infused ricotta, caper berries, and lemon zest.",
    price: "£9.80",
    dietary: ["Pescatarian"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    highlight: true,
  },
  {
    id: "food-2",
    name: "Crushed Avocado & Hazelnut Dukkah on Sourdough",
    category: "food",
    description: "Hass avocado, Egyptian roasted hazelnut & sesame dukkah, cold pressed olive oil, chilli flakes, and fresh coriander.",
    price: "£8.50",
    dietary: ["Vegan"],
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "food-3",
    name: "Montgomery's Cheddar & Artisan Kimchi Toastie",
    category: "food",
    description: "Aged Somerset raw-milk cheddar from Neal's Yard Dairy, spicy Napa cabbage kimchi, melted inside buttered sourdough.",
    price: "£8.90",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "food-4",
    name: "Overnight Bircher Muesli with Yorkshire Rhubarb",
    category: "food",
    description: "Rolled Scottish oats steeped in cloudy apple juice & Greek yogurt, topped with poached Yorkshire rhubarb and toasted seeds.",
    price: "£6.80",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
  },
];
