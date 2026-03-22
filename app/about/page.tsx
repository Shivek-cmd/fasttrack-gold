import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Heart, Star, Globe, Target, Eye, ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTA from '@/components/sections/CTA'
import { SITE_CONFIG } from '@/constants'
import { organizationSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Comercializadora Fast Track Gold S.A.S. — our company, mission, vision, compliance process, and core values.',
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
}

const sections = [
  {
    id: 'mission',
    icon: Target,
    title: 'Our Mission',
    color: 'text-primary',
    bg: 'bg-primary/10',
    content:
      "Our mission is to provide our clients with the fastest, safest, and most reliable way to commercialize their products. We are passionate entrepreneurs inspired to deliver the best possible service — upholding the highest standards of transparency and legal compliance in every transaction.",
  },
  {
    id: 'vision',
    icon: Eye,
    title: 'Our Vision',
    color: 'text-accent',
    bg: 'bg-accent/10',
    content:
      "Our vision is to be the number one mineral exporter worldwide — recognized for exceptional service quality and absolute commitment to our clients. We look always toward the future with loyalty, honesty, and integrity at the core of everything we do.",
  },
  {
    id: 'compliance',
    icon: ShieldCheck,
    title: 'Compliance',
    color: 'text-primary',
    bg: 'bg-primary/10',
    content:
      "Every applicant wishing to export precious metals or metalliferous products through Fast Track Gold must present legal documentation verified by our Compliance Officer — including Rucom registration, Certificate of Origin, and an updated RUT. Each document is cross-verified against official Colombian government platforms to confirm authenticity and evaluate mineral provenance risk.",
  },
]

const values = [
  { icon: Heart,       label: 'Loyalty',   desc: 'Long-term partnerships built on unwavering trust.' },
  { icon: Star,        label: 'Honesty',   desc: 'Complete transparency at every stage of every deal.' },
  { icon: ShieldCheck, label: 'Integrity', desc: 'Zero compromise on legal standards or ethical practice.' },
  { icon: Globe,       label: 'Global',    desc: 'Serving international buyers with Colombian excellence.' },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />

      {/* Hero */}
      <section className="relative bg-bg pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About', href: '/about' }]} />
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Our Company
              </p>
              <h1
                className="font-display font-semibold leading-[1.08] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
              >
                Who We Are
              </h1>
              <p className="text-muted text-lg leading-relaxed max-w-prose mb-4">
                {SITE_CONFIG.fullName} facilitates a broad and secure commercialization of precious
                minerals and metalliferous products for national and international clients.
              </p>
              <p className="text-muted leading-relaxed max-w-prose mb-8">
                Established in Palmira, Valle del Cauca, Colombia, we operate a complete logistics
                service where every supplier must meet rigorous legal certifications. Our customs and
                transport agents coordinate fast, efficient, and secure delivery to clients worldwide.
              </p>
              <div className="flex flex-wrap gap-3">
                {values.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-secondary text-sm text-muted"
                  >
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    {label}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
                  alt="Colombian mountains and mining region"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-bg/80 backdrop-blur-md border border-border rounded-xl p-4">
                  <p className="text-sm font-semibold text-text mb-0.5">Palmira, Valle del Cauca</p>
                  <p className="text-xs text-muted">Colombia — Our Headquarters</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Compliance */}
      <section className="bg-bg-secondary py-24 lg:py-32">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sections.map((s, i) => {
              const Icon = s.icon
              return (
                <AnimatedSection key={s.id} delay={i * 0.12} id={s.id}>
                  <div className="p-8 rounded-2xl bg-bg border border-border hover:border-primary/20 transition-colors h-full">
                    <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center mb-5`}>
                      <Icon className={`w-6 h-6 ${s.color}`} />
                    </div>
                    <h2 className="font-display font-semibold text-2xl mb-4">{s.title}</h2>
                    <p className="text-muted text-sm leading-relaxed">{s.content}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Core Values</p>
            <h2
              className="font-display font-semibold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              What Drives Us
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, label, desc }, i) => (
              <AnimatedSection key={label} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-bg-secondary border border-border hover:border-primary/20 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">{label}</h3>
                  <p className="text-sm text-muted leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="bg-bg-secondary py-20 border-t border-border">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-semibold text-2xl mb-2">
                Ready to explore our services?
              </h2>
              <p className="text-muted">
                From compliance to customs, we handle the full export lifecycle.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 h-11 px-8 rounded-lg bg-primary text-black font-semibold text-sm hover:opacity-90 transition-opacity flex-shrink-0 group"
            >
              Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  )
}
