import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { getAllPosts } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import Badge from '@/components/ui/Badge'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default async function BlogPreview() {
  const posts = await getAllPosts()
  const latest = posts.slice(0, 3)

  if (latest.length === 0) return null

  return (
    <section className="bg-bg-secondary py-24 lg:py-40">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Latest Insights
            </p>
            <h2
              className="font-display font-semibold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              From the <span className="text-gold-shimmer">Blog</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all flex-shrink-0"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {latest.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="bg-bg border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all hover:shadow-card h-full flex flex-col">
                  {/* Cover image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="gold">{post.category}</Badge>
                      <span className="text-xs text-muted">{post.readingTime}</span>
                    </div>
                    <h3 className="font-display font-semibold text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted border-t border-border pt-4">
                      <span>{post.author}</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </article>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
