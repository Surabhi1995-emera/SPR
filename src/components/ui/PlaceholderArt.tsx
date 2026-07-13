interface PlaceholderArtProps {
  seed?: number;
  className?: string;
  label?: string;
  tone?: "burgundy" | "navy";
}

/** Deterministic pseudo-random in [0,1) from an integer seed. */
function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function buildSkyline(seed: number, count: number) {
  const bars = [];
  let x = 0;
  for (let i = 0; i < count; i++) {
    const w = 6 + rand(seed + i) * 10;
    const h = 20 + rand(seed + i * 3.1) * 70;
    bars.push({ x, w, h });
    x += w + 2.5;
  }
  return { bars, totalWidth: x };
}

/**
 * Art-directed stand-in for real photography: a blueprint-style skyline
 * silhouette in the brand palette, sized as a real image slot. Swap the
 * containing element's background/child for a photo later — layout is
 * unaffected since this fills its parent (`data-image-slot`).
 */
export function PlaceholderArt({ seed = 1, className = "", label, tone = "navy" }: PlaceholderArtProps) {
  const { bars, totalWidth } = buildSkyline(seed, 9);
  const bg =
    tone === "burgundy"
      ? "linear-gradient(150deg, var(--color-burgundy-deep), var(--color-burgundy) 55%, var(--color-navy-deep))"
      : "linear-gradient(150deg, var(--color-navy-deep), var(--color-navy) 55%, var(--color-burgundy-deep))";

  return (
    <div
      data-image-slot={label ?? "placeholder"}
      className={`relative overflow-hidden ${className}`}
      style={{ background: bg }}
    >
      <svg
        className="absolute inset-x-0 bottom-0 h-2/3 w-full opacity-90"
        viewBox={`0 0 ${totalWidth} 100`}
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        {bars.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={100 - b.h}
            width={b.w}
            height={b.h}
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth={0.5}
            opacity={0.55 + rand(seed + i) * 0.35}
          />
        ))}
        <line x1="0" y1="100" x2={totalWidth} y2="100" stroke="var(--color-gold)" strokeWidth={0.6} opacity={0.6} />
      </svg>
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" aria-hidden="true">
        <pattern id={`grid-${seed}`} width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="var(--color-cream)" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#grid-${seed})`} />
      </svg>
      {label && (
        <span className="absolute bottom-3 right-4 font-display text-xs italic tracking-wide text-cream/40">
          {label}
        </span>
      )}
    </div>
  );
}
