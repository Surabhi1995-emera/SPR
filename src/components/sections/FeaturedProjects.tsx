import { projects } from "../../data/projects";
import { ProjectCard } from "../projects/ProjectCard";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

const featuredSlugs = ["tower-c-d", "the-mall-of-madras", "osian-heights"];
const featured = featuredSlugs.map((s) => projects.find((p) => p.slug === s)!).filter(Boolean);

export function FeaturedProjects() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading eyebrow="Landmark developments" heading="A portfolio built" script="to last generations" />
          </Reveal>
          <Reveal delay={0.1}>
            <Button to="/projects">VIEW ALL PROJECTS</Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} seed={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
