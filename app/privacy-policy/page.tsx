import type { Metadata } from 'next'
import Breadcrumb from '@/components/ui/Breadcrumb'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Fast Track Gold — how we collect, use, and protect your personal information.',
  alternates: { canonical: `${SITE_CONFIG.url}/privacy-policy` },
}

const sections = [
  {
    title: '1. Information We Collect',
    content: `When you use our website or contact us, we may collect the following information:

**Contact form data:** Your name, last name, company name, cell number, and email address when you submit our contact form.

**Usage data:** Standard server logs including your IP address, browser type, pages visited, and time spent on pages. This data is collected automatically and used only for website performance and security purposes.

**Communication data:** Any information you provide when you email or message us directly.

We do not collect sensitive personal data, payment card information, or financial data through this website.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect for the following purposes:

- To respond to your enquiries submitted through our contact form
- To communicate with you about our services, products, and compliance requirements
- To process potential export relationships and verify supplier documentation
- To improve our website and user experience
- To comply with legal obligations under Colombian law

We do not sell, rent, or trade your personal information to any third party. Ever.`,
  },
  {
    title: '3. Legal Basis for Processing',
    content: `We process your personal data on the following legal bases:

**Contractual necessity:** When processing is required to enter into or perform a contract with you.

**Legitimate interests:** For communication purposes and website security, where our legitimate business interests do not override your rights.

**Legal obligation:** Where we are required to process your data to comply with Colombian law, customs regulations, or anti-money laundering requirements.

**Consent:** Where you have explicitly given consent, which you may withdraw at any time.`,
  },
  {
    title: '4. Data Retention',
    content: `We retain your personal data only for as long as necessary for the purposes outlined in this policy:

- Contact form submissions: 2 years from the date of submission
- Business correspondence: 5 years in compliance with Colombian commercial record-keeping requirements
- Compliance and export documentation: 10 years as required by Colombian mineral export regulations

After these periods, your data is securely deleted or anonymised.`,
  },
  {
    title: '5. Data Security',
    content: `We take the security of your personal data seriously. We implement appropriate technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, or destruction.

These measures include secure HTTPS connections, access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '6. Cookies',
    content: `Our website uses minimal cookies necessary for basic functionality:

- **Essential cookies:** Required for the website to function correctly. These cannot be disabled.
- **Analytics cookies:** We use Google Analytics (via Google Tag Manager) to understand how visitors use our site. This data is anonymised and aggregated.

You can control cookies through your browser settings. Disabling cookies may affect website functionality.`,
  },
  {
    title: '7. Third-Party Services',
    content: `We use the following third-party services that may process your data:

- **Google Tag Manager / Google Analytics:** For website analytics (anonymised)
- **Hosting provider (Vercel):** For website hosting and delivery
- **Email service provider:** For processing contact form submissions

Each of these providers has their own privacy policies and data protection practices. We only work with providers who offer adequate data protection guarantees.`,
  },
  {
    title: '8. Your Rights',
    content: `You have the following rights regarding your personal data:

- **Right to access:** Request a copy of the personal data we hold about you
- **Right to rectification:** Request correction of inaccurate or incomplete data
- **Right to erasure:** Request deletion of your personal data, subject to legal obligations
- **Right to restrict processing:** Request that we limit how we use your data
- **Right to data portability:** Request your data in a portable format
- **Right to object:** Object to processing based on legitimate interests

To exercise any of these rights, contact us at ${SITE_CONFIG.email}. We will respond within 30 days.`,
  },
  {
    title: '9. International Transfers',
    content: `As a Colombian export company serving international clients, your data may be processed in countries outside Colombia. When this occurs, we ensure appropriate safeguards are in place, including standard contractual clauses or adequacy decisions, to protect your personal information in accordance with applicable data protection law.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will post the updated policy on this page with the revised date. For significant changes, we will provide notice via email where we hold your contact information.

We encourage you to review this policy periodically.`,
  },
  {
    title: '11. Contact Us',
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

**Comercializadora Fast Track Gold S.A.S.**
Palmira, Valle del Cauca, Colombia
Email: ${SITE_CONFIG.email}
Phone: ${SITE_CONFIG.phone}`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-bg pt-40 pb-24 lg:pb-32">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />

        <AnimatedSection className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Legal
          </p>
          <h1
            className="font-display font-semibold leading-[1.08] tracking-[-0.03em] mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)' }}
          >
            Privacy Policy
          </h1>
          <p className="text-muted mb-2">
            <strong className="text-text">Comercializadora Fast Track Gold S.A.S.</strong>
          </p>
          <p className="text-muted text-sm mb-12">
            Last updated: March 2024
          </p>

          <p className="text-muted leading-relaxed mb-12">
            This Privacy Policy explains how Fast Track Gold collects, uses, stores, and protects
            your personal information when you visit our website or interact with us. We are
            committed to protecting your privacy and handling your data with transparency and respect.
          </p>

          <div className="space-y-10">
            {sections.map(({ title, content }) => (
              <div key={title} className="border-t border-border pt-8">
                <h2 className="font-display font-semibold text-xl mb-4 text-text">{title}</h2>
                <div className="text-muted text-sm leading-relaxed space-y-3">
                  {content.split('\n\n').map((para, i) => (
                    <p key={i} dangerouslySetInnerHTML={{
                      __html: para
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text">$1</strong>')
                        .replace(/^- /gm, '• ')
                    }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
