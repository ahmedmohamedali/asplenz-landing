
import Link from "next/link";
import clsx from "clsx";
export default function Button({ href, children, variant="primary"}:{href:string,children:any,variant?:"primary"|"ghost"}){
  const base = clsx("inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition",
    variant==="primary"&&"bg-white text-black hover:opacity-90",
    variant==="ghost"&&"bg-transparent border border-white/20 text-white hover:bg-white/10");
  return <Link href={href} className={base}>{children}</Link>
}
