import { CapabilityRail } from "@/components/capability-rail";
import { CaseStudyGrid } from "@/components/case-study-grid";
import { CtaFooter } from "@/components/cta-footer";
import { FaqSection } from "@/components/faq-section";
import { FoundersSection } from "@/components/founders-section";
import { HeroSection } from "@/components/hero-section";
import { MarqueeStrip } from "@/components/marquee-strip";
import { ProofSection } from "@/components/proof-section";
import { RecognitionGrid } from "@/components/recognition-grid";
import { SecuritySection } from "@/components/security-section";
import { faqs } from "@/data/site-content";

export default function HomePage() {
  const siteUrl = "https://stablebuild.tech";
  const siteImage = `${siteUrl}/opengraph-image`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "StableBuild",
    url: siteUrl,
    logo: `${siteUrl}/favicon/logo-light.svg`,
    image: siteImage,
    description:
      "Security-first full-stack systems for AI, product, and protocol teams.",
    sameAs: [
      "https://github.com/Suhel-Kap",
      "https://github.com/JustUzair",
      "https://linkedin.com/in/suhel-kapadia",
      "https://linkedin.com/in/0xJustUzair",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "StableBuild",
    url: siteUrl,
    description:
      "Security-first full-stack systems for AI, product, and protocol teams.",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "en-US",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    name: "StableBuild",
    url: siteUrl,
    description:
      "Founder-led full-stack delivery for AI systems, product platforms, protocol engineering, and security-first builds.",
    areaServed: "Worldwide",
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    serviceType: [
      "Full-stack development",
      "AI systems engineering",
      "Protocol engineering",
      "Smart contract security-first development",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSection />
      <MarqueeStrip />
      <ProofSection />
      <CaseStudyGrid />
      <CapabilityRail />
      <SecuritySection />
      <RecognitionGrid />
      <FoundersSection />
      <FaqSection />
      <CtaFooter />
    </main>
  );
}
