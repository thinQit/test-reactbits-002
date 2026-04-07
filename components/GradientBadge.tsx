"use client";

import { cn } from '@/lib/utils'

interface GradientBadgeProps {
  label?: string
  className?: string
}

export default function GradientBadge({ label = 'New', className = '' }: Partial<GradientBadgeProps>) {
  return (
    <span className={cn('inline-flex rounded-full bg-gradient-to-r from-violet-600 to-blue-600 p-[1px] shadow-[0_0_20px_rgba(124,58,237,0.25)]', className)}>
      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-900">{label}</span>
    </span>
  )
}
