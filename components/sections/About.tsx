import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Heart, Star } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const values = [
  { icon: ShieldCheck, label: 'Honesty',   desc: 'Transparent operations at every stage of the export process.' },
  { icon: Heart,       label: 'Loyalty',   desc: 'Long-term partnerships built on trust with suppliers and buyers.' },
  { icon: Star,        label: 'Integrity', desc: 'We never compromise on legal compliance or ethical standards.' },
]

export default function About() {
  return (
    <section className="bg-bg py-24 lg:py-40 relative overflow-hidden">

      {/* ── Ambient glow — dark mode only, desktop only ── */}
      <div className="glow-accent hidden md:block w-[500px] h-[500px] top-1/2 right-0 translate-x-1/3 -translate-y-1/2" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24 items-center">

          {/* Text */}
          <div>
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Who We Are
              </p>
              <h2
                className="font-display font-semibold leading-[1.1] tracking-[-0.02em] mb-6"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
              >
                Colombia&apos;s Most Trusted
                <br />
                <span className="text-gold-shimmer">Minerals Exporter</span>
              </h2>
              <p className="text-muted leading-relaxed mb-6 max-w-prose">
                Comercializadora Fast Track Gold S.A.S. facilitates secure, fully legal national and
                international commercialization of precious minerals and metalliferous products.
                Established in Palmira, Valle del Cauca, we serve clients across the globe.
              </p>
              <p className="text-muted leading-relaxed mb-8 max-w-prose">
                Every supplier in our network undergoes rigorous compliance verification — Rucom,
                Certificate of Origin, and RUT — reviewed against official Colombian government
                platforms. Our dedicated customs agents ensure every shipment arrives fast and
                perfectly documented.
              </p>

              {/* Values — with corner bracket marks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {values.map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="relative p-4 rounded-xl bg-bg-secondary border border-border hover:border-primary/30 transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-primary mb-2" />
                    <p className="font-display font-semibold text-base mb-1">{label}</p>
                    <p className="text-xs text-muted leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group"
              >
                Learn about our company
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>

          {/* Image */}
          <AnimatedSection delay={0.2} direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
                  alt="Colombian gold mineral operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-bg-secondary border border-border rounded-xl p-4 shadow-xl">
                <p className="text-xs text-muted mb-0.5">Headquarters</p>
                <p className="text-sm font-semibold text-text">Palmira, Valle del Cauca</p>
                <p className="text-xs text-primary mt-1">Colombia 🇨🇴</p>
              </div>
              {/* Accent ring */}
              <div className="hidden md:block absolute -top-4 -right-4 w-24 h-24 rounded-full border border-primary/20 pointer-events-none" aria-hidden="true" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
