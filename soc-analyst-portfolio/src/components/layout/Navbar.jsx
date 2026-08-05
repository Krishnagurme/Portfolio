import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FileText, ExternalLink, Menu, X } from 'lucide-react'
import { Button } from '../ui/Button.jsx'
import { Container } from '../ui/Container.jsx'
import { siteConfig } from '../../data/siteConfig.js'

const navClasses = ({ isActive }) =>
  isActive
    ? 'text-white border-b border-[var(--color-accent)] pb-1'
    : 'text-[var(--color-secondary-text)] hover:text-white'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[rgba(8,11,16,0.92)] backdrop-blur-sm">
      <Container className="flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">{siteConfig.name || 'PORTFOLIO'}</span>
            <span className="text-xs text-[var(--color-secondary-text)]">SOC Analyst</span>
          </div>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClasses} end={item.to === '/'}>
              {item.title}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            as="a"
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon={FileText}
            iconPosition="left"
            className="whitespace-nowrap"
          >
            Resume
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text)] transition hover:bg-[var(--color-surface-elevated)] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-[var(--color-border)] bg-[var(--color-bg)] lg:hidden">
          <Container className="space-y-4 py-4">
            <nav className="space-y-2">
              {siteConfig.navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? 'bg-[var(--color-surface-elevated)] text-white'
                        : 'text-[var(--color-secondary-text)] hover:bg-[var(--color-surface)] hover:text-white'
                    }`
                  }
                  onClick={() => setOpen(false)}
                  end={item.to === '/'}
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>
            <div className="flex flex-col gap-3 border-t border-[var(--color-border)] pt-4">
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface-elevated)]"
                onClick={() => setOpen(false)}
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </div>
            <div className="flex items-center gap-3 pt-4 text-sm text-[var(--color-secondary-text)]">
              <ExternalLink className="h-4 w-4" />
              <span>GitHub</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[var(--color-secondary-text)]">
              <ExternalLink className="h-4 w-4" />
              <span>LinkedIn</span>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
