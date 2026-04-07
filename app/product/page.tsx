export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";
import { LetterGlitch } from "reactbits";

export default function ProductPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <LetterGlitch color="#7C3AED" />
        </div>
        <div className="relative z-10">
          <HeroSpotlight
            title="Your workflow, organized into a single focus lane"
            subtitle="See how FocusFlow plans your day, protects deep work, and turns conversations into action items."
            primaryCta={{ label: "Start free trial", href: "/pricing" }}
            secondaryCta={{ label: "See integrations", href: "/integrations" }}
            imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576887/site-images/corporate/16553906.jpg"
            backgroundOverlayClassName="bg-black/40"
          />
        </div>
      </div>
      <ScrollReveal className="animate-fade-in-up py-20 md:py-28">
        <FeaturesCards3D
          title="Built for makers who hate busywork"
          subtitle="Fast interactions, keyboard-first controls, and clear defaults."
          features={[
            { icon: "Keyboard", title: "Keyboard-first planning", description: "Add tasks, estimate effort, and reorder priorities fast." },
            { icon: "Calendar", title: "Context-aware focus blocks", description: "Auto-schedules deep work around meetings and energy patterns." },
            { icon: "CheckSquare", title: "Action items that land", description: "Summaries become tasks with owners and due dates automatically." },
          ]}
        />
      </ScrollReveal>
      <ScrollReveal className="animate-fade-in-up py-20 md:py-28 bg-muted/40">
        <CTAVortex
          title="Ready to try a calmer day?"
          subtitle="Start free in minutes—connect your calendar and one task tool."
          ctaLabel="Start free trial"
          ctaHref="/pricing"
          secondaryCtaLabel="Book a demo"
          secondaryCtaHref="/contact"
        />
      </ScrollReveal>
    </main>
  );
}
