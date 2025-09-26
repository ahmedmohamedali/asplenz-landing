
'use client'
import { useState } from "react";
export default function ContactForm({labels}:{labels:{name:string,email:string,message:string,send:string,ok:string}}){
  const [ok,setOk]=useState(false); const [loading,setLoading]=useState(false); const [err,setErr]=useState<string|null>(null);
  async function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault(); setLoading(true); setErr(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try{
      const res = await fetch("/api/contact",{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
      if(!res.ok) throw new Error(await res.text());
      setOk(true); (e.currentTarget as HTMLFormElement).reset();
    }catch(e:any){ setErr(e.message || "Error"); } finally { setLoading(false); }
  }
  if(ok) return <p className="text-emerald-300">{labels.ok}</p>;
  return (<form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
    <input name="name" required placeholder={labels.name} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3" />
    <input name="email" required type="email" placeholder={labels.email} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3" />
    <textarea name="message" required rows={5} placeholder={labels.message} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3" />
    <button disabled={loading} className="rounded-xl bg-white text-black px-5 py-3 font-medium hover:opacity-90 disabled:opacity-60">{loading?`${labels.send}...`:labels.send}</button>
    {err && <p className="text-rose-300">{err}</p>}
  </form>);
}
