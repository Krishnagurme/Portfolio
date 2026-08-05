import { cn } from '../../utils/classNames'

const variantStyles = {
  primary:
    'bg-[var(--color-accent)] text-slate-950 border-transparent shadow-sm shadow-cyan-500/10 hover:bg-[var(--color-accent-strong)]',
  secondary:
    'bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)] hover:bg-[var(--color-surface-elevated)]',
  ghost:
    'bg-transparent text-[var(--color-text)] border border-transparent hover:bg-white/5',
  danger:
    'bg-[var(--color-critical)] text-white border-transparent hover:bg-[#f87171]',
}

function Button({
  variant = 'primary',
  href,
  as: Component,
  children,
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  ariaLabel,
  className,
  ...props
}) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[1rem] border px-4 py-3 text-sm font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:cursor-not-allowed disabled:opacity-60',
    variantStyles[variant],
    className,
  )

  const IconMarkup = Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null

  const content = (
    <>
      {iconPosition === 'left' && IconMarkup}
      {children}
      {iconPosition === 'right' && IconMarkup}
    </>
  )

  if (Component) {
    return (
      <Component className={baseClasses} aria-label={ariaLabel} disabled={disabled} {...props}>
        {content}
      </Component>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        aria-label={ariaLabel}
        aria-disabled={disabled ? 'true' : undefined}
        onClick={disabled ? (event) => event.preventDefault() : undefined}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={baseClasses}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  )
}

export { Button }
export default Button
