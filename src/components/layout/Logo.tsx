export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 44" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 1 L38 8 V21 C38 32 30 40 20 43 C10 40 2 32 2 21 V8 Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M20 10 L20 34" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M12 22 L28 22" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="20" cy="22" r="4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const color = tone === "light" ? "text-cream" : "text-navy";
  return (
    <span className={`inline-flex items-center gap-3 ${color}`}>
      <LogoMark className="h-9 w-9" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-[0.2em]">SPR INDIA</span>
        <span className="mt-1 text-[10px] tracking-[0.35em] opacity-70">EST. 1972</span>
      </span>
    </span>
  );
}
