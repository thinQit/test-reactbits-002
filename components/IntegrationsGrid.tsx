"use client";

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Integration {
  name: string
  category: string
  status: 'Available' | 'Beta' | 'Coming soon'
}

interface IntegrationsGridProps {
  integrations?: Integration[]
}

export default function IntegrationsGrid({
  integrations = [
    { name: 'Slack', category: 'Communication', status: 'Available' },
    { name: 'Notion', category: 'Knowledge', status: 'Available' },
    { name: 'GitHub', category: 'Engineering', status: 'Available' },
    { name: 'Google Calendar', category: 'Scheduling', status: 'Beta' },
    { name: 'Linear', category: 'Product', status: 'Beta' },
    { name: 'Jira', category: 'Product', status: 'Coming soon' },
  ],
}: Partial<IntegrationsGridProps>) {
  return (
    <section id="integrations" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h3 className="text-3xl font-semibold tracking-tight text-zinc-950">Integrations</h3>
        <p className="mt-3 text-zinc-600">Connect FocusFlow to the tools your team already uses.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {integrations.map((item) => (
            <Card key={item.name} className="rounded-xl border bg-white/70 p-5 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-zinc-900">{item.name}</p>
                  <p className="text-sm text-zinc-500">{item.category}</p>
                </div>
                <span
                  className={cn(
                    'rounded-full px-3 py-1 text-xs font-medium',
                    item.status === 'Available' && 'bg-emerald-100 text-emerald-700',
                    item.status === 'Beta' && 'bg-amber-100 text-amber-700',
                    item.status === 'Coming soon' && 'bg-zinc-100 text-zinc-700'
                  )}
                >
                  {item.status}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
