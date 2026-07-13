import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PlaceholderArt } from "../ui/PlaceholderArt";
import type { Project } from "../../data/projects";

export function ProjectCard({ project, seed }: { project: Project; seed: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };
  const reset = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <Link
      to={`/projects/${project.slug}`}
      data-cursor="link"
      className="group block"
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        className="relative overflow-hidden rounded-2xl"
      >
        <PlaceholderArt seed={seed} tone={seed % 2 ? "burgundy" : "navy"} label={project.name} className="aspect-[4/5] w-full" />

        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-cream px-3 py-1 text-[10px] font-medium tracking-wider text-navy-deep">
            {project.status.toUpperCase()}
          </span>
          <span className="rounded-full bg-navy-deep px-3 py-1 text-[10px] font-medium tracking-wider text-cream">
            {project.category.toUpperCase()}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-5 pt-14">
          <h3 className="font-display text-2xl text-cream">{project.name}</h3>
          <p className="mt-1 text-sm text-cream/70">{project.location}</p>
          <p className="mt-3 flex items-center gap-2 text-xs tracking-wider text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            VIEW DETAILS <span aria-hidden="true">&rarr;</span>
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
