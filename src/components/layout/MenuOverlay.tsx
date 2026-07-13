import { AnimatePresence, motion, type Variants } from "framer-motion";
import { NavLink } from "react-router-dom";
import { nav, contact } from "../../data/siteContent";

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9997] flex flex-col bg-navy text-cream"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grain-overlay" />
          <div className="relative z-10 flex flex-1 flex-col justify-center px-6 sm:px-12 md:px-20">
            <motion.nav
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-1"
            >
              {nav.map((item, i) => (
                <motion.div key={item.to} variants={itemVariants} className="border-b border-cream/10">
                  <NavLink
                    to={item.to}
                    data-cursor="link"
                    onClick={onClose}
                    className="group flex items-baseline gap-6 py-4 sm:py-5"
                  >
                    <span className="font-sans text-xs tracking-[0.25em] text-gold/70">
                      0{i + 1}
                    </span>
                    <span className="font-display text-4xl italic transition-colors duration-300 group-hover:text-gold sm:text-6xl">
                      {item.label}
                    </span>
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          </div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col gap-4 border-t border-cream/10 px-6 py-8 text-sm text-cream/70 sm:flex-row sm:items-center sm:justify-between sm:px-12 md:px-20"
          >
            <span>{contact.addressLines.join(" ")}</span>
            <a href={`mailto:${contact.email}`} data-cursor="link" className="text-gold">
              {contact.email}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
