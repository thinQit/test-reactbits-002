export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";
import { LetterGlitch } from "reactbits";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <LetterGlitch color="#7C3AED" />
        </div>
        <div className="relative z-10">
          <HeroAurora
            title="Built for deep work in a noisy world"
            subtitle="FocusFlow started as an internal tool to protect maker time while scaling a fast-moving team."
            primaryCta={{ label: "Meet the team", href: "#team" }}
            secondaryCta={{ label: "Contact", href: "/contact" }}
            imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576885/site-images/corporate/15465916.jpg"
            backgroundOverlayClassName="bg-black/40"
          />
        </div>
      </div>
      <ScrollReveal className="animate-fade-in-up py-20 md:py-28" id="team">
        <TestimonialsAnimated
          title="Team"
          subtitle="Small team, high craft, obsessive about focus."
          testimonials={[
            { quote: "Former PM obsessed with reducing context switching.", name: "Avery Kim", designation: "CEO & Product", src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg" },
            { quote: "Focused on reliability, privacy, and keyboard-first UX.", name: "Diego Martínez", designation: "CTO", src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg" },
            { quote: "Specializes in summarization and planning systems.", name: "Samira Patel", designation: "AI Engineer", src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg" },
          ]}
        />
      </ScrollReveal>
      <ScrollReveal className="animate-fade-in-up py-20 md:py-28 bg-muted/40">
        <CTAVortex
          title="Try FocusFlow and feel the difference"
          subtitle="A calmer plan and fewer interruptions—starting tomorrow."
          ctaLabel="Start free trial"
          ctaHref="/pricing"
          secondaryCtaLabel="Book a demo"
          secondaryCtaHref="/contact"
        />
      </ScrollReveal>
    </main>
  );
}
