export default function SectionHeading({ id, eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-base text-muted sm:text-lg">{description}</p>}
    </div>
  )
}
