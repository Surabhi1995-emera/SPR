import { about } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";
import { PlaceholderArt } from "../ui/PlaceholderArt";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function AboutTeaser() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <PlaceholderArt seed={7} tone="navy" label="SPR City" className="aspect-[4/3] w-full rounded-2xl" />
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading eyebrow={about.eyebrow} heading={about.heading} script={about.headingScript} />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/75 sm:text-base">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {about.checklist.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-ink/80">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-navy text-[10px] text-gold">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3} className="mt-10">
            <Button to="/about">LEARN MORE ABOUT SPR INDIA</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
