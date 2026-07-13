import { Link } from "react-router-dom";
import { Magnetic } from "./Magnetic";

interface ButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "filled" | "outline";
  className?: string;
  type?: "button" | "submit";
}

export function Button({ to, href, onClick, children, variant = "outline", className = "", type = "button" }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs tracking-[0.2em] transition-colors duration-300";
  const styles =
    variant === "filled"
      ? "bg-gold text-navy-deep hover:bg-gold-light"
      : "border border-gold/60 text-gold hover:bg-gold hover:text-navy-deep";

  const content = <span className={`${base} ${styles} ${className}`}>{children}</span>;

  if (to) {
    return (
      <Magnetic as={Link} to={to}>
        {content}
      </Magnetic>
    );
  }
  if (href) {
    return (
      <Magnetic as="a" href={href}>
        {content}
      </Magnetic>
    );
  }
  return (
    <Magnetic as="button" onClick={onClick} type={type}>
      {content}
    </Magnetic>
  );
}
