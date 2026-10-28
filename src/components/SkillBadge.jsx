import { levelLabels } from '../data/skills'

export default function SkillBadge({ name, level }) {
  const growing = level === 'growing'
  return (
    <li
      title={levelLabels[level]}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium ${
        growing ? 'border-dashed border-accent/50 bg-tint text-ink' : 'border-line bg-surface text-ink'
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${growing ? 'bg-accent' : 'bg-sage'}`}
      />
      {name}
      <span className="sr-only"> ({levelLabels[level]})</span>
    </li>
  )
}
