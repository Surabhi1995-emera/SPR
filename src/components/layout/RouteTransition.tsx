import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Curtain wipe between routes: a burgundy-to-navy panel covers the viewport
 * instantly on navigation, then lifts away, while the new page content
 * fades/settles in beneath it.
 */
export function RouteTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <>
      <motion.div
        key={`curtain-${pathname}`}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[10000] origin-top"
        style={{
          background:
            "linear-gradient(180deg, var(--color-burgundy) 0%, var(--color-navy) 100%)",
        }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        key={`content-${pathname}`}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
