'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroSpotlightProps {
  title?: string
  subtitle?: string
  imageSrc?: string
  primaryCta?: string
  secondaryCta?: string
}

export default function HeroSpotlight({
  title = 'Focus deeply. Ship faster.',
  subtitle = 'FocusFlow combines AI planning, deep-work timers, and team context so your week stays calm and productive.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577697/site-images/hero-backgrounds/1242348.jpg',
  primaryCta = 'Start Free',
  secondaryCta = 'Book Demo',
}: Partial<HeroSpotlightProps>) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_55%)]" />
      <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">{title}</h1>
          <p className="mt-5 text-zinc-600">{subtitle}</p>
          <div className="mt-8 flex gap-3">
            <Button className="rounded-lg bg-zinc-950 text-white hover:bg-zinc-800">{primaryCta}</Button>
            <Button variant="outline" className="rounded-lg">
              {secondaryCta}
            </Button>
          </div>
        </div>
        <div className={cn('relative overflow-hidden rounded-xl border bg-white/70 p-2 shadow-sm')}>
          <Image src={imageSrc} alt="FocusFlow dashboard preview" width={1200} height={800} className="h-full w-full rounded-lg object-cover" unoptimized />
        </div>
      </div>
    </section>
  )
}
