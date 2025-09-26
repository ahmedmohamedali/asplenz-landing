
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Page() {
  return (
    <main>
      <Navbar locale="en" />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(110,231,183,0.25),transparent_60%)] pointer-events-none" />
        <div className="container-max py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-emerald-300/80 text-xs uppercase tracking-widest">Enterprise Governance Stack</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
              From workflows to AI decisions:<br/> one suite, one layer of trust.
            </h1>
            <p className="mt-5 text-slate-300 max-w-xl">
              Asplenz helps enterprises reduce workflow chaos, enforce compliance, and meet regulations like the EU AI Act.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Button href="/en#contact">Join the Beta</Button>
              <Button href="/en#products" variant="ghost">Explore the products</Button>
            </div>
          </div>
        </div>
      </section>

      <Section id="problem" eyebrow="Problem" title="Silos, compliance chaos, and ungoverned AI decisions" subtitle="Work now lives in chat and across many systems; governance and audit don’t follow.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {h:"Workflow silos", p:"Tickets and tasks in Jira, ServiceNow, Workday with no unified visibility."},
            {h:"Compliance fracture", p:"Different SLAs, approvals, and audits per tool create risk and manual reporting."},
            {h:"AI risk exposure", p:"EU AI Act & GDPR require oversight and traceability for automated decisions."}
          ].map((b,i)=>(
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-medium">{b.h}</div>
              <p className="mt-2 text-slate-300">{b.p}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="products" eyebrow="Products" title="One suite, three layers">
        <div className="grid md:grid-cols-3 gap-6">
          <ProductCard 
            name="Discover" tagline="The Workflow OS for Slack & Teams"
            bullets={["Turn messages into governed tasks","App Home, modals & actions","Approvals, SLAs, audit"]}
          />
          <ProductCard 
            name="Unified Governance" tagline="The Enterprise Control Tower"
            bullets={["One dashboard across systems","Harmonized SLAs & approvals","Consolidated reporting & audit"]}
          />
          <ProductCard 
            name="ApprovalGate" tagline="The Decision Firewall"
            bullets={["Block, escalate, or monitor decisions","Policy-as-code & immutable audit","AI Act-ready guardrails"]}
          />
        </div>
      </Section>

      <Section id="why" eyebrow="Why now" title="Chat is the new workplace. Compliance pressure is rising.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Slack & Teams are where work happens — workflows must be native and governed.",
            "Regulations like GDPR, SOX, and the EU AI Act require oversight and auditability.",
            "AI-driven workflows need real-time guardrails to avoid costly failures."
          ].map((t,i)=>(
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">{t}</div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Early access" title="We’re onboarding design partners" subtitle="Finance, pharma, and energy first. Tell us about your context and we’ll reach out.">
        <ContactForm labels={{name:"Your name", email:"Your email", message:"Tell us about your context", send:"Send", ok:"Thanks! We’ll get back to you shortly."}} />
        <p className="mt-6 text-slate-400 text-sm">Or email us: <a className="underline hover:text-white" href="mailto:founders@asplenz.com">founders@asplenz.com</a></p>
      </Section>
      <Footer />
    </main>
  );
}
