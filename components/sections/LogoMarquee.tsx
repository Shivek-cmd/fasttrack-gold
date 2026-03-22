import AnimatedSection from '@/components/ui/AnimatedSection'

const partners = [
  'Rucom Certified',
  'Colombian Mining Authority',
  'DIAN Approved',
  'Certificate of Origin',
  'International Gold Standards',
  'RUT Verified',
  'ANM Registered',
  'Customs Certified',
  'ISO Compliant',
  'LBMA Standards',
]

export default function LogoMarquee() {
  const doubled = [...partners, ...partners]

  return (
    <section className="bg-bg py-16 border-y border-border overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <AnimatedSection>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted">
            Compliant with International &amp; Colombian Standards
          </p>
        </AnimatedSection>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="marquee-track gap-12">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-bg-secondary whitespace-nowrap flex-shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-sm text-muted font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
