import { Container } from '../components/ui/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import SkillsOverview from '../components/skills/SkillsOverview.jsx'
import SkillCategory from '../components/skills/SkillCategory.jsx'
import { skillsData } from '../data/skills.js'

const iconMap = {
  Activity: ({ className }) => <span className={className}>⚡</span>,
  Monitor: ({ className }) => <span className={className}>🖥️</span>,
  Network: ({ className }) => <span className={className}>🌐</span>,
  Users: ({ className }) => <span className={className}>👥</span>,
  Terminal: ({ className }) => <span className={className}>⌨️</span>,
  Shield: ({ className }) => <span className={className}>🛡️</span>,
  Search: ({ className }) => <span className={className}>🔍</span>,
}

export default function Skills() {
  return (
    <main className="space-y-10 py-10 lg:py-14">
      <Container>
        <SectionHeading
          eyebrow="SOC SKILLS"
          heading="Security Operations Skill Set"
          description="Skills developed through structured learning and hands-on cybersecurity lab practice, organized around common SOC Analyst responsibilities."
        />
      </Container>

      <Container>
        <SkillsOverview />
      </Container>

      <Container className="space-y-6">
        {skillsData.categories.map((category) => {
          const Icon = iconMap[category.icon] || null
          return (
            <SkillCategory
              key={category.key}
              icon={Icon}
              title={category.title}
              description={category.description}
              skills={category.skills}
            />
          )
        })}
      </Container>

      <Container>
        <section className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-8">
          <p className="text-base leading-7 text-[var(--color-secondary-text)]">This portfolio is focused on lab practice and security concept development. For concrete evidence, review the SOC Lab and Investigation sections.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="/soc-lab" className="inline-flex items-center justify-center rounded-[1rem] bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[var(--color-accent-strong)]">
              Explore SOC Lab
            </a>
            <a href="/investigations" className="inline-flex items-center justify-center rounded-[1rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface-elevated)]">
              View Investigations
            </a>
          </div>
        </section>
      </Container>
    </main>
  )
}
