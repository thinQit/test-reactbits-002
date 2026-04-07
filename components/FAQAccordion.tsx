'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items?: FAQItem[]
  supportEmail?: string
}

export default function FAQAccordion({
  items = [
    { question: 'Can I try FocusFlow for free?', answer: 'Yes, every plan includes a 14-day free trial with full access.' },
    { question: 'Do you offer SSO?', answer: 'SSO is available on the Scale plan with SAML and SCIM support.' },
    { question: 'Is my data private?', answer: 'Yes. Data is encrypted in transit and at rest, with strict access controls.' },
  ],
  supportEmail = 'support@focusflow.ai',
}: Partial<FAQAccordionProps>) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h3 className="text-center text-3xl font-semibold tracking-tight text-zinc-950">Frequently asked questions</h3>
        <div className="mt-8 space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question} className="rounded-xl border bg-white/80 p-4">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="font-medium text-zinc-900">{item.question}</span>
                  <ChevronDown className={'h-4 w-4 text-zinc-500 transition ' + (isOpen ? 'rotate-180' : '')} />
                </button>
                {isOpen && <p className="mt-3 text-sm text-zinc-600">{item.answer}</p>}
              </div>
            )
          })}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <a href={'mailto:' + supportEmail}>Still need help? Contact support</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
