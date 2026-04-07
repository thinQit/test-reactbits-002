'use client'

import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CTASparklesProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  secondaryLabel?: string
  imageSrc?: string
}

export default function CTASparkles({
  title = 'Ready to reclaim your focus?',
  subtitle = 'Join teams using FocusFlow to cut meetings, reduce context switching, and ship with confidence.',
  primaryLabel = 'Start Free Trial',
  secondaryLabel = 'Talk to Sales',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577698/site-images/hero-backgrounds/13551579.jpg',
}: Partial<CTASparklesProps>) {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl border bg-zinc-950 p-8 text-white md:p-12">
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              AI-powered productivity
            </div>
            <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h3>
            <p className="mt-4 max-w-2xl text-zinc-200">{subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="rounded-lg bg-white text-zinc-950 hover:bg-zinc-100">{primaryLabel}</Button>
              <Button variant="outline" className="rounded-lg border-white/30 bg-white/5 text-white hover:bg-white/10">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
