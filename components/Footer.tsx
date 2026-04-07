"use client";

import Link from 'next/link'
import { Sparkles } from 'lucide-react'

interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  brandName?: string
  productLinks?: FooterLink[]
  companyLinks?: FooterLink[]
  legalLinks?: FooterLink[]
  address?: string
  supportEmail?: string
}

export default function Footer({
  brandName = 'FocusFlow',
  productLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#integrations' },
  ],
  companyLinks = [
    { label: 'About', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  legalLinks = [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Security', href: '#' },
  ],
  address = 'FocusFlow Inc, 88 Market Street, San Francisco, CA 94105',
  supportEmail = 'support@focusflow.ai',
}: Partial<FooterProps>) {
  return (
    <footer className="border-t bg-zinc-50">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-4 py-16 md:grid-cols-5 md:px-6">
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-2 font-semibold text-zinc-950">
            <Sparkles className="h-5 w-5 text-violet-600" />
            {brandName}
          </div>
          <p className="text-sm text-zinc-600">AI productivity workspace for focused teams.</p>
          <p className="mt-4 text-sm text-zinc-600">{address}</p>
          <a href={'mailto:' + supportEmail} className="mt-2 inline-block text-sm text-blue-600 hover:underline">
            {supportEmail}
          </a>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-zinc-900">Product</h4>
          <ul className="space-y-2">
            {productLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-zinc-600 hover:text-zinc-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-zinc-900">Company</h4>
          <ul className="space-y-2">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-zinc-600 hover:text-zinc-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-zinc-900">Legal</h4>
          <ul className="space-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-zinc-600 hover:text-zinc-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
