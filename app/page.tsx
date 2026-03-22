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

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <LogoMarquee />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <FAQ />
      <BlogPreview />
    </>
  )
}
