export const dynamic = 'force-dynamic';

import HeroLamp from "@/components/HeroLamp";
import IntegrationsGrid from "@/components/IntegrationsGrid";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";
import { LetterGlitch } from "reactbits";

export default function IntegrationsPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <LetterGlitch color="#7C3AED" />
        </div>
        <div className="relative z-10">
          <HeroLamp
            title="Integrations that keep your system intact"
            subtitle="Connect calendars, tasks, docs, and chat—FocusFlow becomes the layer that turns inputs into a plan."
            primaryCta={{ label: "Start free trial", href: "/pricing" }}
            secondaryCta={{ label: "Request an integration", href: "/contact?topic=integrations" }}
            imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576893/site-images/corporate/10041276.jpg"
            backgroundOverlayClassName="bg-black/40"
          />
        </div>
      </div>
      <ScrollReveal className="animate-fade-in-up py-20 md:py-28">
        <IntegrationsGrid headline="Supported integrations" subheadline="Fast setup, least-privilege access, revoke anytime." />
      </ScrollReveal>
      <ScrollReveal className="animate-fade-in-up py-20 md:py-28 bg-muted/40">
        <CTAVortex
          title="Want FocusFlow to connect to your stack?"
          subtitle="Tell us what you use and we’ll prioritize it."
          ctaLabel="Request an integration"
          ctaHref="/contact?topic=integrations"
          secondaryCtaLabel="Start trial"
          secondaryCtaHref="/pricing"
        />
      </ScrollReveal>
    </main>
  );
}
