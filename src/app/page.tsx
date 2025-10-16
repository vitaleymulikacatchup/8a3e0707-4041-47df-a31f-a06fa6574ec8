"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TextAbout from '@/components/sections/about/TextAbout';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "High-End Gaming PC Interior with Colorful RGB Lights" },
  { "id": "features-img-1", "url": "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a computer screen displaying programming code in a dark environment."},
  { "id": "team-photo", "url": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Overhead view of a diverse team in a business meeting using laptops and tablets."}
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="YourSaaS"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Innovate with Our SaaS"
            description="Transform your business with our cutting-edge solutions."
            tag="Get Started"
            buttons={[
              { text: "Learn More", href: "features" },
              { text: "Try Free", href: "https://example.com" },
            ]}
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url}
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[
              { title: "Streamlined Operations", description: "Enhance productivity with user-friendly interfaces.", imageSrc: assetMap.find(a => a.id === 'features-img-1')?.url },
              { title: "Scalable Solutions", description: "Grow your business with flexible plans.", button: { text: 'Learn More', href: 'https://example.com' } },
              { title: "Custom Integrations", description: "Seamlessly integrate with existing systems." }
            ]}
            title="Core Features"
            description="Explore the powerful features of our platform."
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="At SaaS Co, we empower businesses with innovative tools to excel in the digital age."
            buttons={[
              { text: "Our Story", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardOne
            title="Discover Our Plans"
            description="Find the perfect package tailored to your needs."
            plans={[
              { id: "basic", price: "$29/month", subtitle: "Ideal for small teams", features: ["10 projects", "1TB storage", "Email support"], badge: "Popular", badgeIcon: "Zap" },
              { id: "enterprise", price: "$99/month", subtitle: "For larger organizations", features: ["Unlimited projects", "Priority support", "Custom integrations"], badge: "Best Value", badgeIcon: "Star" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Contact Us"
            title="Stay Connected"
            description="Join our community and stay updated with our latest features and offers."
            inputPlaceholder="Enter your email"
            buttonText="Subscribe"
            termsText="We respect your privacy. Unsubscribe at any time."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Product", items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }, { label: "FAQs", href: "faq" }] },
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Careers", href: "careers" }, { label: "Blog", href: "blog" }] },
              { title: "Legal", items: [{ label: "Privacy Policy", href: "privacy" }, { label: "Terms of Service", href: "terms" }] }
            ]}
            copyrightText="© 2025 | YourSaaS"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}