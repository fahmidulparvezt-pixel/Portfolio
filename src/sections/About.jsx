import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-surface py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading id="about-title" eyebrow="About me" title="A bit about what I do" />

        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            I&apos;m a full-stack web developer focused on building user-friendly, responsive web
            solutions that deliver an effective user experience and solve problems in the simplest
            way possible, using modern tools and current technologies.
          </p>
          <p>
            I enjoy turning practical ideas into working software. My projects so far are built
            with modern frontend technologies like React and Tailwind CSS, and I&apos;m
            continuing to explore the full-stack side with Next.js, Node.js, MongoDB, and
            authentication.
          </p>
          <p>
            I care about clean interfaces, accessible and responsive layouts, and code that stays
            easy to read and maintain. I&apos;m always learning, and I like building things that
            people can actually use.
          </p>
        </div>
      </div>
    </section>
  )
}
