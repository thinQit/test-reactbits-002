"use client";

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionContainerProps {
  children?: ReactNode
  className?: string
}

export default function SectionContainer({ children = null, className = '' }: Partial<SectionContainerProps>) {
  return <section className={cn('mx-auto w-full max-w-5xl px-4 py-24 md:px-6 md:py-32', className)}>{children}</section>
}
