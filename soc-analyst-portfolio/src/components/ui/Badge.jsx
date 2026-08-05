import { cn } from '../../utils/classNames'

const variantStyles = {
  neutral:
    'bg-[var(--color-surface-elevated)] text-[var(--color-text)] border border-[var(--color-border)]',
  info: 'bg-[var(--color-info)]/12 text-[var(--color-info)] border border-[var(--color-info)]/20',
  success:
    'bg-[var(--color-success)]/12 text-[var(--color-success)] border border-[var(--color-success)]/20',
  warning:
    'bg-[var(--color-warning)]/12 text-[var(--color-warning)] border border-[var(--color-warning)]/20',
  critical:
    'bg-[var(--color-critical)]/12 text-[var(--color-critical)] border border-[var(--color-critical)]/20',
}

function Badge({ variant = 'neutral', children, className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--color-text)]',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export { Badge }
export default Badge
