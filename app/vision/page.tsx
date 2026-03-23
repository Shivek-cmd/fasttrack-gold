import type { Metadata } from 'next'
import { Eye, Globe, Award, TrendingUp } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTA from '@/components/sections/CTA'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: 'Our Vision',
  description:
    "Fast Track Gold's vision is to be the world's number one precious minerals exporter — recognised for service quality, reliability, and an uncompromising commitment to integrity.",
  alternates: { canonical: `${SITE_CONFIG.url}/vision` },
}

const goals = [
  {
    icon: Globe,
    label: 'Global Reach',
    desc: "We are building the most trusted Colombian precious minerals export network in the world — connecting certified suppliers with qualified buyers on every continent.",
  },
  {
    icon: Award,
    label: 'Industry Leadership',
    desc: "We aim to set the standard for compliance, speed, and transparency in the Colombian mineral export sector — becoming the benchmark others measure themselves against.",
  },
  {
    icon: TrendingUp,
    label: 'Sustainable Growth',
    desc: "Our vision is not short-term volume — it is building lasting partnerships that grow over years, creating mutual value for our suppliers, clients, and the communities they operate in.",
  },
  {
    icon: Eye,
    label: 'Long-Term Vision',
    desc: "We look always toward the future. Every decision we make today — in compliance, logistics, and client relationships — is made with a 10-year horizon in mind.",
  },
]

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg pt-40 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Our Vision', href: '/vision' }]} />
          <AnimatedSection className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Where We Are Going
            </p>
            <h1
              className="font-display font-semibold leading-[1.08] tracking-[-0.03em] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              Our <span className="text-gold-shimmer">Vision</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed max-w-prose mb-6">
              Our vision is to be the number one mineral exporter worldwide — recognised for
              exceptional service quality and absolute commitment to our clients.
            </p>
            <p className="text-muted leading-relaxed max-w-prose">
              We look always toward the future with loyalty, honesty, and integrity at the core
              of everything we do. We are building an organisation that will still be the most
              trusted name in Colombian mineral exports decades from now.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision statement */}
      <section className="bg-primary/5 border-y border-primary/15 py-16 lg:py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <blockquote
              className="font-display font-semibold text-center leading-[1.15] tracking-[-0.02em] text-text"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
            >
              &ldquo;To be recognised globally as the most reliable, transparent,
              <br className="hidden md:block" /> and trusted exporter of Colombian precious
              minerals — now and for generations to come.&rdquo;
            </blockquote>
            <p className="text-center text-muted text-sm mt-4">
              — {SITE_CONFIG.fullName}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Goals */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Our Strategic Goals
            </p>
            <h2
              className="font-display font-semibold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              How We Will Get There
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {goals.map(({ icon: Icon, label, desc }, i) => (
              <AnimatedSection key={label} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-bg-secondary border border-border hover:border-primary/25 transition-colors h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3">{label}</h3>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
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
