import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/mdx'
import BlogCard from '@/components/blog/BlogCard'
import Breadcrumb from '@/components/ui/Breadcrumb'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: 'Blog — Precious Minerals Insights',
  description:
    'Industry insights, compliance guides, and precious minerals news from Fast Track Gold — Colombia\'s premier mineral exporter.',
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-32 pb-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Blog', href: '/blog' }]} />
          <AnimatedSection className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Insights &amp; Updates
            </p>
            <h1
              className="font-display font-semibold leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              The <span className="text-gold-shimmer">Minerals</span> Blog
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-bg pb-24 lg:pb-32">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <AnimatedSection className="text-center py-20">
              <p className="text-muted">No articles published yet. Check back soon.</p>
            </AnimatedSection>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i * 0.08}>
                  <BlogCard post={post} />
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
