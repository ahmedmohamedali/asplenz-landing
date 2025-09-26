
export default function ProductCard({ name, tagline, bullets }:{ name: string, tagline: string, bullets: string[] }){
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="text-emerald-300 text-sm">{name}</div>
      <div className="mt-1 text-lg font-medium">{tagline}</div>
      <ul className="mt-4 list-disc list-inside text-slate-300 space-y-1">
        {bullets.map((b,i)=> <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}
