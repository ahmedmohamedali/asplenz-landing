
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function Navbar({ locale = "en" }: { locale: "en" | "fr" }) {
  const isFr = locale === "fr";
  return (
    <header className="border-b border-slate-800/60 sticky top-0 z-30 backdrop-blur bg-[#0B1020]/70">
      <div className="container-max flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-brand-600" />
          <span className="font-semibold">Asplenz</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#problem" className="hover:text-white">{isFr ? "Problème" : "Problem"}</a>
          <a href="#solution" className="hover:text-white">{isFr ? "Solution" : "Solution"}</a>
          <a href="#why" className="hover:text-white">{isFr ? "Différenciation" : "Why Asplenz"}</a>
          <a href="#contact" className="btn btn-primary">{isFr ? "Accès anticipé" : "Early Access"}</a>
          <a href={isFr ? "/" : "/fr"} className="btn btn-ghost">{isFr ? "EN" : "FR"}</a>
        </nav>
      </div>
    </header>
  );
}
