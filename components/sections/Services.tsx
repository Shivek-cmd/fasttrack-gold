'use client'
import { motion } from 'framer-motion'
import { Globe, ShieldCheck, Truck, Gem, Sparkles, FileCheck } from 'lucide-react'
import { SERVICES } from '@/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe, ShieldCheck, Truck, Gem, Sparkles, FileCheck,
}

const container = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  return (
    <section className="bg-bg-secondary py-24 lg:py-40">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            What We Do
          </p>
          <h2
            className="font-display font-semibold leading-[1.1] tracking-[-0.02em] mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Full-Service Precious Mineral
            <span className="text-gold-shimmer"> Commercialization</span>
          </h2>
          <p className="text-muted leading-relaxed">
            From sourcing to delivery, we handle every stage of the precious minerals export
            process with legal compliance and world-class logistics.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                variants={item}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 rounded-2xl bg-bg border border-border hover:border-primary/30
                  shadow-card hover:shadow-glow transition-all cursor-default group"
              >

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  {Icon && <Icon className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
