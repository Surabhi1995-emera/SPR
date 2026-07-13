import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "../components/layout/PageHero";
import { ProjectCard } from "../components/projects/ProjectCard";
import { CTA } from "../components/sections/CTA";
import { projects, projectCategories, type ProjectCategory } from "../data/projects";

const filters: Array<ProjectCategory | "All"> = ["All", ...projectCategories];

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        heading="Every address,"
        script="an SPR India address"
        text="Residential towers, landmark retail, and an institution — all part of one integrated township vision."
      />

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                data-cursor="link"
                onClick={() => setActive(f)}
                className={`rounded-full border px-5 py-2 text-xs tracking-[0.15em] transition-colors duration-300 ${
                  active === f
                    ? "border-navy bg-navy text-cream"
                    : "border-navy/20 text-navy/70 hover:border-navy/50"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <ProjectCard project={project} seed={i + 1} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
