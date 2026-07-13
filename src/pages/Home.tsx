import { Hero } from "../components/sections/Hero";
import { AboutTeaser } from "../components/sections/AboutTeaser";
import { LegacyTimeline } from "../components/sections/LegacyTimeline";
import { FeaturedProjects } from "../components/sections/FeaturedProjects";
import { StatsBand } from "../components/sections/StatsBand";
import { InstitutionCTA } from "../components/sections/InstitutionCTA";
import { CTA } from "../components/sections/CTA";

export function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <LegacyTimeline />
      <FeaturedProjects />
      <StatsBand />
      <InstitutionCTA />
      <CTA />
    </>
  );
}
