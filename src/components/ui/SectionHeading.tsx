interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  script?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, heading, script, tone = "dark", align = "left" }: SectionHeadingProps) {
  const textColor = tone === "light" ? "text-cream" : "text-navy";
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass}`}>
      {eyebrow && (
        <span className="mb-3 text-xs font-medium tracking-[0.3em] text-gold uppercase">{eyebrow}</span>
      )}
      <h2 className={`font-display text-4xl ${textColor} sm:text-5xl`}>
        {heading}
        {script && <span className="block font-script text-gold sm:mt-1">{script}</span>}
      </h2>
    </div>
  );
}
