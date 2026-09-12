import Link from "next/link";
import Image from "next/image";
export function ProjectCard({project}:{project:{slug:string,title:string,category:string,location:string,image:string}}){return <Link href={"/projects/"+project.slug} className="group block">
 <div className="relative aspect-[4/5] overflow-hidden bg-sand"><Image src={project.image} alt={`${project.title} interior by Nexora Interiors`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105"/></div>
 <div className="flex items-start justify-between pt-4"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-olive">{project.category}</p><h3 className="mt-1 font-display text-2xl">{project.title}</h3></div><span className="text-sm text-black/40">{project.location}</span></div>
 </Link>}
