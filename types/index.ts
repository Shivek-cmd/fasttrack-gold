export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  tags: string[]
  coverImage: string
  readingTime: string
  ogImage?: string
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  slug?: string
}

export interface Testimonial {
  id: string
  name: string
  title: string
  avatar: string
  rating: number
  quote: string
}

export interface Stat {
  value: string
  label: string
}

export interface FAQ {
  q: string
  a: string
}

export interface Product {
  id: string
  name: string
  slug: string
  symbol?: string
  description: string
  uses: string[]
  image: string
  videoUrl?: string
}
