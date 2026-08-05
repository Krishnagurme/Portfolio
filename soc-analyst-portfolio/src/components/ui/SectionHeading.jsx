export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = 'left',
  className,
  ...props
}) {
  return (
    <section className={className} {...props}>
      {eyebrow && (
        <p className={`text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)] ${align === 'center' ? 'text-center' : 'text-left'}`}>
          {eyebrow}
        </p>
      )}
      {heading && (
        <h2 className={`mt-3 text-3xl font-semibold leading-tight text-white ${align === 'center' ? 'text-center' : 'text-left'} md:text-4xl`}>
          {heading}
        </h2>
      )}
      {description && (
        <p className={`mt-4 max-w-3xl text-base leading-7 text-[var(--color-secondary-text)] ${align === 'center' ? 'text-center' : 'text-left'}`}>
          {description}
        </p>
      )}
    </section>
  )
}
