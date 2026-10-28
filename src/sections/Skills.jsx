import SectionHeading from '../components/SectionHeading'
import SkillGroup from '../components/SkillGroup'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills & technologies"
          title="Tools I work with"
          description="Technologies I've used in my projects. Dashed badges mark areas I'm still actively deepening."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillGroup key={group.id} {...group} />
          ))}
        </div>
      </div>
    </section>
  )
}
