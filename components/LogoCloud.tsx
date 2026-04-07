'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { cn } from '@/lib/utils'

interface LogoCloudProps {
  title?: string
  logos?: { name: string }[]
}

export default function LogoCloud({
  title = 'Trusted by modern product and engineering teams',
  logos = [
    { name: 'NovaLabs' },
    { name: 'PixelForge' },
    { name: 'CloudMesa' },
    { name: 'Sprintly' },
    { name: 'StackPilot' },
    { name: 'OrbitOS' },
  ],
}: Partial<LogoCloudProps>) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <p className="text-center text-sm text-zinc-500">{title}</p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {logos.map((logo) => (
            <ScrollReveal key={logo.name}>
              <div className={cn('flex h-16 items-center justify-center rounded-xl border bg-white/70 text-zinc-400 grayscale transition hover:text-zinc-800 hover:grayscale-0')}>
                <span className="text-sm font-semibold">{logo.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
