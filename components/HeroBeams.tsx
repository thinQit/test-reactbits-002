'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface HeroBeamsProps {
  title?: string
  subtitle?: string
  imageSrc?: string
}

export default function HeroBeams({
  title = 'Talk to the FocusFlow team',
  subtitle = 'Questions about rollout, security, or enterprise plans? We respond within one business day.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577715/site-images/hero-backgrounds/1631677.jpg',
}: Partial<HeroBeamsProps>) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(124,58,237,0.12),transparent,rgba(37,99,235,0.12))]" />
      <div className="relative mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">{title}</h2>
          <p className="mt-5 text-zinc-600">{subtitle}</p>
          <Button className="mt-8 rounded-lg bg-zinc-950 text-white hover:bg-zinc-800">Contact Sales</Button>
        </div>
        <div className="overflow-hidden rounded-xl border bg-white/70 p-2 shadow-sm">
          <Image src={imageSrc} alt="Contact support team" width={1200} height={800} className="rounded-lg object-cover" unoptimized />
        </div>
      </div>
    </section>
  )
}
