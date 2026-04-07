'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface PrimaryButtonProps {
  label?: string
  className?: string
  onClick?: () => void
}

export default function PrimaryButton({ label = 'Get Started', className = '', onClick = () => {} }: Partial<PrimaryButtonProps>) {
  return (
    <Button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-lg bg-zinc-950 px-6 py-3 font-medium text-white shadow-[0_0_0_0_rgba(37,99,235,0.35)] transition hover:shadow-[0_0_24px_0_rgba(37,99,235,0.35)] focus-visible:ring-2 focus-visible:ring-blue-500',
        className
      )}
    >
      {label}
    </Button>
  )
}
