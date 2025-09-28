import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function ConsultingPage() {
  return (
    <>
      <Navbar lang="en" />

      {/* Hero */}
      <section className="section bg-hero">
        <div className="container-max grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="h1 mb-4">
              Asplenz Consulting — Optimize workflows, SaaS, and compliance before it’s too late.
            </h1>
            <p className="lead mb-6 max-w-2xl">
              Shadow work, SaaS sprawl, and compliance gaps cost enterprises millions.
              We help you detect, measure, and fix them — today.
            </p>
            <div className="flex gap-3">
              <a href="#contact" className="btn btn-primary">Request a Consultation</a>
              <a href="mailto:founders@asplenz.com" className="btn btn-ghost">Contact us</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-full h-64 rounded-2xl border border-slate-800/60 bg-slate-900/50" />
          </div>
        </div>
      </section>

      {/* Challenges */}
      <Section
        id="challenges"
        muted
        title="When productivity debt meets compliance risk"
        lead="Most enterprises carry hidden inefficiencies that grow with scale."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="h3 mb-2">Shadow Work</h3>
            <p className="text-slate-300 text-sm">
              Tasks in Slack/Teams/email that escape official tracking and SLAs.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="h3 mb-2">SaaS Sprawl</h3>
            <p className="text-slate-300 text-sm">
              Overlapping apps, little governance, rising risk and cost.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="h3 mb-2">License Waste</h3>
            <p className="text-slate-300 text-sm">
              Underused Jira/ServiceNow/Salesforce/Slack seats — budgets leaking silently.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="h3 mb-2">Workflow Silos & Compliance Gaps</h3>
            <p className="text-slate-300 text-sm">
              Fractured processes, inconsistent approvals/audit, weak escalations.
            </p>
          </div>
        </div>
      </Section>

      {/* Approach */}
      <Section id="approach" title="A structured 3-step engagement">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="h3 mb-2">1) Exploratory Interview</h3>
            <p className="text-slate-300 text-sm">
              Stakeholder interviews to align on pain points and goals.
            </p>
            <p className="text-slate-400 text-xs mt-2">Deliverable: issue summary & first hypotheses.</p>
          </div>
          <div className="card p-6">
            <h3 className="h3 mb-2">2) Organizational & SaaS Audit</h3>
            <ul className="text-slate-300 text-sm list-disc pl-5 space-y-1">
              <li>Map shadow workflows and informal dependencies</li>
              <li>Review SaaS usage (sprawl, redundancy, underutilized licenses)</li>
              <li>Assess governance maturity & compliance coverage</li>
            </ul>
            <p className="text-slate-400 text-xs mt-2">Deliverable: structured report with prioritized recommendations.</p>
          </div>
          <div className="card p-6">
            <h3 className="h3 mb-2">3) Guided Implementation</h3>
            <ul className="text-slate-300 text-sm list-disc pl-5 space-y-1">
              <li>Workflow rationalization & role clarity</li>
              <li>SaaS license optimization (ROI immediately measurable)</li>
              <li>Effective rituals & governance frameworks</li>
              <li>Compliance readiness (GDPR, SOX, EU AI Act)</li>
            </ul>
            <p className="text-slate-400 text-xs mt-2">Deliverable: action plan + coaching or workshops.</p>
          </div>
        </div>
      </Section>

      {/* Why Asplenz */}
      <Section
        id="why"
        muted
        title="Why Asplenz Consulting?"
        lead="We know the pain, because we’ve lived it."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="h3 mb-2">Deep Enterprise Experience</h3>
            <p className="text-slate-300 text-sm">
              20+ years in software, 15+ in technology leadership across finance, energy, fintech.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="h3 mb-2">Product-led Perspective</h3>
            <p className="text-slate-300 text-sm">
              Founder of Asplenz (Discover, Unified Governance, ApprovalGate) — future-proof advice aligned with real product direction.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="h3 mb-2">Neutral & ROI-focused</h3>
            <p className="text-slate-300 text-sm">
              Tool-agnostic audits; measurable savings & risk reduction drive every engagement.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="h3 mb-2">Built for Regulated Environments</h3>
            <p className="text-slate-300 text-sm">
              GDPR, SOX, and EU AI Act awareness baked into our methods and recommendations.
            </p>
          </div>
        </div>
      </Section>

      {/* Results */}
      <Section title="Tangible results" lead="Measurable ROI from day one.">
        <ul className="text-slate-300 text-sm list-disc pl-5 space-y-1">
          <li>Up to <strong>30% SaaS licenses</strong> reallocated or removed</li>
          <li>Reduction of <strong>20–40%</strong> in shadow workflows</li>
          <li><strong>Fewer compliance risks</strong> with unified audit and SLA coverage</li>
          <li><strong>Immediate savings</strong> — often 5–10× the consulting fee</li>
        </ul>
      </Section>

      {/* CTA */}
      <Section
        id="contact"
        muted
        title="Let’s reduce chaos and hidden costs together"
        lead="Short diagnostic engagements (2–6 weeks). Flat-fee pricing depending on scope. Option for quarterly governance health checks."
      >
        <div className="card p-6 max-w-2xl">
          <div className="flex gap-3">
            <a href="mailto:founders@asplenz.com" className="btn btn-primary">Request a Consultation</a>
            <a href="mailto:founders@asplenz.com" className="btn btn-ghost">Contact us</a>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
