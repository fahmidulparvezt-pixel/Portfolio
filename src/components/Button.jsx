const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-offset-4'

const variants = {
  primary: 'bg-accent text-white shadow-card hover:bg-accent-deep hover:shadow-lift',
  secondary: 'border border-line bg-surface text-ink hover:border-accent hover:text-accent-deep',
}

export default function Button({
  href,
  variant = 'primary',
  external = false,
  className = '',
  children,
  ...rest
}) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...externalProps}
      {...rest}
    >
      {children}
    </a>
  )
}
