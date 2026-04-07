'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  brandName?: string
  links?: NavItem[]
  ctaLabel?: string
  ctaHref?: string
  activePath?: string
}

export default function Navbar({
  brandName = 'FocusFlow',
  links = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  ctaLabel = 'Start Free',
  ctaHref = '#pricing',
  activePath = '#features',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-zinc-950">
          <Sparkles className="h-5 w-5 text-violet-600" />
          <span>{brandName}</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((item) => {
            const isActive = item.href === activePath
            return (
              <Link key={item.href} href={item.href} className="group relative text-sm font-medium text-zinc-700 transition hover:text-zinc-950">
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-violet-600 to-blue-600 transition-transform duration-300 group-hover:scale-x-100',
                    isActive && 'scale-x-100'
                  )}
                />
              </Link>
            )
          })}
          <Button asChild className="rounded-lg bg-zinc-950 text-white hover:bg-zinc-800">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t bg-white p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100">
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full rounded-lg bg-zinc-950 text-white hover:bg-zinc-800">
              <Link href={ctaHref} onClick={() => setOpen(false)}>
                {ctaLabel}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
