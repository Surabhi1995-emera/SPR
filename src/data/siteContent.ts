export const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Events", to: "/events" },
  { label: "Contact Us", to: "/contact" },
] as const;

export const contact = {
  addressLines: [
    "B&C Mills, SPR India, No:1,",
    "Cooks Rd, Perambur, Chennai,",
    "Tamil Nadu 600012.",
  ],
  phones: ["+91-7550135333", "044-66786600"],
  email: "marketing@sprindia.com",
  social: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export const footerBlurb =
  "Building a legacy of trust and excellence since 1972. Creating integrated townships that redefine urban living in Chennai.";

export const about = {
  eyebrow: "About SPR India",
  heading: "Building a Legacy of",
  headingScript: "Trust & Excellence",
  paragraphs: [
    "SPR India is a leading real estate developer dedicated to the acquisition and development of residential and commercial projects in Chennai. The Group was founded in 1972 by Prithviraj S. Kawad to engage in the business of real estate and property development.",
    "Our flagship project, SPR City, is Chennai's largest integrated township, redefining urban living with a perfect blend of luxury apartments, premium amenities, and a self-sustaining ecosystem.",
  ],
  checklist: [
    "Integrated Township Living",
    "World-Class Amenities",
    "Strategic Location",
    "Sustainable Design",
  ],
};

export const legacyTimeline = [
  {
    year: "1972",
    title: "The foundation",
    text: "Prithviraj S. Kawad founds SPR India, entering real estate and property development in Chennai.",
  },
  {
    year: "1990s",
    title: "Early residential landmarks",
    text: "The Group establishes itself across Chennai's residential landscape, laying the groundwork for larger integrated developments.",
  },
  {
    year: "2010s",
    title: "SPR City begins",
    text: "Work begins on SPR City — envisioned as Chennai's largest integrated township, combining homes, retail, and civic infrastructure.",
  },
  {
    year: "Today",
    title: "An integrated township, realised",
    text: "SPR City stands complete with the Mall of Madras, India Trade Centre, luxury residences, and 75+ amenities — a self-sustaining ecosystem in the heart of Chennai.",
  },
];

export const stats = [
  { value: 50, suffix: "+", label: "Years of legacy" },
  { value: 75, suffix: "+", label: "Joyous features" },
  { value: 9, suffix: "", label: "Landmark projects" },
  { value: 1, suffix: "", label: "Integrated township" },
];

export const institution = {
  eyebrow: "Institution",
  heading: "The Shri Ram Universal School",
  text: "Part of SPR City's self-sustaining ecosystem — bringing a legacy of academic excellence into the township, so learning lives where families live.",
};
