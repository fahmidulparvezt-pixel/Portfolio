import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-ink">
            Tamim<span className="text-accent">.dev</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            © {new Date().getFullYear()} Tamim. Built with React, Vite and Tailwind CSS.
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  )
}
