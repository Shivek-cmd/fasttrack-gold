import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Zap, Thermometer, FlaskConical, Gem, ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTA from '@/components/sections/CTA'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: 'Gold (Oro) — Colombian Gold Export',
  description:
    'Fast Track Gold exports premium Colombian gold (Au, element 79) — fully certified, legally compliant, and traceable. Wholesale export to international buyers.',
  alternates: { canonical: `${SITE_CONFIG.url}/products/oro` },
}

const properties = [
  { icon: FlaskConical, label: 'Element',     value: 'Au — Atomic No. 79' },
  { icon: Zap,          label: 'Conductivity', value: 'Excellent heat & electricity' },
  { icon: Thermometer,  label: 'Durability',   value: 'Non-reactive, preserved over time' },
  { icon: Gem,          label: 'Malleability', value: "World's most workable metal" },
]

export default function OroPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Products', href: '/products/oro' },
              { label: 'Gold (Oro)' },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Au — Element 79
              </div>
              <h1
                className="font-display font-semibold leading-[1.08] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
              >
                Colombian
                <br />
                <span className="text-gold-shimmer">Gold</span>
              </h1>
              <p className="text-muted text-lg leading-relaxed max-w-prose mb-6">
                From the Latin <em>aurum</em> — Gold is element 79 on the periodic table. Found in
                the Earth&apos;s crust, it is characterized by its brilliant yellow color and the
                remarkable property of remaining unaltered over time.
              </p>
              <p className="text-muted leading-relaxed max-w-prose mb-8">
                Gold is the world&apos;s most flexible and workable metal — an excellent conductor of
                heat and electricity, and used across decorative arts, jewellery, electronics, and
                investment. Colombia is one of the world&apos;s leading gold-producing nations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-primary text-black font-semibold hover:opacity-90 hover:shadow-glow transition-all group"
              >
                Inquire About Gold Export
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80"
                  alt="Colombian gold mineral"
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
            <h2 className="font-display font-semibold text-3xl">Physical Properties</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map(({ icon: Icon, label, value }, i) => (
              <AnimatedSection key={label} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-bg border border-border text-center hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-1">{label}</p>
                  <p className="font-medium text-text text-sm">{value}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Emerald cross-link */}
      <section className="bg-bg py-16 border-y border-border">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs text-muted uppercase tracking-widest mb-1">Also Available</p>
              <h3 className="font-display font-semibold text-2xl">
                Colombian <span className="text-accent">Emeralds</span>
              </h3>
            </div>
            <Link
              href="/products/esmeralda"
              className="inline-flex items-center gap-2 h-11 px-8 rounded-lg border border-accent/40 text-accent font-medium text-sm hover:bg-accent/10 transition-colors flex-shrink-0 group"
            >
              View Emeralds
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  )
}
