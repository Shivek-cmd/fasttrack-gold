import type { Metadata } from 'next'
import { Globe, ShieldCheck, Truck, Gem, Sparkles, FileCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTA from '@/components/sections/CTA'
import { SERVICES, SITE_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Fast Track Gold offers wholesale precious mineral export, compliance verification, secure logistics, and regulatory consulting for Colombian gold and emerald suppliers.',
  alternates: { canonical: `${SITE_CONFIG.url}/services` },
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe, ShieldCheck, Truck, Gem, Sparkles, FileCheck,
}

const process = [
  { step: '01', title: 'Supplier Onboarding',   desc: 'Submit your Rucom, Certificate of Origin, and RUT for compliance review.' },
  { step: '02', title: 'Document Verification', desc: "Our Compliance Officer validates all documents on Colombia's official government platforms." },
  { step: '03', title: 'Logistics Coordination', desc: 'We assign a dedicated customs and transport agent for your shipment.' },
  { step: '04', title: 'Export & Delivery',     desc: 'Your minerals are exported internationally with full legal documentation and tracking.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-32 pb-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Services', href: '/services' }]} />
          <AnimatedSection className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              What We Offer
            </p>
            <h1
              className="font-display font-semibold leading-[1.08] tracking-[-0.03em] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              Full-Service
              <span className="text-gold-shimmer"> Mineral Export</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-prose">
              From compliance verification to international customs clearance — Fast Track Gold
              handles the entire precious minerals export journey so you can focus on what you do
              best.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-bg-secondary py-20 lg:py-28">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon]
              return (
                <AnimatedSection key={service.id} delay={i * 0.08}>
                  <div className="p-8 rounded-2xl bg-bg border border-border hover:border-primary/30 hover:shadow-glow transition-all h-full group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      {Icon && <Icon className="w-6 h-6 text-primary" />}
                    </div>
                    <h2 className="font-display font-semibold text-xl mb-3">{service.title}</h2>
                    <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              How It Works
            </p>
            <h2
              className="font-display font-semibold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Our Export Process
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="relative p-6 rounded-2xl bg-bg-secondary border border-border h-full">
                  <span className="text-5xl font-display font-bold text-primary/15 leading-none block mb-4">
                    {step.step}
                  </span>
                  <h3 className="font-semibold text-text mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                  {/* Connector line */}
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 z-10">
                      <ArrowRight className="w-5 h-5 text-primary/30" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
