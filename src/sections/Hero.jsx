import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="py-14 sm:py-20 lg:py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-accent-deep shadow-card">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-sage" />
            Aspiring Full-Stack Developer
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m Tamim.
            <span className="mt-2 block text-accent">Building useful experiences for the web.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">
            An aspiring full-stack web developer who enjoys building useful, responsive web
            applications and learning modern web technologies.
          </p>
          <p className="mt-3 max-w-xl text-base text-muted">
            I work with React, Next.js, Tailwind CSS, Node.js, and MongoDB to build clean user
            interfaces and explore full-stack development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>

          <div className="mt-8">
            <SocialLinks only={['github', 'linkedin']} />
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-tint sm:-inset-4"
            />
            <img
              src="/images/profile/tamim.jpg"
              alt="Portrait of Tamim"
              width="640"
              height="640"
              fetchpriority="high"
              className="relative aspect-square w-full rounded-[1.5rem] border border-line object-cover shadow-lift"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
