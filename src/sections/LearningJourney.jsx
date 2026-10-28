import { BookOpen } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const items = [
  'Building responsive interfaces with React and Tailwind CSS.',
  'Practicing Next.js and modern routing patterns.',
  'Exploring backend development with Node.js.',
  'Learning data modeling and persistence with MongoDB.',
  'Practicing authentication and authorization workflows.',
]

export default function LearningJourney() {
  return (
    <section id="learning" aria-labelledby="learning-title" className="py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading
          id="learning-title"
          eyebrow="Learning journey"
          title="What I'm learning right now"
          description="Ongoing practice and exploration, not finished expertise."
        />

        <ol className="grid gap-4 sm:grid-cols-2">
          {items.map((text, i) => (
            <li
              key={text}
              className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 shadow-card"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tint text-accent-deep">
                <BookOpen size={18} aria-hidden="true" />
              </span>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                <span className="sr-only">Step {i + 1}: </span>
                {text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
