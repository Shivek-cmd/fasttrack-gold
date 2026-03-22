'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { TESTIMONIALS } from '@/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % TESTIMONIALS.length)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [paused, next])

  const t = TESTIMONIALS[current]

  return (
    <section className="bg-bg-secondary py-24 lg:py-40">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Testimonials
          </p>
          <h2
            className="font-display font-semibold leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Trusted by Clients
            <span className="text-gold-shimmer"> Worldwide</span>
          </h2>
        </AnimatedSection>

        {/* Slider */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-bg border border-border rounded-2xl p-8 lg:p-12 text-center shadow-card"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-xl lg:text-2xl leading-relaxed text-text mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-text">{t.name}</p>
                  <p className="text-sm text-muted">{t.title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="h-10 w-10 rounded-full border border-border hover:border-primary hover:text-primary text-muted flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current ? 'w-6 bg-primary' : 'w-1.5 bg-border hover:bg-muted'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="h-10 w-10 rounded-full border border-border hover:border-primary hover:text-primary text-muted flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
