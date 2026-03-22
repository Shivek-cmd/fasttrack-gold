'use client'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { STATS } from '@/constants'

function Counter({ target, inView }: { target: string; inView: boolean }) {
  const isPercent = target.endsWith('%')
  const isPlus = target.endsWith('+')
  const num = parseInt(target.replace(/[^0-9]/g, ''), 10)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const steps = 60
    const increment = num / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= num) {
        setCount(num)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, num])

  return (
    <span>
      {count}
      {isPlus && '+'}
      {isPercent && '%'}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-bg-secondary border-y border-border py-16 lg:py-20">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="font-display font-semibold text-primary mb-2"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}
              >
                <Counter target={stat.value} inView={isInView} />
              </div>
              <p className="text-sm text-muted uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
