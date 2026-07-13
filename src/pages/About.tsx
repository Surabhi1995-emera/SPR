import { PageHero } from "../components/layout/PageHero";
import { LegacyTimeline } from "../components/sections/LegacyTimeline";
import { InstitutionCTA } from "../components/sections/InstitutionCTA";
import { CTA } from "../components/sections/CTA";
import { PlaceholderArt } from "../components/ui/PlaceholderArt";
import { Reveal } from "../components/ui/Reveal";
import { about } from "../data/siteContent";

const pillars = [
  { title: "Integrated Township Living", text: "Homes, retail, schooling, and civic life within one address." },
  { title: "World-Class Amenities", text: "75+ features woven into everyday life at SPR City." },
  { title: "Strategic Location", text: "Perambur, at the heart of Chennai's growth corridors." },
  { title: "Sustainable Design", text: "Township planning built for the long term, not just the launch." },
];

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About SPR India"
        heading="Fifty years of"
        script="building Chennai forward"
        text="Founded in 1972, SPR India has grown from a single real-estate venture into the developer behind Chennai's largest integrated township."
      />

      <section className="bg-cream py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-gold">
              The founder
            </span>
            <h2 className="font-display text-4xl text-navy sm:text-5xl">Prithviraj S. Kawad</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/75 sm:text-base">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <PlaceholderArt seed={13} tone="burgundy" label="Est. 1972" className="aspect-[4/3] w-full rounded-2xl" />
          </Reveal>
        </div>
      </section>

      <LegacyTimeline />

      <section className="bg-cream py-24 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <Reveal>
            <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-gold">
              What guides us
            </span>
            <h2 className="max-w-lg font-display text-4xl text-navy sm:text-5xl">
              The pillars behind every SPR India address
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-navy/10 p-7">
                  <span className="font-display text-3xl text-gold">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl text-navy">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InstitutionCTA />
      <CTA />
    </>
  );
}
