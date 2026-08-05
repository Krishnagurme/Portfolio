import { aboutData } from '../../data/aboutData.js'

export default function AboutIntro() {
  return (
    <section className="space-y-6 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-8">
      {aboutData.intro.map((paragraph) => (
        <p key={paragraph} className="text-base leading-7 text-[var(--color-secondary-text)] sm:text-lg">
          {paragraph}
        </p>
      ))}
    </section>
  )
}
