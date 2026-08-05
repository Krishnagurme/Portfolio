import SectionHeading from '../components/ui/SectionHeading.jsx'
import ProjectCard from '../components/projects/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <div className="py-16 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Projects"
          heading="SOC home lab projects"
          description="Real cybersecurity work from the SOC home lab. This page documents authentic lab activity, security monitoring validation, and investigator learning without marketing claims."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
