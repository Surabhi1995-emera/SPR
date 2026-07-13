import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../../lib/gsap";
import { legacyTimeline } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";

export function LegacyTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    if (prefersReducedMotion() || window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const distance = track.scrollWidth - section.clientWidth;
      if (distance <= 0) return;

      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance + section.clientHeight}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-navy py-24 text-cream sm:py-28">
      <div className="grain-overlay" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-10">
        <SectionHeading eyebrow="Since 1972" heading="Five decades," script="told in four chapters" tone="light" />
      </div>

      <div className="relative z-10 mt-14 overflow-x-auto pb-4 [scrollbar-width:none] md:overflow-visible">
        <div ref={trackRef} className="flex w-max gap-6 px-6 sm:px-10 md:gap-10">
          {legacyTimeline.map((item, i) => (
            <div
              key={item.year}
              className="flex w-[78vw] max-w-sm flex-shrink-0 flex-col justify-between rounded-2xl border border-cream/10 bg-cream/[0.03] p-8 sm:w-[420px]"
            >
              <div>
                <span className="font-display text-sm text-gold/70">0{i + 1}</span>
                <h3 className="mt-4 font-display text-4xl text-gold">{item.year}</h3>
                <h4 className="mt-3 text-lg text-cream">{item.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
