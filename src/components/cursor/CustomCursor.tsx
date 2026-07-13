import { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
  t: number;
}

const TRAIL_LIFETIME = 420; // ms

/**
 * "Masterplan" cursor: a gold compass ring with a slow rotating tick, magnetized
 * toward [data-cursor] targets, trailed by a thin ink line drawn on canvas —
 * a draftsman's pen, not a fluid blob. Disabled on touch and reduced-motion.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const points = useRef<Point[]>([]);
  const hovering = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!coarse && !reduced) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("cursor-active");

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: PointerEvent) => {
      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
      const target = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      hovering.current = Boolean(target);
    };
    window.addEventListener("pointermove", onMove);

    const onLeave = () => {
      pointer.current.x = -100;
      pointer.current.y = -100;
    };
    document.addEventListener("mouseleave", onLeave);

    const loop = (now: number) => {
      // Ring follows with a light lag for a "settling" feel.
      ring.current.x += (pointer.current.x - ring.current.x) * 0.22;
      ring.current.y += (pointer.current.y - ring.current.y) * 0.22;

      if (ringRef.current) {
        const scale = hovering.current ? 1.8 : 1;
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%) scale(${scale})`;
        ringRef.current.dataset.hover = hovering.current ? "true" : "false";
      }

      const last = points.current[points.current.length - 1];
      const dx = last ? pointer.current.x - last.x : 999;
      const dy = last ? pointer.current.y - last.y : 999;
      if (!last || dx * dx + dy * dy > 16) {
        points.current.push({ x: pointer.current.x, y: pointer.current.y, t: now });
      }
      points.current = points.current.filter((p) => now - p.t < TRAIL_LIFETIME);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (points.current.length > 1) {
        for (let i = 1; i < points.current.length; i++) {
          const p0 = points.current[i - 1];
          const p1 = points.current[i];
          const age = now - p1.t;
          const alpha = Math.max(0, 1 - age / TRAIL_LIFETIME) * 0.55;
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.strokeStyle = `rgba(201, 162, 39, ${alpha})`;
          ctx.lineWidth = Math.max(0.6, 1.6 * (1 - age / TRAIL_LIFETIME));
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }

      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("cursor-active");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[9998]" aria-hidden="true" />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border transition-[border-color,background-color] duration-200 ease-out data-[hover=true]:bg-gold/15"
        style={{ borderColor: "var(--color-gold)" }}
        aria-hidden="true"
      >
        <span
          className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-full origin-bottom animate-[spin_4s_linear_infinite]"
          style={{ backgroundColor: "var(--color-gold)" }}
        />
        <span
          className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ backgroundColor: "var(--color-gold)" }}
        />
      </div>
    </>
  );
}
