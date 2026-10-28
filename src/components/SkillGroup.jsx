import SkillBadge from './SkillBadge'

export default function SkillGroup({ title, description, skills }) {
  return (
    <article className="rounded-2xl border border-line bg-surface p-6 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-lift">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-1 text-sm text-muted">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} {...skill} />
        ))}
      </ul>
    </article>
  )
}
