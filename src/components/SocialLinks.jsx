import { Github, Linkedin, Mail } from 'lucide-react'
import { socialLinks } from '../data/socialLinks'

const icons = { github: Github, linkedin: Linkedin, email: Mail }

// variant "icons": compact icon buttons (hero, footer)
// variant "cards": larger rows with handle text (contact)
export default function SocialLinks({ variant = 'icons', only }) {
  const items = only ? socialLinks.filter((l) => only.includes(l.id)) : socialLinks

  if (variant === 'cards') {
    return (
      <ul className="grid gap-4 sm:grid-cols-3">
        {items.map(({ id, label, handle, href, external }) => {
          const Icon = icons[id]
          return (
            <li key={id}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-surface p-5 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-lift"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-tint text-accent-deep">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-ink">{label}</span>
                  <span className="block truncate text-sm text-muted">{handle}</span>
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <ul className="flex items-center gap-2">
      {items.map(({ id, label, href, external }) => {
        const Icon = icons[id]
        return (
          <li key={id}>
            <a
              href={href}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-ink transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent-deep"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
