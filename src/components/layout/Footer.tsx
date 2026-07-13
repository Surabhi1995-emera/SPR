import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { contact, footerBlurb } from "../../data/siteContent";
import { projects } from "../../data/projects";

const commercial = projects.filter((p) => p.category === "Commercial");
const residential = projects.filter((p) => p.category === "Residential");
const institution = projects.filter((p) => p.category === "Institution");

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Events", to: "/events" },
  { label: "Contact Us", to: "/contact" },
];

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-lg italic text-gold">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-cream/75">{children}</ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-navy text-cream">
      <div className="grain-overlay" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">{footerBlurb}</p>
            <div className="mt-6 flex gap-3">
              {contact.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  data-cursor="link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-xs transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Commercial">
            {commercial.map((p) => (
              <li key={p.slug}>
                <Link to={`/projects/${p.slug}`} data-cursor="link" className="transition-colors hover:text-gold">
                  {p.name}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Residential">
            {residential.map((p) => (
              <li key={p.slug}>
                <Link to={`/projects/${p.slug}`} data-cursor="link" className="transition-colors hover:text-gold">
                  {p.name}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Quick Links">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} data-cursor="link" className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
            {institution.map((p) => (
              <li key={p.slug}>
                <Link to={`/projects/${p.slug}`} data-cursor="link" className="transition-colors hover:text-gold">
                  {p.name}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact Us">
            <li>{contact.addressLines.join(" ")}</li>
            {contact.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p}`} data-cursor="link" className="transition-colors hover:text-gold">
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${contact.email}`} data-cursor="link" className="transition-colors hover:text-gold">
                {contact.email}
              </a>
            </li>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} SPR India. All rights reserved.</span>
          <span>Building a legacy of trust &amp; excellence since 1972.</span>
        </div>
      </div>
    </footer>
  );
}
