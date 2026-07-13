import { institution } from "../../data/siteContent";
import { PlaceholderArt } from "../ui/PlaceholderArt";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function InstitutionCTA() {
  return (
    <section className="bg-navy-deep py-24 text-cream sm:py-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-gold">
            {institution.eyebrow}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl">{institution.heading}</h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">{institution.text}</p>
          <div className="mt-9">
            <Button to="/projects/the-shri-ram-universal-school">DISCOVER THE SCHOOL</Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <PlaceholderArt seed={11} tone="burgundy" label="Shri Ram Universal School" className="aspect-[4/3] w-full rounded-2xl" />
        </Reveal>
      </div>
    </section>
  );
}
