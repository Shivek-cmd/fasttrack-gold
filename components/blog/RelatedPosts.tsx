import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/types'
import { formatDate } from '@/lib/utils'

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null
  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="font-display font-semibold text-2xl mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex gap-4">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="80px"
              />
            </div>
            <div>
              <p className="text-xs text-primary mb-1">{post.category}</p>
              <h3 className="text-sm font-medium text-text group-hover:text-primary transition-colors leading-snug mb-1">
                {post.title}
              </h3>
              <p className="text-xs text-muted">{formatDate(post.date)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
