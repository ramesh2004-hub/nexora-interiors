 "use client";
import { motion } from "framer-motion";
export function Reveal({children,delay=0,className=""}:{children:React.ReactNode;delay?:number;className?:string}){return <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.65,delay}} className={className}>{children}</motion.div>}
