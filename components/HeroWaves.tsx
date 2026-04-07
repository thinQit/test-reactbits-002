'use client'

import { BackgroundGradientAnimation } from '@/components/ui/backgrounds/background-gradient-animation'
import { Button } from '@/components/ui/button'

interface HeroWavesProps {
  title?: string
  subtitle?: string
  imageSrc?: string
}

export default function HeroWaves({
  title = 'Simple pricing for focused teams',
  subtitle = 'Choose a plan that scales from solo makers to high-output product teams.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577712/site-images/hero-backgrounds/12981878.jpg',
}: Partial<HeroWavesProps>) {
  return (
    <section className="relative py-24 md:py-32">
      <BackgroundGradientAnimation>
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center md:px-6">
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-100">{subtitle}</p>
          <Button className="mt-8 rounded-lg bg-white text-zinc-900 hover:bg-zinc-100">View Pricing</Button>
        </div>
      </BackgroundGradientAnimation>
    </section>
  )
}
