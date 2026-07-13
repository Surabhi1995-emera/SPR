export interface SiteEvent {
  slug: string;
  title: string;
  date: string;
  location: string;
  summary: string;
}

/**
 * Placeholder events — sprindia.com's Events page content wasn't available
 * to source from. Replace with real event copy/dates before launch.
 */
export const events: SiteEvent[] = [
  {
    slug: "spr-city-township-walkthrough",
    title: "SPR City Township Walkthrough",
    date: "TBA",
    location: "SPR City, Chennai",
    summary: "A guided walkthrough of SPR City's residences, retail, and amenities for prospective homeowners.",
  },
  {
    slug: "mall-of-madras-festive-showcase",
    title: "The Mall of Madras — Festive Showcase",
    date: "TBA",
    location: "The Mall of Madras, SPR City",
    summary: "Seasonal retail and dining showcase at SPR City's landmark mall.",
  },
  {
    slug: "nri-investor-meet",
    title: "NRI Investor Meet",
    date: "TBA",
    location: "SPR India, Chennai",
    summary: "A dedicated session for NRI investors on SPR India's residential and commercial portfolio.",
  },
];
