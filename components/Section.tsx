import { ReactNode } from "react";

export type SectionProps = {
  id?: string;
  title: string;
  /** Small label above the title (aka kicker/eyebrow) */
  eyebrow?: string;
  /** Primary lead paragraph; if omitted, we'll fall back to `subtitle` */
  lead?: ReactNode;
  /** Backwards-compat: alternate prop name used by some pages */
  subtitle?: string;
  muted?: boolean;
  className?: string;
  children?: ReactNode;
};

export default function Section({
  id,
  title,
  eyebrow,
  lead,
  subtitle,
  muted,
  className = "",
  children,
}: SectionProps) {
  const leadText = lead ?? subtitle; // allow using either prop name
  return (
    <section id={id} className={`section ${muted ? "section-muted" : ""} ${className}`}>
      <div className="container-max">
        {eyebrow && <div className="kicker mb-4">{eyebrow}</div>}
        <h2 className="h2 mb-3">{title}</h2>
        {leadText && <p className="lead mb-8 max-w-3xl">{leadText}</p>}
        {children}
      </div>
    </section>
  );
}
