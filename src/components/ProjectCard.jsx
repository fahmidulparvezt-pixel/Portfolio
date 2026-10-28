import { ExternalLink, Github } from 'lucide-react'
import Button from './Button'

export default function ProjectCard({ project }) {
  const { name, description, image, imageAlt, tech, live, source } = project

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lift">
      <div className="aspect-[16/10] w-full overflow-hidden border-b border-line bg-tint">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm font-medium text-muted">
            Screenshot coming soon
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-ink">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>

        {tech.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${name} technologies`}>
            {tech.map((item) => (
              <li
                key={item}
                className="rounded-full bg-tint px-2.5 py-1 text-xs font-medium text-accent-deep"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {live && (
            <Button href={live} external aria-label={`Open the live demo of ${name}`}>
              <ExternalLink size={16} aria-hidden="true" />
              Live Demo
            </Button>
          )}
          {source && (
            <Button
              href={source}
              external
              variant="secondary"
              aria-label={`View the source code of ${name} on GitHub`}
            >
              <Github size={16} aria-hidden="true" />
              Source Code
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}
