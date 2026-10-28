import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-surface py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading
          id="projects-title"
          eyebrow="Featured projects"
          title="Things I've built"
          description="A selection of projects where I practiced building real interfaces and features."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
