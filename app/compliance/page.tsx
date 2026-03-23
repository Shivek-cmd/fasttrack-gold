import type { Metadata } from 'next'
import { ShieldCheck, FileCheck, Search, AlertTriangle, CheckCircle } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTA from '@/components/sections/CTA'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: 'Compliance',
  description:
    'Fast Track Gold requires full legal documentation from every mineral supplier — Rucom, Certificate of Origin, and RUT — verified against official Colombian government platforms.',
  alternates: { canonical: `${SITE_CONFIG.url}/compliance` },
}

const documents = [
  {
    icon: FileCheck,
    name: 'Rucom Registration',
    full: 'Registro Único de Comercializadores de Minerales',
    desc: "The Rucom is the central registry for all mineral commercializers in Colombia, administered by the Agencia Nacional de Minería (ANM). An active, current Rucom registration is the first document we verify for every supplier.",
    how: "Verified directly on the ANM's official platform in real time.",
  },
  {
    icon: Search,
    name: 'Certificate of Origin',
    full: 'Certificado de Origen Mineral',
    desc: "The Certificate of Origin establishes the specific mine, mining title, and extraction date of the mineral being exported. It is the primary document that proves a mineral was extracted legally from a registered operation.",
    how: "Cross-referenced against the mining title registry and ANM records.",
  },
  {
    icon: ShieldCheck,
    name: 'RUT',
    full: 'Registro Único Tributario',
    desc: "The RUT is Colombia's unified tax registration certificate, issued by DIAN. It establishes the legal tax identity of the supplier and is required for all customs declarations and export procedures.",
    how: "Verified on the DIAN official platform. Must be fully updated.",
  },
]

const steps = [
  { num: '01', title: 'Supplier Application',    desc: "Supplier submits their documents — Rucom, Certificate of Origin, and updated RUT — to our Compliance Officer." },
  { num: '02', title: 'Document Verification',   desc: "Each document is verified in real time against the issuing authority's official government platform. No exceptions." },
  { num: '03', title: 'Risk Assessment',         desc: "Our Compliance Officer evaluates provenance risk, supplier history, and geographic origin of the mineral." },
  { num: '04', title: 'Approval or Rejection',   desc: "Suppliers who meet all requirements are approved. Those who do not are rejected — with a clear explanation of what is missing." },
  { num: '05', title: 'Ongoing Monitoring',       desc: "Approved suppliers are monitored continuously. Expired documents trigger immediate re-verification before any new transaction proceeds." },
]

export default function CompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg pt-40 pb-20 overflow-hidden">
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Compliance', href: '/compliance' }]} />
          <AnimatedSection className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Legal Standards
            </p>
            <h1
              className="font-display font-semibold leading-[1.08] tracking-[-0.03em] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              Our <span className="text-gold-shimmer">Compliance</span> Process
            </h1>
            <p className="text-muted text-xl leading-relaxed max-w-prose mb-6">
              Every mineral we export is traceable, legally certified, and verified against
              official Colombian government records. This is non-negotiable.
            </p>
            <p className="text-muted leading-relaxed max-w-prose">
              {SITE_CONFIG.fullName} requires every supplier to present full legal documentation
              before any export transaction proceeds. Our Compliance Officer reviews all documents
              against official government platforms — not just at face value.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Required documents */}
      <section className="bg-bg-secondary py-24 lg:py-32">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Required Documentation
            </p>
            <h2
              className="font-display font-semibold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Three Documents. No Exceptions.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {documents.map(({ icon: Icon, name, full, desc, how }, i) => (
              <AnimatedSection key={name} delay={i * 0.12}>
                <div className="p-8 rounded-2xl bg-bg border border-border hover:border-primary/25 transition-colors h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-1">{name}</h3>
                  <p className="text-xs text-muted italic mb-4">{full}</p>
                  <p className="text-muted text-sm leading-relaxed flex-1 mb-5">{desc}</p>
                  <div className="flex items-start gap-2 pt-4 border-t border-border">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted">{how}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Our Process
            </p>
            <h2
              className="font-display font-semibold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              How Supplier Verification Works
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {steps.map(({ num, title, desc }, i) => (
              <AnimatedSection key={num} delay={i * 0.08}>
                <div className="flex gap-6 p-6 rounded-2xl bg-bg-secondary border border-border hover:border-primary/20 transition-colors">
                  <span
                    className="font-display font-bold text-primary/20 flex-shrink-0 leading-none"
                    style={{ fontSize: '2.5rem' }}
                  >
                    {num}
                  </span>
                  <div>
                    <h3 className="font-semibold text-text mb-1">{title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Warning box */}
      <section className="bg-bg-secondary py-16 border-t border-border">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex gap-4 p-6 rounded-2xl bg-warning/5 border border-warning/20 max-w-3xl mx-auto">
              <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-text mb-1">For International Buyers</p>
                <p className="text-sm text-muted leading-relaxed">
                  All minerals exported through Fast Track Gold come with full provenance documentation.
                  We provide complete compliance packages to support your own due diligence requirements
                  under EU, UK, and US conflict minerals regulations. Contact us to discuss your
                  specific documentation needs.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  )
}
