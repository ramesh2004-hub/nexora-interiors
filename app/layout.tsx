import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsApp } from "@/components/WhatsApp";

const manrope = Manrope({ subsets:["latin"], variable:"--font-manrope" });
const cormorant = Cormorant_Garamond({ subsets:["latin"], variable:"--font-cormorant", weight:["400","500","600","700"] });

export const metadata: Metadata = {
  title: "Nexora Interiors | Interior Designers in Tirunelveli",
  description: "Nexora Interiors creates refined residential and commercial interiors in Tirunelveli, blending timeless design, function and thoughtful execution.",
  keywords: ["interior designers in Tirunelveli","interior design company Tirunelveli","home interiors Tirunelveli","modular kitchen Tirunelveli"],
  openGraph: { title:"Nexora Interiors", description:"Thoughtful interiors. Beautifully executed.", type:"website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${manrope.variable} ${cormorant.variable} font-sans`}>
    <Navbar />{children}<Footer /><WhatsApp />
  </body></html>;
}
