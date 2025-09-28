import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function ConsultingPageFR() {
  return (
    <>
      <Navbar locale="fr" />

      {/* Hero */}
      <section className="section bg-hero">
        <div className="container-max grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="h1 mb-4">
              Asplenz Consulting — Optimisez vos workflows, votre SaaS et votre conformité avant qu’il ne soit trop tard.
            </h1>
            <p className="lead mb-6 max-w-2xl">
              Shadow work, dispersion du SaaS et écarts de conformité coûtent des millions aux entreprises.
              Nous vous aidons à les détecter, les mesurer et les corriger — dès maintenant.
            </p>
            <div className="flex gap-3">
              <a href="#contact" className="btn btn-primary">Demander une consultation</a>
              <a href="mailto:founders@asplenz.com" className="btn btn-ghost">Nous contacter</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-full h-64 rounded-2xl border border-slate-800/60 bg-slate-900/50" />
          </div>
        </div>
      </section>

      {/* Enjeux */}
      <Section
        id="challenges"
        muted
        title="Quand la dette de productivité rencontre le risque de conformité"
        lead="La plupart des entreprises accumulent des inefficiences cachées qui croissent avec l’échelle."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="h3 mb-2">Shadow Work</h3>
            <p className="text-slate-300 text-sm">
              Tâches dans Slack/Teams/email qui échappent au suivi officiel et aux SLA.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="h3 mb-2">SaaS Sprawl</h3>
            <p className="text-slate-300 text-sm">
              Empilement d’apps, peu de gouvernance, risque et coût en hausse.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="h3 mb-2">Gaspillage de licences</h3>
            <p className="text-slate-300 text-sm">
              Licences Jira/ServiceNow/Salesforce/Slack sous-utilisées — budgets qui fuient en silence.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="h3 mb-2">Silos & écarts de conformité</h3>
            <p className="text-slate-300 text-sm">
              Processus fragmentés, validations/audit incohérents, escalades faibles.
            </p>
          </div>
        </div>
      </Section>

      {/* Approche */}
      <Section id="approach" title="Une démarche structurée en 3 étapes">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="h3 mb-2">1) Entretien exploratoire</h3>
            <p className="text-slate-300 text-sm">
              Entretiens avec les parties prenantes pour aligner problèmes et objectifs.
            </p>
            <p className="text-slate-400 text-xs mt-2">Livrable : synthèse & premières hypothèses.</p>
          </div>
          <div className="card p-6">
            <h3 className="h3 mb-2">2) Audit organisationnel & SaaS</h3>
            <ul className="text-slate-300 text-sm list-disc pl-5 space-y-1">
              <li>Cartographie du shadow work et des dépendances informelles</li>
              <li>Revue de l’usage SaaS (sprawl, redondances, licences sous-utilisées)</li>
              <li>Évaluation de la maturité de gouvernance & couverture conformité</li>
            </ul>
            <p className="text-slate-400 text-xs mt-2">Livrable : rapport structuré + recommandations priorisées.</p>
          </div>
          <div className="card p-6">
            <h3 className="h3 mb-2">3) Mise en œuvre accompagnée</h3>
            <ul className="text-slate-300 text-sm list-disc pl-5 space-y-1">
              <li>Rationalisation des workflows & clarification des rôles</li>
              <li>Optimisation des licences SaaS (ROI immédiatement mesurable)</li>
              <li>Rituels efficaces & cadres de gouvernance</li>
              <li>Préparation conformité (RGPD, SOX, AI Act)</li>
            </ul>
            <p className="text-slate-400 text-xs mt-2">Livrable : plan d’action + coaching ou ateliers.</p>
          </div>
        </div>
      </Section>

      {/* Pourquoi Asplenz */}
      <Section
        id="why"
        muted
        title="Pourquoi Asplenz Consulting ?"
        lead="Nous connaissons ces douleurs, nous les avons vécues."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="h3 mb-2">Expérience entreprise</h3>
            <p className="text-slate-300 text-sm">
              20+ ans dans le logiciel, 15+ en leadership techno (finance, énergie, fintech).
            </p>
          </div>
          <div className="card p-6">
            <h3 className="h3 mb-2">Perspective produit</h3>
            <p className="text-slate-300 text-sm">
              Fondateur d’Asplenz (Discover, Unified Governance, ApprovalGate) — recommandations ancrées dans une vision produit durable.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="h3 mb-2">Neutre & orienté ROI</h3>
            <p className="text-slate-300 text-sm">
              Audits agnostiques vis-à-vis des outils ; économies et réduction du risque comme boussole.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="h3 mb-2">Prêt pour les environnements régulés</h3>
            <p className="text-slate-300 text-sm">
              RGPD, SOX, AI Act : intégrés à nos méthodes et préconisations.
            </p>
          </div>
        </div>
      </Section>

      {/* Résultats */}
      <Section title="Des résultats tangibles" lead="Un ROI mesurable dès le premier jour.">
        <ul className="text-slate-300 text-sm list-disc pl-5 space-y-1">
          <li>Jusqu’à <strong>30% de licences SaaS</strong> réaffectées ou supprimées</li>
          <li>Réduction de <strong>20–40%</strong> du shadow work</li>
          <li><strong>Moins de risques de non-conformité</strong> grâce à l’audit & aux SLA transverses</li>
          <li><strong>Économies immédiates</strong> — souvent 5–10× le coût de la mission</li>
        </ul>
      </Section>

      {/* CTA */}
      <Section
        id="contact"
        muted
        title="Réduisons ensemble le chaos et les coûts cachés"
        lead="Diagnostics courts (2–6 semaines). Forfait selon périmètre. Option de suivi trimestriel (governance health check)."
      >
        <div className="card p-6 max-w-2xl">
          <div className="flex gap-3">
            <a href="mailto:founders@asplenz.com" className="btn btn-primary">Demander une consultation</a>
            <a href="mailto:founders@asplenz.com" className="btn btn-ghost">Nous contacter</a>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
