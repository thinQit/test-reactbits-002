export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { LetterGlitch } from "reactbits";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <LetterGlitch color="#7C3AED" />
        </div>
        <div className="relative z-10">
          <HeroBeams
            title="Talk to FocusFlow"
            subtitle="Questions about pricing, security, or integrations? We’ll respond within 1 business day."
            primaryCta={{ label: "Email support", href: "mailto:support@focusflow.ai" }}
            secondaryCta={{ label: "View security", href: "/security" }}
            imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576897/site-images/corporate/10041267.jpg"
            backgroundOverlayClassName="bg-black/40"
          />
        </div>
      </div>
      <ScrollReveal className="animate-fade-in-up py-20 md:py-28">
        <ContactForm
          headline="Send a message"
          subheadline="Tell us what you’re trying to improve—planning, deep work, or team alignment."
          contactInfo={[
            { icon: "Mail", label: "Support", value: "support@focusflow.ai" },
            { icon: "Briefcase", label: "Sales", value: "sales@focusflow.ai" },
            { icon: "MapPin", label: "Address", value: "548 Market St, Suite 94123, San Francisco, CA 94104" },
          ]}
        />
      </ScrollReveal>
    </main>
  );
}
