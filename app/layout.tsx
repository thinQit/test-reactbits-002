import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "FocusFlow — AI Productivity Tool for Deep Work",
  description:
    "FocusFlow turns tasks, meetings, and messages into a prioritized daily plan. Protect focus time, summarize meetings, and ship faster with AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground`}>
        <Navbar
          logo="FocusFlow"
          navItems={[
            { label: "Product", href: "/product" },
            { label: "Integrations", href: "/integrations" },
            { label: "Pricing", href: "/pricing" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Start free trial"
          ctaHref="/pricing"
        />
        {children}
        <Footer
          brand="FocusFlow"
          description="Turn scattered work into finished work—powered by AI focus."
          columns={[
            {
              title: "Product",
              links: [
                { label: "Overview", href: "/product" },
                { label: "Integrations", href: "/integrations" },
                { label: "Pricing", href: "/pricing" },
                { label: "Changelog", href: "/changelog" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Customers", href: "/customers" },
                { label: "Careers", href: "/careers" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
                { label: "Security", href: "/security" },
              ],
            },
          ]}
          copyright="© 2026 FocusFlow. All rights reserved."
        />
      </body>
    </html>
  );
}
