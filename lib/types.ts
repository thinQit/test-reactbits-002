export interface NavItem {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  bullets?: string[];
  icon?: string;
}

export interface PricingPlan {
  name: string;
  priceMonthly: number | null;
  priceAnnual: number | null;
  priceNote?: string;
  description: string;
  features: string[];
  cta: Cta;
  highlighted?: boolean;
  badge?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  rating?: number;
}

export interface ContactSubmission {
  name: string;
  email: string;
  topic: string;
  company?: string;
  message: string;
}

export interface CheckoutSubmission {
  planId: string;
  email: string;
  fullName: string;
  company?: string;
  country: string;
}
