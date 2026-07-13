import { useParams, Navigate, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { PlaceholderArt } from "../components/ui/PlaceholderArt";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { ProjectCard } from "../components/projects/ProjectCard";
import { CTA } from "../components/sections/CTA";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const related = projects.filter((p) => p.category === project.category && p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep pb-16 pt-36 text-cream sm:pt-44">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, var(--color-navy-deep), var(--color-burgundy-deep) 140%)" }}
        />
        <div className="grain-overlay" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-10">
          <Link to="/projects" data-cursor="link" className="text-xs tracking-[0.2em] text-gold/80 hover:text-gold">
            &larr; ALL PROJECTS
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-cream px-3 py-1 text-[10px] font-medium tracking-wider text-navy-deep">
              {project.status.toUpperCase()}
            </span>
            <span className="rounded-full border border-gold/50 px-3 py-1 text-[10px] font-medium tracking-wider text-gold">
              {project.category.toUpperCase()}
            </span>
          </div>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl">{project.name}</h1>
          <p className="mt-3 text-cream/70">{project.location}</p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <Reveal>
            <PlaceholderArt seed={project.slug.length + 3} tone="navy" label={project.name} className="aspect-[16/8] w-full rounded-2xl" />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <h2 className="font-display text-3xl text-navy">Overview</h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/75 sm:text-base">
                {project.description.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <h3 className="mt-10 font-display text-2xl text-navy">Features</h3>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-ink/80">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-navy text-[10px] text-gold">
                      &#10003;
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-navy/10 p-8">
                <dl className="space-y-5 text-sm">
                  <div>
                    <dt className="text-xs tracking-wider text-gold">CONFIGURATION</dt>
                    <dd className="mt-1 text-navy">{project.config}</dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-wider text-gold">RERA</dt>
                    <dd className="mt-1 text-navy">{project.rera}</dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-wider text-gold">LOCATION</dt>
                    <dd className="mt-1 text-navy">{project.location}</dd>
                  </div>
                </dl>
                <div className="mt-8">
                  <Button to="/contact" variant="filled" className="w-full justify-center">
                    ENQUIRE ABOUT THIS PROJECT
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream pb-24 sm:pb-28">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
            <h2 className="font-display text-3xl text-navy">More {project.category.toLowerCase()} projects</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <ProjectCard project={p} seed={i + 4} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
