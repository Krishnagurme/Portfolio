import { Container } from '../components/ui/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import AboutIntro from '../components/about/AboutIntro.jsx'
import CareerFocus from '../components/about/CareerFocus.jsx'
import LearningApproach from '../components/about/LearningApproach.jsx'
import { aboutData } from '../data/aboutData.js'
import { Button } from '../components/ui/Button.jsx'

export default function About() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page heading */}
      <Container>
        <SectionHeading
          eyebrow="ABOUT"
          heading="Building Practical Blue Team Skills"
          description="A concise introduction to my transition toward security operations and hands-on defensive cybersecurity."
        />
      </Container>

      {/* Intro paragraph */}
      <Container>
        <AboutIntro />
      </Container>

      {/* Career focus */}
      <Container>
        <CareerFocus />
      </Container>

      {/* Two-column: Education + Learning Approach */}
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          {/* Left — Education */}
          <section className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Education</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Academic details</h3>
            <div className="mt-6 grid gap-4">
              <div className="rounded-3xl bg-[var(--color-bg)] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-secondary-text)]">Degree</p>
                <p className="mt-2 font-semibold text-white">{aboutData.education.degree}</p>
              </div>
              <div className="rounded-3xl bg-[var(--color-bg)] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-secondary-text)]">University</p>
                <p className="mt-2 font-semibold text-white">{aboutData.education.institution}</p>
              </div>
              <div className="rounded-3xl bg-[var(--color-bg)] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-secondary-text)]">Status</p>
                <p className="mt-2 font-semibold text-white">{aboutData.education.status}</p>
              </div>
              <div className="rounded-3xl bg-[var(--color-bg)] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-secondary-text)]">Relevant focus</p>
                <p className="mt-2 leading-7 text-[var(--color-secondary-text)]">{aboutData.education.focus}</p>
              </div>
            </div>
          </section>

          {/* Right — How I Work */}
          <LearningApproach />
        </div>
      </Container>

      {/* CTA */}
      <Container>
        <section className="grid gap-4 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-8">
          <p className="text-base leading-7 text-[var(--color-secondary-text)]">
            My portfolio is designed to move a recruiter from biography to evidence by showing how I am learning through lab practice and security investigation work.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button as="a" href={aboutData.cta.lab} variant="primary">
              Explore SOC Lab
            </Button>
            <Button as="a" href={aboutData.cta.investigations} variant="secondary">
              View Security Investigations
            </Button>
          </div>
        </section>
      </Container>
    </div>
  )
}
