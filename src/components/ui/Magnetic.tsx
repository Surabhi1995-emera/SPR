import { useRef, type ReactNode, type ElementType } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  strength?: number;
  [key: string]: unknown;
}

/**
 * Wraps interactive elements so they pull gently toward the cursor when
 * nearby, and mark themselves with data-cursor so CustomCursor reacts too.
 */
export function Magnetic({ children, as = "div", className, strength = 0.35, ...rest }: MagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 250, damping: 20, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = motion(as as "div");

  return (
    <MotionTag
      ref={ref as React.Ref<HTMLDivElement>}
      data-cursor="link"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
