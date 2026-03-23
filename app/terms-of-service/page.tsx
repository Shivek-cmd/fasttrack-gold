import type { Metadata } from 'next'
import Breadcrumb from '@/components/ui/Breadcrumb'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Fast Track Gold — the legal terms governing use of our website and services.',
  alternates: { canonical: `${SITE_CONFIG.url}/terms-of-service` },
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the Fast Track Gold website (fasttrackgold.co) and any services offered by Comercializadora Fast Track Gold S.A.S., you agree to be bound by these Terms of Service and our Privacy Policy.

If you do not agree to these terms, please do not use our website or services. We reserve the right to update these terms at any time, and continued use of our services following any changes constitutes your acceptance of the revised terms.`,
  },
  {
    title: '2. Services Description',
    content: `Comercializadora Fast Track Gold S.A.S. is a wholesale precious minerals exporter operating under Colombian law. Our services include:

- Facilitation of gold and emerald export transactions between certified Colombian suppliers and international buyers
- Compliance verification of mineral provenance documentation (Rucom, Certificate of Origin, RUT)
- Coordination of customs and international logistics
- Regulatory consulting for mineral export procedures

All services are subject to Colombian law and the regulations of the Agencia Nacional de Minería (ANM) and DIAN.`,
  },
  {
    title: '3. Eligibility',
    content: `To engage our export services, you must:

- Be a legal entity or individual of legal age in your jurisdiction
- For suppliers: hold valid Rucom registration, Certificate of Origin, and updated RUT
- For buyers: be a legitimate business entity capable of lawfully importing precious minerals in your jurisdiction
- Not be subject to any sanctions, embargo, or legal prohibition that would prevent the lawful import or export of precious minerals

We reserve the right to refuse service to any party that does not meet our compliance requirements.`,
  },
  {
    title: '4. Compliance Obligations',
    content: `All parties engaging our services agree to:

**Suppliers:** Provide complete, accurate, and current legal documentation. Any misrepresentation of mineral provenance, mining titles, or identity is grounds for immediate termination and may be reported to Colombian authorities.

**Buyers:** Comply with all import regulations in your jurisdiction. Fast Track Gold is not responsible for import duties, taxes, or regulatory requirements in the destination country.

**All parties:** Cooperate fully with our Compliance Officer's verification process. Withholding or falsifying documents is a material breach of these terms.`,
  },
  {
    title: '5. Pricing and Payment',
    content: `Prices for our services are agreed in writing prior to each transaction. All prices are quoted in USD unless otherwise agreed.

Payment terms are as agreed in the specific service agreement for each transaction. Fast Track Gold does not provide credit terms without a signed credit agreement.

We reserve the right to change our fee structure with 30 days' written notice for ongoing arrangements.`,
  },
  {
    title: '6. Intellectual Property',
    content: `All content on this website — including text, images, the Fast Track Gold logo, design elements, and the hummingbird trademark — is the exclusive property of Comercializadora Fast Track Gold S.A.S. and is protected by Colombian and international intellectual property law.

You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `Fast Track Gold acts as an intermediary and logistics coordinator. We are not responsible for:

- The quality or characteristics of minerals beyond our published compliance verification scope
- Delays, losses, or damages caused by customs authorities, shipping carriers, or force majeure events
- Import restrictions or regulatory requirements in the buyer's jurisdiction
- Fluctuations in precious metal spot prices between order confirmation and delivery

Our total liability for any claim arising from our services shall not exceed the fee paid for the specific service giving rise to the claim.`,
  },
  {
    title: '8. Prohibited Uses',
    content: `You agree not to use our website or services to:

- Engage in money laundering, financing of terrorism, or any illegal activity
- Export minerals from illegal, unlicensed, or conflict-affected mining operations
- Provide false or misleading documentation
- Circumvent Colombian mineral export regulations
- Infringe the intellectual property rights of Fast Track Gold or any third party
- Transmit malicious code, spam, or engage in any activity that disrupts our website

Violation of these prohibitions may result in immediate termination of services and referral to Colombian law enforcement authorities.`,
  },
  {
    title: '9. Governing Law and Jurisdiction',
    content: `These Terms of Service are governed by the laws of the Republic of Colombia. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Palmira, Valle del Cauca, Colombia.

For international clients, we are willing to agree to international arbitration under the rules of the International Chamber of Commerce (ICC) as an alternative to Colombian court proceedings, where mutually agreed in writing.`,
  },
  {
    title: '10. Termination',
    content: `We reserve the right to terminate or suspend access to our services at any time, without notice, for conduct that we determine:

- Violates these Terms of Service
- Is harmful to other users, us, or third parties
- Breaches Colombian law or international sanctions

You may terminate your relationship with us at any time by ceasing use of our services and notifying us in writing. Termination does not affect obligations incurred prior to termination.`,
  },
  {
    title: '11. Contact',
    content: `For questions about these Terms of Service, please contact:

**Comercializadora Fast Track Gold S.A.S.**
Palmira, Valle del Cauca, Colombia
Email: ${SITE_CONFIG.email}
Phone: ${SITE_CONFIG.phone}`,
  },
]

export default function TermsOfServicePage() {
  return (
    <section className="bg-bg pt-40 pb-24 lg:pb-32">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Terms of Service', href: '/terms-of-service' }]} />

        <AnimatedSection className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Legal
          </p>
          <h1
            className="font-display font-semibold leading-[1.08] tracking-[-0.03em] mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)' }}
          >
            Terms of Service
          </h1>
          <p className="text-muted mb-2">
            <strong className="text-text">Comercializadora Fast Track Gold S.A.S.</strong>
          </p>
          <p className="text-muted text-sm mb-12">
            Last updated: March 2024
          </p>

          <p className="text-muted leading-relaxed mb-12">
            These Terms of Service govern your use of the Fast Track Gold website and services.
            Please read them carefully before engaging with us. By using our services, you confirm
            that you have read, understood, and agreed to these terms.
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
