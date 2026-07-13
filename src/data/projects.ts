export type ProjectCategory = "Residential" | "Commercial" | "Institution";
export type ProjectStatus = "Completed" | "Ongoing" | "Upcoming";

export interface Project {
  slug: string;
  name: string;
  location: string;
  category: ProjectCategory;
  status: ProjectStatus;
  config: string;
  rera: string;
  summary: string;
  description: string[];
  features: string[];
}

/**
 * Copy sourced from sprindia.com where visible. Projects without published
 * detail copy carry a placeholder summary/RERA flagged "available on
 * request" — replace with real copy + RERA numbers before launch.
 */
export const projects: Project[] = [
  {
    slug: "tower-c-d",
    name: "Tower C & D",
    location: "SPR City, Chennai",
    category: "Residential",
    status: "Completed",
    config: "2, 3, 4 & 5 BHK Luxury Apartments",
    rera: "TN/29/Building/0390/2024",
    summary: "Luxury residences at the heart of SPR City, Chennai's largest integrated township.",
    description: [
      "Tower C & D sit within SPR City, Chennai's largest integrated township — a self-sustaining ecosystem of homes, retail, and civic infrastructure.",
      "Residences span 2, 3, 4 and 5 BHK configurations, designed for families who want township-scale amenities without leaving home.",
    ],
    features: ["Integrated township address", "75+ resident amenities", "Strategic Perambur location", "Sustainable design"],
  },
  {
    slug: "osian-heights",
    name: "Osian Heights",
    location: "Old Washermanpet, Chennai",
    category: "Residential",
    status: "Completed",
    config: "2, 3 & 4 BHK Luxury Apartments",
    rera: "TN/29/Building/0038/2022",
    summary: "Luxury apartments in Old Washermanpet, close to Chennai's commercial core.",
    description: [
      "Osian Heights brings luxury 2, 3 and 4 BHK homes to Old Washermanpet, minutes from central Chennai.",
      "Part of the Osian collection — SPR India's residences built for everyday comfort and long-term value.",
    ],
    features: ["Central Chennai location", "Premium specifications", "24/7 security", "Landscaped common areas"],
  },
  {
    slug: "osian-chlorophyll",
    name: "Osian Chlorophyll",
    location: "Porur, Chennai",
    category: "Residential",
    status: "Completed",
    config: "2, 3 & 4 BHK Luxury Apartments",
    rera: "Available on request",
    summary: "Green-forward residences in Porur, one of Chennai's fastest-growing suburbs.",
    description: [
      "Osian Chlorophyll offers 2, 3 and 4 BHK homes in Porur, designed around light, greenery, and open space.",
      "Part of the Osian collection — SPR India's residences built for everyday comfort and long-term value.",
    ],
    features: ["Extensive green cover", "Porur connectivity", "Clubhouse & amenities", "Ample natural light"],
  },
  {
    slug: "sky-towers",
    name: "Sky Towers",
    location: "Chennai",
    category: "Residential",
    status: "Completed",
    config: "Details available on request",
    rera: "Available on request",
    summary: "High-rise residences designed for skyline living in Chennai.",
    description: ["Sky Towers is part of SPR India's residential portfolio in Chennai. Full specifications are available on request."],
    features: ["High-rise living", "SPR India craftsmanship"],
  },
  {
    slug: "tower-a-b-h",
    name: "Tower A, B, H",
    location: "SPR City, Chennai",
    category: "Residential",
    status: "Completed",
    config: "Details available on request",
    rera: "Available on request",
    summary: "Residential towers within SPR City, Chennai's largest integrated township.",
    description: ["Towers A, B and H form part of the SPR City residential precinct. Full specifications are available on request."],
    features: ["Integrated township address", "75+ resident amenities"],
  },
  {
    slug: "the-madras-bungalows",
    name: "The Madras Bungalows",
    location: "Chennai",
    category: "Residential",
    status: "Completed",
    config: "Details available on request",
    rera: "Available on request",
    summary: "Independent bungalow living within the SPR India portfolio.",
    description: ["The Madras Bungalows offers low-rise, independent-home living in Chennai. Full specifications are available on request."],
    features: ["Independent homes", "SPR India craftsmanship"],
  },
  {
    slug: "osian-one",
    name: "Osian One",
    location: "Chennai",
    category: "Residential",
    status: "Ongoing",
    config: "Details available on request",
    rera: "Available on request",
    summary: "The latest address in SPR India's Osian residential collection.",
    description: ["Osian One continues SPR India's Osian collection of considered, everyday-luxury residences. Full specifications are available on request."],
    features: ["Osian collection", "SPR India craftsmanship"],
  },
  {
    slug: "market-of-india",
    name: "Market of India",
    location: "SPR City, Chennai",
    category: "Commercial",
    status: "Completed",
    config: "High-street & retail spaces",
    rera: "Available on request",
    summary: "A retail precinct within SPR City bringing everyday commerce to the township's doorstep.",
    description: ["Market of India is SPR City's retail high street — grocery, services, and everyday commerce woven into the township."],
    features: ["Integrated township retail", "Walkable high street"],
  },
  {
    slug: "the-mall-of-madras",
    name: "The Mall of Madras",
    location: "SPR City, Chennai",
    category: "Commercial",
    status: "Completed",
    config: "Retail, dining & entertainment",
    rera: "Available on request",
    summary: "Chennai's landmark retail and entertainment destination at SPR City.",
    description: [
      "The Mall of Madras anchors SPR City with premium retail, dining, and entertainment — a destination in its own right, not just an amenity.",
    ],
    features: ["Anchor retail destination", "Dining & entertainment", "Landmark architecture"],
  },
  {
    slug: "india-trade-centre",
    name: "India Trade Centre",
    location: "SPR City, Chennai",
    category: "Commercial",
    status: "Completed",
    config: "Grade-A commercial office space",
    rera: "Available on request",
    summary: "A commercial and business landmark, complete with its own clock tower, at SPR City.",
    description: ["India Trade Centre brings Grade-A commercial office space to SPR City, marked by its landmark clock tower facade."],
    features: ["Grade-A office space", "Landmark clock tower", "Integrated township location"],
  },
  {
    slug: "high-street-retail",
    name: "High Street Retail",
    location: "SPR City, Chennai",
    category: "Commercial",
    status: "Completed",
    config: "High-street retail units",
    rera: "Available on request",
    summary: "Street-facing retail units serving SPR City's residential population.",
    description: ["High Street Retail lines SPR City's main thoroughfares with shopfront retail, built to serve the township's residents day to day."],
    features: ["Street-facing units", "Serves resident footfall"],
  },
  {
    slug: "the-shri-ram-universal-school",
    name: "The Shri Ram Universal School",
    location: "SPR City, Chennai",
    category: "Institution",
    status: "Completed",
    config: "K-12 institution",
    rera: "Not applicable",
    summary: "A landmark school bringing academic excellence into SPR City's integrated township.",
    description: [
      "The Shri Ram Universal School is part of SPR City's self-sustaining ecosystem — so families in the township have a landmark institution on their doorstep.",
    ],
    features: ["Within SPR City", "K-12 curriculum", "Part of the township ecosystem"],
  },
];

export const projectCategories: ProjectCategory[] = ["Residential", "Commercial", "Institution"];
