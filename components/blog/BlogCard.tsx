import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import Badge from '@/components/ui/Badge'
import type { BlogPost } from '@/types'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-bg-secondary border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all hover:shadow-card flex flex-col h-full">
        <div className="relative h-52 overflow-hidden flex-shrink-0">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/50 to-transparent" />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="gold">{post.category}</Badge>
            <span className="text-xs text-muted">{post.readingTime}</span>
          </div>
          <h3 className="font-display font-semibold text-xl leading-snug mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed flex-1 mb-5">{post.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-muted border-t border-border pt-4">
            <span className="flex items-center gap-1.5">{post.author}</span>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
