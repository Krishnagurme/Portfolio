import { Container } from '../components/ui/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import InvestigationCard from '../components/investigations/InvestigationCard.jsx'
import { investigations } from '../data/investigations.js'

export default function Investigations() {
  return (
    <Container>
      <SectionHeading
        eyebrow="Investigations"
        heading="Security investigations"
        description="Documented lab investigations covering security events, telemetry, detection logic, and analyst observations. All cases are described as home-lab exercises."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {investigations.map((investigation) => (
          <InvestigationCard key={investigation.id} investigation={investigation} />
        ))}
      </div>
    </Container>
  )
}
