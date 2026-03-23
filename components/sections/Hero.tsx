'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

// ─── Config ────────────────────────────────────────────────────
const TOTAL_FRAMES = 151
const FPS          = 30
const FRAME_PATH   = '/hero-frames/ezgif-frame-'
const FRAME_EXT    = '.png'

function frameSrc(n: number) {
  return `${FRAME_PATH}${String(n).padStart(3, '0')}${FRAME_EXT}`
}

// ─── Canvas frame player ────────────────────────────────────────
function FramePlayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef  = useRef(0)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const animIdRef = useRef<number>(0)
  const [loaded, setLoaded] = useState(false)

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0
    const imgs: HTMLImageElement[] = new Array(TOTAL_FRAMES)

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image()
      img.src = frameSrc(i)
      img.onload = () => {
        loadedCount++
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = imgs
          setLoaded(true)
        }
      }
      img.onerror = () => {
        loadedCount++
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = imgs
          setLoaded(true)
        }
      }
      imgs[i - 1] = img
    }
  }, [])

  // Start animation once loaded
  useEffect(() => {
    if (!loaded) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let lastTime = 0
    const interval = 1000 / FPS

    const draw = (timestamp: number) => {
      if (timestamp - lastTime >= interval) {
        const img = imagesRef.current[frameRef.current]
        if (img?.complete && img.naturalWidth > 0) {
          canvas.width  = img.naturalWidth
          canvas.height = img.naturalHeight
          ctx.drawImage(img, 0, 0)
        }
        if (frameRef.current < TOTAL_FRAMES - 1) {
          frameRef.current++
          animIdRef.current = requestAnimationFrame(draw)
        }
        // stops on last frame — no loop
        lastTime = timestamp
      } else {
        animIdRef.current = requestAnimationFrame(draw)
      }
    }

    animIdRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animIdRef.current)
  }, [loaded])

  return (
    <>
      {/* Pure black shown while frames load — NO fallback image */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-700"
        style={{ opacity: loaded ? 0 : 1, pointerEvents: 'none' }}
      />
      {/* Canvas fades in once first frame is ready */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.8s',
          filter: 'brightness(1.3) contrast(1.2)',
        }}
      />
    </>
  )
}

// ─── Staggered word reveal ──────────────────────────────────────
const wordVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
}
const lineVariants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08 } },
}

function StaggerLine({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-[0.22em] ${className ?? ''}`}
      variants={lineVariants}
    >
      {text.split(' ').map((word, i) => (
        <motion.span key={i} variants={wordVariants} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

// ─── Hero ───────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">

      {/* ── Frame player background ── */}
      <div className="absolute inset-0 z-0">
        <FramePlayer />
        <div className="absolute inset-0 dark-overlay" />
        <div className="absolute inset-0 hero-gradient-lr" />
        <div className="absolute inset-0 hero-gradient-bt" />
        <div className="absolute inset-0 hero-diagonal hidden md:block" />
      </div>

      {/* ── Ambient glow ── */}
      <div className="glow-primary hidden md:block w-[600px] h-[500px] top-1/3 -left-20" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 lg:pb-40">
        <div className="max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Colombia&apos;s Premier Mineral Exporter
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
            className="font-display font-semibold leading-[1.08] tracking-[-0.03em] text-text mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
          >
            <StaggerLine text="The World's" className="block" />
            <motion.span variants={wordVariants} className="block text-shimmer">
              Finest Gold
            </motion.span>
            <StaggerLine text="& Emeralds" className="block" />
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-muted text-lg leading-relaxed max-w-prose mb-10"
          >
            Comercializadora Fast Track Gold S.A.S. connects certified Colombian mineral suppliers
            with global buyers — with full legal compliance, secure logistics, and uncompromising
            integrity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-lg bg-primary text-black font-semibold text-base hover:opacity-90 hover:shadow-glow transition-all group"
            >
              Start Exporting
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products/oro"
              className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-lg border border-border hover:border-primary text-text font-medium text-base transition-colors hover:bg-bg-secondary"
            >
              View Products
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap items-center gap-5 mt-12 pt-8 border-t border-border"
          >
            {['Rucom Verified', 'Certificate of Origin', 'RUT Certified', 'Gov. Compliant'].map(
              (item) => (
                <span key={item} className="flex items-center gap-2 text-xs text-muted">
                  <span className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </span>
                  {item}
                </span>
              ),
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-muted"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
