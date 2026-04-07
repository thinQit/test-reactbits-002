'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SecondaryButtonProps {
  label?: string
  className?: string
  onClick?: () => void
}

export default function SecondaryButton({ label = 'Learn More', className = '', onClick = () => {} }: Partial<SecondaryButtonProps>) {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={onClick}
      className={cn('rounded-lg border-zinc-300 bg-white px-6 py-3 font-medium text-zinc-900 hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-violet-500', className)}
    >
      {label}
    </Button>
  )
}
