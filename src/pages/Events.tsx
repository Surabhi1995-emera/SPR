import { PageHero } from "../components/layout/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { PlaceholderArt } from "../components/ui/PlaceholderArt";
import { CTA } from "../components/sections/CTA";
import { events } from "../data/events";

export function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        heading="Moments from"
        script="the SPR India township"
        text="Walkthroughs, showcases, and investor sessions across SPR City and our residential communities."
      />

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, i) => (
              <Reveal key={event.slug} delay={i * 0.08}>
                <div className="overflow-hidden rounded-2xl border border-navy/10">
                  <PlaceholderArt seed={i + 5} tone={i % 2 ? "burgundy" : "navy"} label={event.title} className="aspect-[4/3] w-full" />
                  <div className="p-6">
                    <span className="text-xs tracking-[0.2em] text-gold">{event.date.toUpperCase()}</span>
                    <h3 className="mt-2 font-display text-xl text-navy">{event.title}</h3>
                    <p className="mt-1 text-sm text-ink/60">{event.location}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/75">{event.summary}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
