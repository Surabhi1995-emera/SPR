import { stats } from "../../data/siteContent";
import { StatCounter } from "../ui/StatCounter";
import { Reveal } from "../ui/Reveal";

export function StatsBand() {
  return (
    <section className="relative bg-burgundy py-16 text-cream sm:py-20">
      <div className="grain-overlay" />
      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-6 sm:px-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center md:text-left">
            <div className="font-display text-5xl text-gold sm:text-6xl">
              <StatCounter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-xs tracking-[0.2em] text-cream/70">{s.label.toUpperCase()}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
