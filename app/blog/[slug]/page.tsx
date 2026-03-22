import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { SITE_CONFIG } from '@/constants'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ReadingProgress from '@/components/blog/ReadingProgress'
import TableOfContents from '@/components/blog/TableOfContents'
import RelatedPosts from '@/components/blog/RelatedPosts'
import Badge from '@/components/ui/Badge'
import { articleSchema } from '@/lib/structured-data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  const { frontmatter: fm } = post
  return {
    title: fm.title,
    description: fm.excerpt,
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: fm.title,
      description: fm.excerpt,
      publishedTime: fm.date,
      authors: [fm.author],
      images: [{ url: fm.ogImage || fm.coverImage || '/og/og-default.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const { frontmatter: fm, content } = post
  const all = await getAllPosts()
  const related = all.filter((p) => p.slug !== slug && p.category === fm.category).slice(0, 2)

  const schema = articleSchema({ ...fm, slug })

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-bg pt-28 pb-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Blog', href: '/blog' },
              { label: fm.title },
            ]}
          />
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-5">{fm.category}</Badge>
            <h1
              className="font-display font-semibold leading-[1.1] tracking-[-0.02em] mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}
            >
              {fm.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
              <span>{fm.author}</span>
              <span>·</span>
              <span>{formatDate(fm.date)}</span>
              <span>·</span>
              <span>{fm.readingTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      {fm.coverImage && (
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src={fm.coverImage}
              alt={fm.title}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>
        </div>
      )}

      {/* Body */}
      <section className="bg-bg pb-24 lg:pb-32">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 items-start">
            {/* Article */}
            <article className="prose prose-invert max-w-prose">
              <MDXRemote source={content} />
              <RelatedPosts posts={related} />
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block sticky top-28">
              <TableOfContents />
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
