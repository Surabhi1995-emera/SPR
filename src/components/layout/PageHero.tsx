import { motion } from "framer-motion";

export function PageHero({ eyebrow, heading, script, text }: { eyebrow: string; heading: string; script?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep pb-20 pt-40 text-cream sm:pt-48">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, var(--color-navy-deep), var(--color-burgundy-deep) 140%)" }}
      />
      <div className="grain-overlay" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 block text-xs tracking-[0.3em] text-gold"
        >
          {eyebrow.toUpperCase()}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl leading-tight sm:text-7xl"
        >
          {heading}
          {script && <span className="block font-script text-gold">{script}</span>}
        </motion.h1>
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-cream/70 sm:text-base"
          >
            {text}
          </motion.p>
        )}
      </div>
    </section>
  );
}
