import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../../lib/gsap";

/**
 * A hand-authored blueprint skyline that "draws itself" in on load — towers
 * plus a clock-tower silhouette, a nod to SPR City's India Trade Centre.
 */
export function HeroSkyline({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = svg.querySelectorAll<SVGPathElement>("path[data-draw]");

    if (prefersReducedMotion()) {
      paths.forEach((p) => p.style.setProperty("stroke-dashoffset", "0"));
      return;
    }

    const lengths: number[] = [];
    paths.forEach((p, i) => {
      const len = p.getTotalLength();
      lengths[i] = len;
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
    });

    const tl = gsap.timeline({ delay: 0.3 });
    paths.forEach((p, i) => {
      tl.to(
        p,
        { strokeDashoffset: 0, duration: 1.1, ease: "power2.out" },
        i * 0.09
      );
      void lengths[i];
    });
    tl.fromTo(
      svg.querySelectorAll(".hero-fill"),
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power1.out" },
      "-=0.6"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 900 360"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path data-draw="" d="M0 340 L900 340" stroke="var(--color-gold)" strokeWidth="1" opacity="0.5" />

      {/* Tower blocks */}
      <path data-draw="" d="M60 340 V240 H130 V340" stroke="var(--color-gold)" strokeWidth="1.2" />
      <path data-draw="" d="M150 340 V180 H210 V340" stroke="var(--color-gold)" strokeWidth="1.2" />
      <path data-draw="" d="M230 340 V210 H270 V340" stroke="var(--color-gold)" strokeWidth="1.2" />

      {/* Clock tower — India Trade Centre nod */}
      <path data-draw="" d="M400 340 V140 H470 V340" stroke="var(--color-gold)" strokeWidth="1.4" />
      <path data-draw="" d="M410 140 H460 L435 100 Z" stroke="var(--color-gold)" strokeWidth="1.4" />
      <path data-draw="" d="M435 100 V70" stroke="var(--color-gold)" strokeWidth="1.2" />
      <circle className="hero-fill" cx="435" cy="170" r="16" stroke="var(--color-gold)" strokeWidth="1.2" />
      <path className="hero-fill" data-draw="" d="M435 170 V160 M435 170 L442 174" stroke="var(--color-gold)" strokeWidth="1.4" strokeLinecap="round" />

      <path data-draw="" d="M500 340 V230 H540 V340" stroke="var(--color-gold)" strokeWidth="1.2" />
      <path data-draw="" d="M560 340 V160 H630 V340" stroke="var(--color-gold)" strokeWidth="1.2" />
      <path data-draw="" d="M650 340 V260 H700 V340" stroke="var(--color-gold)" strokeWidth="1.2" />
      <path data-draw="" d="M730 340 V200 H790 V340" stroke="var(--color-gold)" strokeWidth="1.2" />
      <path data-draw="" d="M810 340 V270 H860 V340" stroke="var(--color-gold)" strokeWidth="1.2" />

      {/* Palm accents, echoing the Mall of Madras frontage */}
      <path data-draw="" d="M310 340 V300 M310 300 C300 290 295 280 296 272 M310 300 C320 292 326 283 325 274 M310 300 C303 288 303 278 308 268" stroke="var(--color-gold)" strokeWidth="1" opacity="0.7" />
      <path data-draw="" d="M350 340 V310 M350 310 C341 301 337 293 338 286 M350 310 C359 303 364 295 363 287" stroke="var(--color-gold)" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}
