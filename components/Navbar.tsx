
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function Navbar({ locale }:{ locale: "fr" | "en" }){
  const alt = locale === "fr" ? {products:"Produits",why:"Pourquoi maintenant",contact:"Contact"} : {products:"Products",why:"Why Now",contact:"Contact"};
  const other = locale === "fr" ? "en" : "fr";
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0b0f1a]/70 backdrop-blur">
      <div className="container-max flex items-center justify-between py-3">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Image src="/asplenz-logo.svg" alt="Asplenz" width={160} height={40} priority />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <Link href={`/${locale}#products`} className="hover:text-white">{alt.products}</Link>
          <Link href={`/${locale}#why`} className="hover:text-white">{alt.why}</Link>
          <Link href={`/${locale}#contact`} className="hover:text-white">{alt.contact}</Link>
          <Button href={`/${locale}#contact`}>{alt.contact}</Button>
          <Link href={`/${other}`} className="ml-2 text-slate-400 hover:text-white uppercase">{other}</Link>
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <Link href={`/${other}`} className="text-slate-400 hover:text-white uppercase">{other}</Link>
          <Button href={`/${locale}#contact`} variant="ghost">{alt.contact}</Button>
        </div>
      </div>
    </header>
  );
}
