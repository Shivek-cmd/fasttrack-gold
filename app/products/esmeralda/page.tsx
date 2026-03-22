import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Gem, Sparkles, Shield, Globe, ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTA from '@/components/sections/CTA'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: 'Emerald (Esmeralda) — Colombian Emerald Export',
  description:
    'Fast Track Gold exports premium Colombian emeralds — one of the finest precious gemstones in the world. Fully certified, legally compliant wholesale export.',
  alternates: { canonical: `${SITE_CONFIG.url}/products/esmeralda` },
}

const properties = [
  { icon: Gem,      label: 'Type',        value: 'Precious Gemstone' },
  { icon: Sparkles, label: 'Colour',      value: 'Vivid green tones' },
  { icon: Shield,   label: 'Hardness',    value: '7.5–8 Mohs — very hard' },
  { icon: Globe,    label: 'Origin',      value: 'Colombia — world\'s finest' },
]

export default function EsmeraldaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-accent/8 blur-3xl" />
        </div>
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Products', href: '/products/oro' },
              { label: 'Emerald (Esmeralda)' },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Smaragdus — Precious Stone
              </div>
              <h1
                className="font-display font-semibold leading-[1.08] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
              >
                Colombian
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, #2E7D52 0%, #52b788 50%, #2E7D52 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Emeralds
                </span>
              </h1>
              <p className="text-muted text-lg leading-relaxed max-w-prose mb-6">
                From the Latin <em>smaragdus</em> — the emerald is one of the world&apos;s most
                coveted precious stones, prized for its exceptional green tones. Colombia produces
                the finest emeralds on Earth, accounting for over 70% of global supply.
              </p>
              <p className="text-muted leading-relaxed max-w-prose mb-8">
                Emeralds are translucent, remarkably hard, and fine in texture — highly prized in
                luxury jewellery worldwide. Our emeralds are sourced only from legally certified
                Colombian mining operations with full provenance documentation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-accent text-white font-semibold hover:opacity-90 transition-all group"
              >
                Inquire About Emerald Export
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80"
                  alt="Colombian emerald gemstone"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="bg-bg-secondary py-20 lg:py-28">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display font-semibold text-3xl">Gemstone Properties</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map(({ icon: Icon, label, value }, i) => (
              <AnimatedSection key={label} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-bg border border-border text-center hover:border-accent/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-1">{label}</p>
                  <p className="font-medium text-text text-sm">{value}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gold cross-link */}
      <section className="bg-bg py-16 border-y border-border">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs text-muted uppercase tracking-widest mb-1">Also Available</p>
              <h3 className="font-display font-semibold text-2xl">
                Colombian <span className="text-primary">Gold</span>
              </h3>
            </div>
            <Link
              href="/products/oro"
              className="inline-flex items-center gap-2 h-11 px-8 rounded-lg border border-primary/40 text-primary font-medium text-sm hover:bg-primary/10 transition-colors flex-shrink-0 group"
            >
              View Gold
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  )
}
