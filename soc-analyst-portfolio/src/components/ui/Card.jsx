import { cn } from '../../utils/classNames'

function Card({
  children,
  className,
  hoverable = false,
  onClick,
  ...props
}) {
  return (
    <div
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onClick(event)
              }
            }
          : undefined
      }
      className={cn(
        'rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.15)] transition duration-200',
        hoverable && 'hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-elevated)] hover:shadow-[0_22px_50px_rgba(0,0,0,0.16)]',
        onClick && 'cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Card }
export default Card
