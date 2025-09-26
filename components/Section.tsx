
export default function Section({ id, eyebrow, title, subtitle, children }:{ 
  id?: string, eyebrow?: string, title?: string, subtitle?: string, children?: React.ReactNode 
}){
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container-max">
        {eyebrow && <div className="text-xs uppercase tracking-widest text-emerald-300/80">{eyebrow}</div>}
        {title && <h2 className="mt-2 text-2xl md:text-4xl font-semibold">{title}</h2>}
        {subtitle && <p className="mt-3 text-slate-300 max-w-2xl">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
