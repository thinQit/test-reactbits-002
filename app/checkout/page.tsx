export const dynamic = 'force-dynamic';

import HeroGradientBlob from "@/components/HeroGradientBlob";
import CheckoutForm from "@/components/CheckoutForm";
import ScrollReveal from "@/components/ScrollReveal";
import { LetterGlitch } from "reactbits";

export default function CheckoutPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <LetterGlitch color="#7C3AED" />
        </div>
        <div className="relative z-10">
          <HeroGradientBlob
            title="Complete your subscription"
            subtitle="Secure checkout for FocusFlow plans. Start your trial instantly."
            primaryCta={{ label: "Continue", href: "#checkout" }}
            secondaryCta={{ label: "View pricing", href: "/pricing" }}
            imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576896/site-images/corporate/12911251.jpg"
            backgroundOverlayClassName="bg-black/40"
          />
        </div>
      </div>
      <ScrollReveal className="animate-fade-in-up py-20 md:py-28" id="checkout">
        <CheckoutForm
          headline="Checkout"
          subheadline="Choose a plan and enter billing details."
          plans={[
            { id: "starter", label: "Starter", price: "Free" },
            { id: "pro-monthly", label: "Pro (Monthly)", price: "$19/mo" },
            { id: "pro-annual", label: "Pro (Annual)", price: "$182/yr" },
            { id: "team-monthly", label: "Team (Monthly)", price: "$29/seat/mo" },
            { id: "team-annual", label: "Team (Annual)", price: "$278/seat/yr" },
          ]}
        />
      </ScrollReveal>
    </main>
  );
}
