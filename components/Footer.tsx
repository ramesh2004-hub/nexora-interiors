import Link from "next/link";
export function Footer(){return <footer className="bg-[#201c18] text-white">
 <div className="container-nx grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
  <div><div className="font-display text-3xl">Nexora Interiors</div><p className="mt-5 max-w-sm text-sm leading-7 text-white/60">Thoughtful interiors for homes and workspaces in Tirunelveli and surrounding areas.</p><a href="tel:+916385666794" className="mt-7 inline-block text-sm text-white">+91 63856 66794</a></div>
  <div><h3 className="text-xs font-bold uppercase tracking-[.2em] text-white/40">Explore</h3><div className="mt-5 space-y-3 text-sm">{["About","Services","Projects","Process"].map(x=><Link key={x} href={"/"+x.toLowerCase()} className="block text-white/70 hover:text-white">{x}</Link>)}</div></div>
  <div><h3 className="text-xs font-bold uppercase tracking-[.2em] text-white/40">Services</h3><div className="mt-5 space-y-3 text-sm text-white/70"><p>Residential Interiors</p><p>Commercial Interiors</p><p>Modular Kitchens</p><p>Renovation & Custom Furniture</p></div></div>
  <div><h3 className="text-xs font-bold uppercase tracking-[.2em] text-white/40">Start a project</h3><p className="mt-5 text-sm leading-7 text-white/70">Tell us about your space, timeline and vision.</p><Link href="/consultation" className="mt-5 inline-block border-b border-white pb-2 text-sm">Schedule a consultation →</Link></div>
 </div>
 <div className="container-nx flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/40 md:flex-row"><span>© 2026 Nexora Interiors. All rights reserved.</span><div className="flex gap-5"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link></div></div>
 </footer>}
