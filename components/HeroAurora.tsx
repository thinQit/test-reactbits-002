'use client'

import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import Image from 'next/image'

interface HeroAuroraProps {
  title?: string
  subtitle?: string
  imageSrc?: string
}

export default function HeroAurora({
  title = 'Built by people who value deep work',
  subtitle = 'FocusFlow helps modern teams reduce context switching and reclaim time for meaningful output.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577698/site-images/hero-backgrounds/13216333.jpg',
}: Partial<HeroAuroraProps>) {
  return (
    <section className="relative py-24 md:py-32">
      <AuroraBackground>
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">{title}</h2>
            <p className="mt-5 text-zinc-700">{subtitle}</p>
          </div>
          <div className="overflow-hidden rounded-xl border bg-white/80 p-2 shadow-sm">
            <Image src={imageSrc} alt="Team collaboration" width={1200} height={800} className="rounded-lg object-cover" unoptimized />
          </div>
        </div>
      </AuroraBackground>
    </section>
  )
}
