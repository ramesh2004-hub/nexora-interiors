import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, services } from "@/lib/data";

export default function Home(){
 return <main>
  <section className="hero-noise relative min-h-[760px] overflow-hidden bg-[#201c18] text-white">
   <Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90" alt="Elegant contemporary living room interior" fill priority sizes="100vw" className="object-cover opacity-55"/>
   <div className="absolute inset-0 bg-gradient-to-r from-[#201c18]/95 via-[#201c18]/55 to-transparent"/>
   <div className="container-nx relative flex min-h-[760px] items-end pb-20 pt-32">
    <div className="max-w-4xl"><Reveal><p className="mb-7 text-xs font-bold uppercase tracking-[.3em] text-white/60">Interior Designers · Tirunelveli</p></Reveal>
     <Reveal delay={.1}><h1 className="display font-display text-[clamp(4rem,9vw,8.7rem)]">Spaces with<br/><i>meaning.</i></h1></Reveal>
     <Reveal delay={.2}><div className="mt-9 flex flex-col gap-7 sm:flex-row sm:items-end"><p className="max-w-md text-base leading-7 text-white/70">Nexora Interiors creates refined homes and workspaces where thoughtful design, everyday function and timeless character come together.</p><div className="flex gap-3"><Link href="/projects" className="rounded-full bg-white px-6 py-4 text-xs font-bold uppercase tracking-widest text-ink">Explore projects</Link><Link href="/consultation" className="rounded-full border border-white/40 px-6 py-4 text-xs font-bold uppercase tracking-widest">Start a project</Link></div></div></Reveal>
    </div>
   </div>
   <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-widest text-white/50 md:flex"><ArrowDownRight size={18}/> Scroll to explore</div>
  </section>

  <section className="grid-lines border-b border-black/10 py-24">
   <div className="container-nx grid gap-12 md:grid-cols-[.7fr_1.3fr]">
    <Reveal><p className="text-xs font-bold uppercase tracking-[.25em] text-olive">01 / Our approach</p></Reveal>
    <Reveal delay={.1}><div><h2 className="font-display text-5xl leading-none md:text-7xl">Good interiors feel <i>inevitable.</i></h2><p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">We begin with your routines, your architecture and the details you care about. Then we shape the space around them—without unnecessary decoration or trend chasing.</p><Link href="/about" className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-2 text-sm font-bold">Discover Nexora <ArrowUpRight size={15}/></Link></div></Reveal>
   </div>
  </section>

  <section className="container-nx py-24">
   <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><Reveal><div><p className="text-xs font-bold uppercase tracking-[.25em] text-olive">02 / Services</p><h2 className="mt-3 font-display text-5xl md:text-7xl">Designed around<br/><i>your life.</i></h2></div></Reveal><Link href="/services" className="text-sm font-bold">View all services →</Link></div>
   <div className="mt-14 grid gap-5 md:grid-cols-2">{services.map((s,i)=><Reveal key={s.slug} delay={i*.08}><Link href={"/services/"+s.slug} className="group relative block overflow-hidden bg-ink text-white"><div className="relative aspect-[16/10]"><Image src={s.image} alt={s.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-90"/><div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/></div><div className="absolute inset-x-0 bottom-0 p-7"><p className="text-xs font-bold uppercase tracking-[.2em] text-white/50">0{i+1}</p><h3 className="mt-2 font-display text-4xl">{s.title}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-white/70">{s.desc}</p></div></Link></Reveal>)}</div>
  </section>

  <section className="bg-sand py-24">
   <div className="container-nx"><div className="flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-olive">03 / Selected work</p><h2 className="mt-3 font-display text-5xl md:text-7xl">Made to be <i>lived in.</i></h2></div><Link href="/projects" className="hidden text-sm font-bold md:block">All projects →</Link></div>
   <div className="mt-14 grid gap-10 md:grid-cols-3">{projects.slice(0,3).map((p,i)=><Reveal key={p.slug} delay={i*.08}><ProjectCard project={p}/></Reveal>)}</div></div>
  </section>

  <section className="container-nx py-24">
   <div className="grid gap-14 md:grid-cols-[1fr_1.4fr]"><Reveal><p className="text-xs font-bold uppercase tracking-[.25em] text-olive">04 / The experience</p><h2 className="mt-3 font-display text-5xl md:text-7xl">From first idea<br/>to <i>final detail.</i></h2></Reveal>
   <div className="divide-y divide-black/10">{["Consultation & site visit","Concept & 3D design","Materials & budget","Execution & quality checks","Final styling & handover"].map((x,i)=><Reveal key={x} delay={i*.05}><div className="flex items-center justify-between py-6"><div className="flex items-center gap-6"><span className="font-display text-xl text-black/30">0{i+1}</span><span className="text-lg">{x}</span></div><Plus size={17} className="text-black/30"/></div></Reveal>)}</div></div>
  </section>

  <section className="bg-[#201c18] py-24 text-white">
   <div className="container-nx grid gap-10 md:grid-cols-[1fr_1.3fr] md:items-end"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-white/40">05 / Let's talk</p><h2 className="mt-4 font-display text-6xl md:text-8xl">Your space<br/><i>starts here.</i></h2></div><div><p className="max-w-xl text-lg leading-8 text-white/60">Planning a new home, renovation or workspace? Share a little about your project and our team will get back to you.</p><Link href="/consultation" className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-xs font-bold uppercase tracking-widest text-ink">Book a consultation <ArrowUpRight className="ml-2" size={15}/></Link></div></div>
  </section>
 </main>
}
