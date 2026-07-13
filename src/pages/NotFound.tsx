import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-navy-deep text-cream">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, var(--color-navy-deep), var(--color-burgundy-deep) 140%)" }}
      />
      <div className="grain-overlay" />
      <div className="relative z-10 px-6 text-center">
        <span className="font-display text-8xl text-gold sm:text-9xl">404</span>
        <h1 className="mt-4 font-display text-3xl sm:text-4xl">This address isn't on our map.</h1>
        <p className="mx-auto mt-4 max-w-sm text-sm text-cream/70">
          The page you're looking for may have moved. Let's get you back to solid ground.
        </p>
        <div className="mt-9 flex justify-center gap-4">
          <Button to="/" variant="filled">
            BACK HOME
          </Button>
          <Button to="/projects" variant="outline">
            VIEW PROJECTS
          </Button>
        </div>
      </div>
    </section>
  );
}
