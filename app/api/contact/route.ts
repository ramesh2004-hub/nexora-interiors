import {NextResponse} from "next/server";
export async function POST(req:Request){const form=await req.formData(); const data=Object.fromEntries(form.entries()); console.log("Nexora enquiry:",data); return NextResponse.redirect(new URL("/contact?sent=1",req.url));}
