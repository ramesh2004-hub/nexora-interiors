 "use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [["About","/about"],["Services","/services"],["Projects","/projects"],["Process","/process"],["Journal","/blog"],["Contact","/contact"]];
export function Navbar(){
 const [open,setOpen]=useState(false);
 return <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-[#201c18]/90 text-white backdrop-blur-md">
  <div className="container-nx flex h-[76px] items-center justify-between">
   <Link href="/" className="flex items-center gap-3" onClick={()=>setOpen(false)}>
    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/40 text-xs tracking-[.2em]">N</span>
    <span className="font-display text-2xl tracking-wide">Nexora <i>Interiors</i></span>
   </Link>
   <nav className="hidden items-center gap-7 md:flex">{links.map(([label,href])=><Link key={href} href={href} className="text-sm text-white/75 transition hover:text-white">{label}</Link>)}</nav>
   <Link href="/consultation" className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-ink md:flex">Book a Consultation <ArrowUpRight size={14}/></Link>
   <button className="md:hidden" aria-label="Open menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div>
  {open && <div className="border-t border-white/10 bg-[#201c18] px-5 pb-7 pt-4 md:hidden">
    {links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)} className="block border-b border-white/10 py-4 text-lg">{label}</Link>)}
    <Link href="/consultation" onClick={()=>setOpen(false)} className="mt-5 block rounded-full bg-white px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-ink">Book a Consultation</Link>
  </div>}
 </header>
}
