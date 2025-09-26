
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Page() {
  return (
    <main>
      <Navbar locale="fr" />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(110,231,183,0.25),transparent_60%)] pointer-events-none" />
        <div className="container-max py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-emerald-300/80 text-xs uppercase tracking-widest">Suite de Gouvernance d’Entreprise</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
              Des workflows aux décisions IA :<br/> une suite, une couche de confiance.
            </h1>
            <p className="mt-5 text-slate-300 max-w-xl">
              Asplenz aide les entreprises à réduire le chaos opérationnel, appliquer la conformité et répondre aux exigences comme l’AI Act.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Button href="/fr#contact">Rejoindre la bêta</Button>
              <Button href="/fr#products" variant="ghost">Découvrir les produits</Button>
            </div>
          </div>
        </div>
      </section>

      <Section id="problem" eyebrow="Problème" title="Silos, conformité éclatée et décisions IA non gouvernées" subtitle="Le travail vit désormais dans la messagerie et à travers de multiples systèmes — la gouvernance et l’audit ne suivent pas.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {h:"Silos de workflows", p:"Tickets et tâches dans Jira, ServiceNow, Workday… sans visibilité unifiée."},
            {h:"Conformité fracturée", p:"SLA, approbations et audits différents par outil → risques + reporting manuel."},
            {h:"Risques IA", p:"L’AI Act & le RGPD exigent supervision et traçabilité des décisions automatisées."}
          ].map((b,i)=>(
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-medium">{b.h}</div>
              <p className="mt-2 text-slate-300">{b.p}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="products" eyebrow="Produits" title="Une suite, trois couches">
        <div className="grid md:grid-cols-3 gap-6">
          <ProductCard 
            name="Discover" tagline="Le Workflow OS pour Slack & Teams"
            bullets={["Transformer les messages en tâches gouvernées","App Home, modals & actions","Approbations, SLA, audit"]}
          />
          <ProductCard 
            name="Unified Governance" tagline="La Tour de Contrôle Entreprise"
            bullets={["Un dashboard sur tous les systèmes","SLA & approbations harmonisés","Reporting consolidé & audit"]}
          />
          <ProductCard 
            name="ApprovalGate" tagline="Le Pare-feu des Décisions"
            bullets={["Bloquer, escalader ou observer","Policy-as-code & audit immuable","Garde-fous prêts pour l’AI Act"]}
          />
        </div>
      </Section>

      <Section id="why" eyebrow="Pourquoi maintenant" title="La messagerie est le lieu de travail. La pression conformité augmente.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Slack & Teams sont là où le travail se fait — les workflows doivent être natifs et gouvernés.",
            "Le RGPD, SOX et l’AI Act exigent supervision et auditabilité.",
            "Les workflows pilotés par l’IA ont besoin de garde-fous temps réel pour éviter les incidents coûteux."
          ].map((t,i)=>(
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">{t}</div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Accès anticipé" title="Nous embarquons des design partners" subtitle="Finance, pharma et énergie d’abord. Parlez-nous de votre contexte, nous revenons vers vous.">
        <ContactForm labels={{name:"Votre nom", email:"Votre email", message:"Présentez votre contexte", send:"Envoyer", ok:"Merci ! Nous revenons vers vous rapidement."}} />
        <p className="mt-6 text-slate-400 text-sm">Ou écrivez-nous : <a className="underline hover:text-white" href="mailto:founders@asplenz.com">founders@asplenz.com</a></p>
      </Section>
      <Footer />
    </main>
  );
}
