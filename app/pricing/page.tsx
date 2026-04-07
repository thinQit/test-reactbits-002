export const dynamic = 'force-dynamic';

import HeroWaves from "@/components/HeroWaves";
import PricingTable from "@/components/PricingTable";
import FAQAccordion from "@/components/FAQAccordion";
import ScrollReveal from "@/components/ScrollReveal";
import { LetterGlitch } from "reactbits";

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <LetterGlitch color="#7C3AED" />
        </div>
        <div className="relative z-10">
          <HeroWaves
            title="Choose your focus level"
            subtitle="Start with Starter, upgrade when you feel the difference. Annual billing saves 20%."
            primaryCta={{ label: "Start free trial", href: "/checkout?plan=pro-monthly" }}
            secondaryCta={{ label: "Compare plans", href: "#plans" }}
            imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576902/site-images/corporate/15371559.jpg"
            backgroundOverlayClassName="bg-black/40"
          />
        </div>
      </div>
      <ScrollReveal className="animate-fade-in-up py-20 md:py-28" id="plans">
        <PricingTable
          headline="Plans"
          subheadline="Simple pricing with powerful AI features."
          tiers={[
            { name: "Starter", price: "$0", period: "forever", description: "Try the core workflow.", features: ["AI Daily Plan (limited)", "3 Flow Sessions/day", "Basic summaries (5/week)"], ctaLabel: "Get Starter", ctaHref: "/checkout?plan=starter" },
            { name: "Pro", price: "$182", period: "year", description: "Deep work + automation.", features: ["Unlimited AI Daily Plans", "Unlimited Flow Sessions", "Unlimited summaries", "All integrations", "Weekly insights"], ctaLabel: "Start Pro trial", ctaHref: "/checkout?plan=pro-annual", highlighted: true },
            { name: "Team", price: "$278", period: "seat/year", description: "Alignment without meetings.", features: ["Team goals + outcomes", "Async check-ins", "Admin controls"], ctaLabel: "Start Team trial", ctaHref: "/checkout?plan=team-annual" },
          ]}
        />
      </ScrollReveal>
      <ScrollReveal className="animate-fade-in-up py-20 md:py-28 bg-muted/40">
        <FAQAccordion
          headline="Pricing FAQ"
          subheadline="Common questions about billing and trials."
          items={[
            { question: "Do I need a credit card to start?", answer: "No. Start a 14-day trial without a credit card." },
            { question: "Can I switch plans later?", answer: "Yes, upgrade or downgrade anytime with prorated billing." },
            { question: "Do you offer discounts?", answer: "Yes, we support nonprofit and education discounts." },
          ]}
        />
      </ScrollReveal>
    </main>
  );
}
