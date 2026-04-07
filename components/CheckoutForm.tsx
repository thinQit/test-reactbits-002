'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface CheckoutFormProps {
  title?: string
  plans?: { id: string; name: string; price: string }[]
}

export default function CheckoutForm({
  title = 'Checkout',
  plans = [
    { id: 'starter', name: 'Starter', price: '$19/mo' },
    { id: 'pro', name: 'Pro', price: '$49/mo' },
    { id: 'scale', name: 'Scale', price: '$99/mo' },
  ],
}: Partial<CheckoutFormProps>) {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]?.id || 'pro')

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Card className="rounded-xl border bg-white/80 p-6 shadow-sm">
          <h3 className="text-2xl font-semibold text-zinc-950">{title}</h3>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {plans.map((plan) => (
              <button
                key={plan.id}
                type="button"
                onClick={() => setSelectedPlan(plan.id)}
                className={'rounded-lg border p-3 text-left transition ' + (selectedPlan === plan.id ? 'border-violet-600 bg-violet-50' : 'border-zinc-200')}
              >
                <p className="font-medium text-zinc-900">{plan.name}</p>
                <p className="text-sm text-zinc-600">{plan.price}</p>
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Input placeholder="Full name" />
            <Input type="email" placeholder="Work email" />
            <Input placeholder="Company" />
            <Input placeholder="Card number (mock)" />
          </div>

          <Button className="mt-6 w-full rounded-lg bg-zinc-950 text-white hover:bg-zinc-800">Complete Purchase</Button>
        </Card>
      </div>
    </section>
  )
}
