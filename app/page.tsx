import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import LogoMarquee from '@/components/sections/LogoMarquee'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import FAQ from '@/components/sections/FAQ'
import BlogPreview from '@/components/sections/BlogPreview'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  alternates: { canonical: SITE_CONFIG.url },
}

function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center py-0 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 h-px bg-border" />
      <div className="relative z-10 w-1.5 h-1.5 rotate-45 bg-primary/40 ring-4 ring-bg" />
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <SectionDivider />
      <LogoMarquee />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Testimonials />
      <CTA />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <BlogPreview />
    </>
  )
}
