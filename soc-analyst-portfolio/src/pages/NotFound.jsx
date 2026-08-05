import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'
import { Container } from '../components/ui/Container.jsx'

export default function NotFound() {
  return (
    <Container>
      <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Signal Lost</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--color-secondary-text)]">
          The requested page could not be found. Return to the portfolio shell and continue building content.
        </p>
        <div className="mt-8 flex justify-center">
          <Button as={Link} to="/" variant="primary">
            Return Home
          </Button>
        </div>
      </div>
    </Container>
  )
}
