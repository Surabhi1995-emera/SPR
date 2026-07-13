import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-burgundy py-24 text-cream sm:py-32">
      <div className="grain-overlay" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-10">
        <Reveal>
          <span className="mb-4 block text-xs tracking-[0.3em] text-gold">START YOUR JOURNEY HOME</span>
          <h2 className="font-display text-4xl leading-tight sm:text-6xl">
            Your next chapter,
            <span className="block font-script text-gold">built to last</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm text-cream/70 sm:text-base">
            Speak with our team about residences, retail, and office space across SPR City and beyond.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="filled">
              ENQUIRE NOW
            </Button>
            <Button to="/projects" variant="outline">
              VIEW PROJECTS
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
