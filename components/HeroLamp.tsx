'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface HeroLampProps {
  title?: string
  subtitle?: string
  imageSrc?: string
}

export default function HeroLamp({
  title = 'Connect your whole workflow',
  subtitle = 'Bring Slack, Notion, GitHub, and Calendar into one AI-native command center.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577705/site-images/hero-backgrounds/12981881.jpg',
}: Partial<HeroLampProps>) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">{title}</h2>
          <p className="mt-5 text-zinc-600">{subtitle}</p>
          <Button className="mt-8 rounded-lg bg-zinc-950 text-white hover:bg-zinc-800">Explore Integrations</Button>
        </div>
        <div className="overflow-hidden rounded-xl border bg-white/70 p-2 shadow-sm">
          <Image src={imageSrc} alt="Integrations overview" width={1200} height={800} className="rounded-lg object-cover" unoptimized />
        </div>
      </div>
    </section>
  )
}
