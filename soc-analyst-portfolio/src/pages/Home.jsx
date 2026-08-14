import { Container } from '../components/ui/Container.jsx'
import Hero from '../components/home/Hero.jsx'
import CoreFocus from '../components/home/CoreFocus.jsx'
import ProofOfWork from '../components/home/ProofOfWork.jsx'

export default function Home() {
  return (
    <main className="space-y-10 py-6 lg:py-8">
      <Container>
        <Hero />
      </Container>

      <Container>
        <CoreFocus />
      </Container>

      <Container>
        <ProofOfWork />
      </Container>
    </main>
  )
}
