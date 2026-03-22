'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { Input, Textarea } from '@/components/ui/Input'
import { Spinner } from '@/components/ui/Skeleton'
import Breadcrumb from '@/components/ui/Breadcrumb'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SITE_CONFIG } from '@/constants'

const contactInfo = [
  { icon: Mail,    label: 'Email',   value: SITE_CONFIG.email,   href: `mailto:${SITE_CONFIG.email}` },
  { icon: Phone,   label: 'Phone',   value: SITE_CONFIG.phone,   href: `tel:${SITE_CONFIG.phone}` },
  { icon: MapPin,  label: 'Address', value: SITE_CONFIG.address, href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Message us directly', href: SITE_CONFIG.social.whatsapp },
]

export default function ContactPage() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '', lastName: '', company: '', phone: '', email: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 1800))
    setSending(false)
    setSent(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-32 pb-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contact', href: '/contact' }]} />
          <AnimatedSection className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Get in Touch
            </p>
            <h1
              className="font-display font-semibold leading-[1.08] tracking-[-0.03em] mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              Let&apos;s Talk
              <span className="text-gold-shimmer"> Minerals</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Whether you are a certified Colombian mineral supplier or an international buyer,
              we would love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="bg-bg pb-24 lg:pb-32">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">
            {/* Info */}
            <AnimatedSection className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-5 rounded-xl bg-bg-secondary border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-text">{value}</p>
                  </div>
                </a>
              ))}

              <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/15">
                <p className="text-sm font-semibold text-text mb-2">Required Documents</p>
                <p className="text-xs text-muted leading-relaxed">
                  To begin the export process, please have your Rucom registration, Certificate of
                  Origin, and updated RUT ready for our Compliance Officer to review.
                </p>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.15}>
              <div className="bg-bg-secondary border border-border rounded-2xl p-8 lg:p-10">
                {sent ? (
                  <div className="flex flex-col items-center text-center py-12 gap-4">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-success" />
                    </div>
                    <h2 className="font-display font-semibold text-2xl">Message Sent!</h2>
                    <p className="text-muted max-w-sm">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display font-semibold text-2xl mb-8">Send a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Input
                          label="First Name"
                          name="name"
                          placeholder="Carlos"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                        <Input
                          label="Last Name"
                          name="lastName"
                          placeholder="Mendez"
                          value={form.lastName}
                          onChange={handleChange}
                        />
                      </div>
                      <Input
                        label="Company"
                        name="company"
                        placeholder="Mining Corp S.A.S."
                        value={form.company}
                        onChange={handleChange}
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Input
                          label="Cell Number"
                          name="phone"
                          type="tel"
                          placeholder="+57 300 000 0000"
                          value={form.phone}
                          onChange={handleChange}
                        />
                        <Input
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="carlos@example.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <Textarea
                        label="Message"
                        name="message"
                        placeholder="Tell us about your minerals and what you need..."
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full h-12 rounded-lg bg-primary text-black font-semibold flex items-center justify-center gap-2 hover:opacity-90 hover:shadow-glow transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {sending ? (
                          <>
                            <Spinner size="sm" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
