// components/Section.tsx
import * as React from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  /** aligne avec ton usage dans la page */
  lead?: string;
  /** aligne avec ton usage dans la page */
  muted?: boolean;
  children?: React.ReactNode;
  /** compacte l'espacement vertical */
  dense?: boolean;
  /** override classes sur <section> */
  className?: string;
  /** override l’espace avant children */
  contentClassName?: string;
};

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Section({
  id,
  eyebrow,
  title,
  lead,
  muted = false,
  children,
  dense = false,
  className,
  contentClassName,
}: SectionProps) {
  const blockY = dense ? "py-6 md:py-8" : "py-8 md:py-8"; // plus serré que py-16/md:py-24
  const gapTop = dense ? "mt-4" : "mt-6";

  return (
    <section
      id={id}
      className={cn(
        blockY,
        muted ? "bg-slate-900/40" : "",
        // évite l’effet “double padding” entre deux sections consécutives
        "[&+:section]:pt-0",
        className
      )}
    >
      <div className="container-max">
        {eyebrow && (
          <div className="text-xs uppercase tracking-widest text-emerald-300/80">
            {eyebrow}
          </div>
        )}
        {title && (
          <h2 className="mt-2 text-2xl md:text-4xl font-semibold">{title}</h2>
        )}
        {lead && <p className="mt-3 text-slate-300 max-w-2xl">{lead}</p>}
        <div className={cn(gapTop, contentClassName, "[&>*:last-child]:mb-0")}>
          {children}
        </div>
      </div>
    </section>
  );
}
