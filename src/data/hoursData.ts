export interface DayHours {
  day: string;
  shortDay: string;
  open: string;
  close: string;
  openTime24: number; // e.g., 7.5 for 7:30
  closeTime24: number; // e.g., 18.0 for 18:00
  isClosed?: boolean;
}

export const OPENING_HOURS: DayHours[] = [
  { day: "Monday", shortDay: "Mon", open: "07:30", close: "18:00", openTime24: 7.5, closeTime24: 18.0 },
  { day: "Tuesday", shortDay: "Tue", open: "07:30", close: "18:00", openTime24: 7.5, closeTime24: 18.0 },
  { day: "Wednesday", shortDay: "Wed", open: "07:30", close: "18:00", openTime24: 7.5, closeTime24: 18.0 },
  { day: "Thursday", shortDay: "Thu", open: "07:30", close: "18:00", openTime24: 7.5, closeTime24: 18.0 },
  { day: "Friday", shortDay: "Fri", open: "07:30", close: "18:00", openTime24: 7.5, closeTime24: 18.0 },
  { day: "Saturday", shortDay: "Sat", open: "08:30", close: "18:30", openTime24: 8.5, closeTime24: 18.5 },
  { day: "Sunday", shortDay: "Sun", open: "09:00", close: "17:30", openTime24: 9.0, closeTime24: 17.5 },
];

export const LOCATION_INFO = {
  name: "Hideaway Coffee House",
  neighborhood: "Soho, Central London",
  addressLine1: "7 Farrier's Passage",
  city: "London",
  postcode: "W1D 7DP",
  fullAddress: "7 Farrier's Passage, London W1D 7DP, United Kingdom",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7+Farriers+Passage+London+W1D+7DP",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=7+Farriers+Passage+London+W1D+7DP",
  phone: "Editable placeholder: +44 20 7946 0192",
  email: "hello@hideawaycoffeehouse.co.uk",
  instagram: "https://instagram.com/hideawaycoffeehouse",
  instagramHandle: "@hideawaycoffeehouse",
  transit: [
    {
      station: "Tottenham Court Road",
      lines: "Elizabeth Line, Central & Northern Lines",
      walkTime: "4 min walk (320m)",
    },
    {
      station: "Leicester Square",
      lines: "Piccadilly & Northern Lines",
      walkTime: "5 min walk (400m)",
    },
    {
      station: "Piccadilly Circus",
      lines: "Bakerloo & Piccadilly Lines",
      walkTime: "6 min walk (480m)",
    },
  ],
  howToFindUs:
    "Farrier's Passage is a peaceful pedestrian alleyway tucked between Wardour Street and Shaftesbury Avenue. Look for our understated brass lantern and oak door midway down the passage.",
};

export function getShopStatus(): { isOpen: boolean; message: string; subtext: string } {
  // Use London time
  const now = new Date();
  // Format for London timezone
  const londonDateStr = now.toLocaleString("en-US", { timeZone: "Europe/London" });
  const londonDate = new Date(londonDateStr);
  const dayIndex = (londonDate.getDay() + 6) % 7; // 0 for Mon, 6 for Sun
  const currentHours = londonDate.getHours() + londonDate.getMinutes() / 60;

  const todayConfig = OPENING_HOURS[dayIndex];
  const tomorrowConfig = OPENING_HOURS[(dayIndex + 1) % 7];

  if (currentHours >= todayConfig.openTime24 && currentHours < todayConfig.closeTime24) {
    return {
      isOpen: true,
      message: "Open Today",
      subtext: `Serving until ${todayConfig.close}`,
    };
  } else if (currentHours < todayConfig.openTime24) {
    return {
      isOpen: false,
      message: "Opens at " + todayConfig.open,
      subtext: `Today at ${todayConfig.open}`,
    };
  } else {
    return {
      isOpen: false,
      message: "Closed for Today",
      subtext: `Opens tomorrow at ${tomorrowConfig.open}`,
    };
  }
}

