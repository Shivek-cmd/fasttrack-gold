import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'gold' | 'emerald' | 'outline'
  className?: string
}

const variants = {
  default: 'bg-bg-elevated text-muted border border-border',
  gold:    'bg-primary/10 text-primary border border-primary/20',
  emerald: 'bg-accent/10 text-accent border border-accent/20',
  outline: 'bg-transparent text-muted border border-border',
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
