import type { Metadata } from 'next'
import { Target, Heart, Star, ShieldCheck } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTA from '@/components/sections/CTA'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: 'Our Mission',
  description:
    'Fast Track Gold exists to provide the fastest, safest, and most reliable way to commercialize precious minerals — with loyalty, honesty, and integrity at every step.',
  alternates: { canonical: `${SITE_CONFIG.url}/mission` },
}

const pillars = [
  {
    icon: Heart,
    title: 'Passion-Driven',
    desc: "We are entrepreneurs inspired by a genuine passion for what we do. That energy shows in every shipment we coordinate, every document we verify, and every client relationship we build.",
  },
  {
    icon: ShieldCheck,
    title: 'Legally Compliant',
    desc: "Every transaction we facilitate meets the full requirements of the Colombian government. No shortcuts. No grey areas. Every mineral we export carries a clean, verifiable provenance chain.",
  },
  {
    icon: Star,
    title: 'Service Excellence',
    desc: "Speed and security are not opposites — we deliver both. Our logistics network is built to move precious minerals from Colombia to any destination in the world efficiently and safely.",
  },
  {
    icon: Target,
    title: 'Client First',
    desc: "Our clients — whether mineral suppliers in Colombia or buyers across the globe — are the reason we exist. Their success is our mission. We measure ourselves by their results.",
  },
]

export default function MissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg pt-40 pb-20 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Our Mission', href: '/mission' }]} />
          <AnimatedSection className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Why We Exist
            </p>
            <h1
              className="font-display font-semibold leading-[1.08] tracking-[-0.03em] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              Our <span className="text-gold-shimmer">Mission</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed max-w-prose mb-6">
              Our mission is to provide our clients with the fastest, safest, and most reliable
              way to commercialize their precious minerals.
            </p>
            <p className="text-muted leading-relaxed max-w-prose">
              We are passionate entrepreneurs inspired to deliver the best possible service — upholding
              the highest standards of transparency and legal compliance in every transaction. From
              first contact to final delivery, we act as trusted partners, not just service providers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission statement — full width */}
      <section className="bg-primary/5 border-y border-primary/15 py-16 lg:py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <blockquote
              className="font-display font-semibold text-center leading-[1.15] tracking-[-0.02em] text-text"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
            >
              &ldquo;To be the bridge between Colombia&apos;s finest minerals
              <br className="hidden md:block" /> and the world — built on loyalty, honesty,
              and integrity.&rdquo;
            </blockquote>
            <p className="text-center text-muted text-sm mt-4">
              — {SITE_CONFIG.fullName}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Four pillars */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              How We Live It
            </p>
            <h2
              className="font-display font-semibold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              The Four Pillars of Our Mission
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-bg-secondary border border-border hover:border-primary/25 transition-colors h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3">{title}</h3>
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
