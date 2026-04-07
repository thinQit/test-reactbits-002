export const dynamic = 'force-dynamic';

import HeroGradientBlob from "@/components/HeroGradientBlob";
import LogoCloud from "@/components/LogoCloud";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import PricingTable from "@/components/PricingTable";
import IntegrationsGrid from "@/components/IntegrationsGrid";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import FAQAccordion from "@/components/FAQAccordion";
import CTASparkles from "@/components/CTASparkles";
import ScrollReveal from "@/components/ScrollReveal";
import SectionContainer from "@/components/SectionContainer";
import { LetterGlitch } from "reactbits";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroGradientBlob
          title="Focus deeper. Ship faster. Let AI run your day."
          subtitle="FocusFlow turns tasks, meetings, and messages into a single prioritized plan—then nudges you at the right moment to stay in flow."
          primaryCta={{ label: "Start free (14 days)", href: "/pricing" }}
          secondaryCta={{ label: "Book a live demo", href: "/contact" }}
          badge="New: Calendar-aware focus blocks"
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576907/site-images/corporate/1251842.jpg"
          backgroundOverlayClassName="bg-black/40"
          className="relative min-h-[80vh] overflow-hidden"
          backgroundEffect={
            <div className="absolute inset-0 z-0 overflow-hidden">
              <LetterGlitch color="#7C3AED" />
            </div>
          }
        />
      </div>

      <ScrollReveal className="animate-fade-in-up py-20 md:py-28 bg-muted/40">
        <SectionContainer>
          <LogoCloud
            headline="Teams use FocusFlow to protect maker time"
            subheadline="From solo founders to cross-functional product orgs."
            logos={[
              { name: "Northpeak Labs", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576864/site-images/corporate/1367269.jpg" },
              { name: "Orbit Analytics", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576867/site-images/corporate/1181619.jpg" },
              { name: "Juniper Studio", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576895/site-images/corporate/1398761.jpg" },
              { name: "HelioWorks", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576892/site-images/corporate/1181305.jpg" },
              { name: "KitePay", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576887/site-images/corporate/16553906.jpg" },
              { name: "Vertex Mobile", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576903/site-images/corporate/1313534.jpg" },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up py-20 md:py-28">
        <SectionContainer>
          <FeaturesCards3D
            badge="AI-Powered Workflow"
            title="A focus system that adapts to your workload"
            subtitle="FocusFlow combines planning, execution, and reflection—so you can do fewer things, better."
            features={[
              { icon: "Sparkles", title: "AI Daily Plan", description: "Connect tasks + calendar and get a realistic plan with time estimates and priorities." },
              { icon: "Timer", title: "Flow Sessions", description: "Start distraction-free sessions with timer, nudges, and deep work cycles." },
              { icon: "FileText", title: "Meeting & Doc Summaries", description: "Turn notes into crisp action items with owners and due dates." },
              { icon: "BarChart3", title: "Focus Analytics", description: "Track maker time, distraction sources, and weekly workload trends." },
              { icon: "Bell", title: "Smart Notifications", description: "Get fewer pings with context-aware reminders and deadline alerts." },
              { icon: "Users", title: "Team Focus", description: "Align goals and async updates without constant status meetings." },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up py-20 md:py-28 bg-muted/40">
        <SectionContainer>
          <PricingTable
            headline="Pricing that scales from solo to teams"
            subheadline="Start free for 14 days. Cancel anytime. No hidden fees."
            tiers={[
              { name: "Starter", price: "$0", period: "forever", description: "For trying FocusFlow on your own workflow.", features: ["AI Daily Plan (limited)", "3 Flow Sessions/day", "Basic summaries (5/week)"], ctaLabel: "Get Starter", ctaHref: "/checkout?plan=starter" },
              { name: "Pro", price: "$19", period: "month", description: "For professionals who want consistent deep work.", features: ["Unlimited AI Daily Plans", "Unlimited Flow Sessions", "Unlimited summaries", "All integrations"], ctaLabel: "Start Pro trial", ctaHref: "/checkout?plan=pro-monthly", highlighted: true },
              { name: "Team", price: "$29", period: "seat/month", description: "For teams that want alignment without meetings.", features: ["Everything in Pro", "Team goals + outcomes", "Async check-ins", "Admin controls"], ctaLabel: "Start Team trial", ctaHref: "/checkout?plan=team-monthly" },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up py-20 md:py-28">
        <SectionContainer>
          <IntegrationsGrid
            headline="Connect the tools you already use"
            subheadline="FocusFlow fits into your stack—tasks in, clarity out."
            groups={[
              {
                group: "Calendar",
                items: [
                  { name: "Google Calendar", status: "Available", description: "Auto-block focus time around meetings." },
                  { name: "Microsoft Outlook", status: "Available", description: "Sync events and protect deep work windows." },
                ],
              },
              {
                group: "Tasks",
                items: [
                  { name: "Todoist", status: "Available", description: "Turn tasks into a realistic daily plan." },
                  { name: "Linear", status: "Available", description: "Pull issues and estimate effort for sprints." },
                ],
              },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up py-20 md:py-28 bg-muted/40">
        <SectionContainer>
          <TestimonialsAnimated
            title="Real focus, real outcomes"
            subtitle="People use FocusFlow to reduce context switching and finish meaningful work."
            testimonials={[
              { quote: "FocusFlow rebuilt my day. My calendar finally matches my priorities.", name: "Maya Chen", designation: "Product Manager, Orbit Analytics", src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg" },
              { quote: "We cut status meetings by half while improving alignment.", name: "Evan Brooks", designation: "Engineering Lead, HelioWorks", src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg" },
              { quote: "Meeting summaries turn into tasks before I close the call.", name: "Priya Nair", designation: "Founder, Juniper Studio", src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg" },
            ]}
            autoplay
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up py-20 md:py-28">
        <SectionContainer>
          <FAQAccordion
            headline="Questions, answered"
            subheadline="Everything you need to know before starting your trial."
            items={[
              { question: "Does FocusFlow replace my task app?", answer: "No—FocusFlow connects to your existing tools and turns tasks into a prioritized plan." },
              { question: "How does the AI decide what to do next?", answer: "It evaluates deadlines, effort, meetings, and your stated priorities." },
              { question: "Can I use FocusFlow without integrations?", answer: "Yes. Manual tasks and Flow Sessions work immediately." },
              { question: "What about privacy and security?", answer: "We use least-privilege OAuth scopes and encryption in transit and at rest." },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up py-20 md:py-28 bg-muted/40">
        <SectionContainer>
          <CTASparkles
            title="Get your next 10 hours back—this week"
            subtitle="Start a 14-day trial and see a calmer, clearer plan by tomorrow morning."
            primaryCta={{ label: "Start free trial", href: "/checkout?plan=pro-monthly" }}
            secondaryCta={{ label: "Book a demo", href: "/contact" }}
          />
        </SectionContainer>
      </ScrollReveal>
    </main>
  );
}
