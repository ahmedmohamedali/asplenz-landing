
import { NextResponse } from "next/server";
import { Resend } from "resend";
export async function POST(req: Request){
  try{
    const { name, email, message } = await req.json();
    if(!name || !email || !message) return new NextResponse("Missing fields", { status: 400 });
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM || "Asplenz <onboarding@resend.dev>";
    if(apiKey){
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from,
        to: [process.env.CONTACT_TO_EMAIL || "founders@asplenz.com"],
        subject: `New message from ${name}`,
        reply_to: email,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`
      });
    } else {
      console.log("[Contact] (no RESEND_API_KEY)", { name, email, message });
    }
    return NextResponse.json({ ok: true });
  }catch(err:any){
    console.error(err);
    return new NextResponse("Server error", { status: 500 });
  }
}
