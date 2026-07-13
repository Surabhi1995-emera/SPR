import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { MenuOverlay } from "./MenuOverlay";
import { Magnetic } from "../ui/Magnetic";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[9996] transition-colors duration-500 ${
          scrolled || menuOpen ? "bg-navy/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 sm:px-10">
          <Link to="/" data-cursor="link" onClick={() => setMenuOpen(false)}>
            <Logo tone="light" />
          </Link>

          <div className="flex items-center gap-4">
            <Magnetic
              as="a"
              href="/contact"
              className="hidden rounded-full border border-gold/60 px-6 py-2.5 text-xs tracking-[0.2em] text-gold transition-colors duration-300 hover:bg-gold hover:text-navy-deep sm:inline-block"
            >
              ENQUIRE NOW
            </Magnetic>

            <Magnetic
              as="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className="relative flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-cream/30"
            >
              <span
                className={`block h-px w-4 bg-cream transition-transform duration-300 ${
                  menuOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-4 bg-cream transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </Magnetic>
          </div>
        </div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
