import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { HeroSkyline } from "./HeroSkyline";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-navy-deep text-cream">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, var(--color-navy-deep), var(--color-burgundy-deep) 130%)" }}
      />
      <HeroSkyline className="absolute inset-x-0 bottom-0 h-[55%] w-full opacity-90" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(16,27,61,0) 0%, var(--color-navy-deep) 92%)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-24 pt-40 sm:px-10 sm:pb-32">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5 block text-xs tracking-[0.35em] text-gold"
        >
          SPR INDIA &mdash; EST. 1972
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl leading-[1.05] text-balance sm:text-7xl lg:text-8xl"
        >
          Building a legacy of
          <span className="block font-script text-gold">trust &amp; excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
        >
          Chennai's largest integrated township — SPR City blends luxury residences, landmark retail,
          and a self-sustaining ecosystem, fifty years in the making.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button to="/projects" variant="filled">
            EXPLORE PROJECTS
          </Button>
          <Button to="/contact" variant="outline">
            ENQUIRE NOW
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-3 text-[10px] tracking-[0.3em] text-cream/50 sm:right-10 sm:flex"
      >
        <span className="[writing-mode:vertical-rl]">SCROLL</span>
        <span className="h-14 w-px animate-[pulse_2s_ease-in-out_infinite] bg-gold" />
      </motion.div>
    </section>
  );
}
