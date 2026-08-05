import { cn } from '../../utils/classNames'
import { Badge } from '../ui/Badge.jsx'

export default function SkillCategory({ icon: Icon, title, description, skills }) {
  return (
    <section className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="flex items-start gap-4">
        {Icon && <Icon className="h-7 w-7 text-[var(--color-accent)]" aria-hidden="true" />}
        <div>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--color-secondary-text)]">{description}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-2 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-white">{skill.name}</p>
              {skill.evidenceLink && (
                <a
                  href={skill.evidenceLink}
                  className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
                >
                  View {skill.evidenceLink === '/soc-lab' ? 'SOC Lab' : 'Investigations'}
                </a>
              )}
            </div>
            <Badge className="mt-3 sm:mt-0" variant={skill.label === 'LAB PRACTICE' ? 'success' : skill.label === 'WORKING KNOWLEDGE' ? 'info' : skill.label === 'CURRENTLY LEARNING' ? 'warning' : 'neutral'}>
              {skill.label}
            </Badge>
          </div>
        ))}
      </div>
    </section>
  )
}
