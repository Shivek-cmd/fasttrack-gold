export const SITE_CONFIG = {
  name: 'Fast Track Gold',
  fullName: 'Comercializadora Fast Track Gold S.A.S.',
  tagline: 'Premier Precious Minerals Exporter',
  description:
    'Fast Track Gold S.A.S. facilitates secure national and international commercialization of precious minerals and metalliferous products from Colombia — with loyalty, honesty, and integrity.',
  url: 'https://fasttrackgold.co',
  logo: '/icons/logo.png',
  email: 'info@fasttrackgold.co',
  phone: '+57 000 000 0000',
  address: 'Palmira, Valle del Cauca, Colombia',
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX',
  social: {
    instagram: 'https://instagram.com/fasttrackgold',
    linkedin:  'https://linkedin.com/company/fasttrackgold',
    twitter:   'https://twitter.com/fasttrackgold',
    whatsapp:  'https://wa.me/57000000000',
  },
}

export const NAV_LINKS = [
  { label: 'Home',         href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Company', href: '/about' },
      { label: 'Mission',     href: '/about#mission' },
      { label: 'Vision',      href: '/about#vision' },
      { label: 'Compliance',  href: '/about#compliance' },
      { label: 'Services',    href: '/services' },
    ],
  },
  {
    label: 'Products',
    href: '/products/oro',
    children: [
      { label: 'Gold',    href: '/products/oro' },
      { label: 'Emerald', href: '/products/esmeralda' },
    ],
  },
  { label: 'Blog',    href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const STATS = [
  { value: '100+', label: 'Tons Exported' },
  { value: '50+',  label: 'Global Clients' },
  { value: '10+',  label: 'Years Experience' },
  { value: '100%', label: 'Legal Compliance' },
]

export const SERVICES = [
  {
    id: 'export',
    icon: 'Globe',
    title: 'International Export',
    description:
      'Full-service precious minerals export to global buyers with seamless customs handling and logistics.',
  },
  {
    id: 'compliance',
    icon: 'ShieldCheck',
    title: 'Compliance & Verification',
    description:
      'Our Compliance Officer verifies all mineral provenance documents — Rucom, Certificate of Origin, and RUT.',
  },
  {
    id: 'logistics',
    icon: 'Truck',
    title: 'Secure Logistics',
    description:
      'Dedicated national and international customs agents ensure fast, efficient, and secure mineral delivery.',
  },
  {
    id: 'gold',
    icon: 'Gem',
    title: 'Gold Trading',
    description:
      'Wholesale gold commercialization sourced from legally certified Colombian mining operations.',
  },
  {
    id: 'emerald',
    icon: 'Sparkles',
    title: 'Emerald Trading',
    description:
      'Premium Colombian emerald export — one of the finest gemstones in the world, handled with care.',
  },
  {
    id: 'consulting',
    icon: 'FileCheck',
    title: 'Regulatory Consulting',
    description:
      'We guide suppliers through Colombian mineral export regulations and documentation requirements.',
  },
]

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Carlos Mendez',
    title: 'Mining Director, Bogotá',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote:
      "Fast Track Gold handled our gold export from start to finish with impeccable professionalism. Every document was verified, every shipment was on time.",
  },
  {
    id: '2',
    name: 'Sofia Vargas',
    title: 'Jewellery Importer, Switzerland',
    avatar:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote:
      "The quality and traceability of the emeralds we source through Fast Track Gold is second to none. Their compliance process gives us complete confidence.",
  },
  {
    id: '3',
    name: 'James Okafor',
    title: 'Precious Metals Trader, London',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote:
      "We have worked with many Colombian exporters. Fast Track Gold stands out for their loyalty, speed, and the absolute integrity of every transaction.",
  },
  {
    id: '4',
    name: 'Ana Restrepo',
    title: 'Commodity Buyer, New York',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote:
      "Their team navigated every regulatory hurdle with ease. From Palmira to New York, our shipments arrived perfectly documented and on schedule.",
  },
]

export const FAQS = [
  {
    q: 'What documents are required to export gold through Fast Track Gold?',
    a: 'All suppliers must present Rucom registration, a Certificate of Origin, and an updated RUT. Our Compliance Officer verifies each document against official government platforms before any export proceeds.',
  },
  {
    q: 'Do you handle both national and international shipments?',
    a: 'Yes. Our logistics network covers both domestic Colombian routes and international exports. We coordinate customs agents and transport providers to ensure fast, secure delivery.',
  },
  {
    q: 'Which precious minerals do you commercialize?',
    a: 'We currently specialize in gold (Au, element 79) and emeralds. Both products are sourced from legally certified mining operations that comply with all Colombian government regulations.',
  },
  {
    q: 'How does your compliance verification process work?',
    a: 'Every prospective supplier undergoes a thorough review by our Compliance Officer. We verify Rucom registrations, exploitation permits, and origin certificates directly on official government platforms to confirm authenticity.',
  },
  {
    q: 'Where is Fast Track Gold based?',
    a: "We are headquartered in Palmira, Valle del Cauca, Colombia. Our logistics agents operate nationally and internationally to serve clients worldwide.",
  },
  {
    q: 'What values guide your business?',
    a: 'Loyalty, Honesty, and Integrity are the three core values that drive every decision at Fast Track Gold S.A.S. We are passionate entrepreneurs committed to providing the most reliable and transparent precious minerals trade service possible.',
  },
]
