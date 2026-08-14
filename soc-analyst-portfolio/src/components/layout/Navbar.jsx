import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FileText, ExternalLink, Menu, X } from 'lucide-react'
import { Container } from '../ui/Container.jsx'
import { siteConfig } from '../../data/siteConfig.js'

const navClasses = ({ isActive }) =>
  isActive
    ? 'text-white border-b-2 border-[var(--color-accent)] pb-1 font-semibold'
    : 'text-[var(--color-secondary-text)] hover:text-white transition-colors duration-150'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const resumePdfUrl = siteConfig.resume || '/resume/resume.pdf'

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[rgba(8,11,16,0.94)] backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-3">
        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] group-hover:text-white transition">
              {siteConfig.name || 'KRISHNA GURME'}
            </span>
            <span className="text-[0.7rem] text-[var(--color-secondary-text)] tracking-wider">
              SOC Analyst
            </span>
          </div>
        </NavLink>

        {/* Navigation Items */}
        <nav className="hidden items-center gap-5 text-sm xl:gap-6 lg:flex">
          {siteConfig.navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClasses} end={item.to === '/'}>
              {item.title}
            </NavLink>
          ))}
        </nav>

        {/* Top-Right Resume Button (Direct PDF Link) */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-accent)]/40 bg-[var(--color-surface)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] transition duration-200 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-slate-950 shadow-sm"
            aria-label="View Resume PDF in new tab"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface-elevated)] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>
      </Container>

      {/* Mobile Drawer */}
      {open && (
        <div id="mobile-menu" className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-4 lg:hidden">
          <Container className="space-y-4">
            <nav className="space-y-1.5">
              {siteConfig.navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? 'bg-[var(--color-surface-elevated)] text-[var(--color-accent)] font-semibold'
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

            <div className="flex flex-col gap-2 border-t border-[var(--color-border)] pt-3">
              <a
                href={resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-accent)] bg-[var(--color-accent)]/10 px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-slate-950"
                onClick={() => setOpen(false)}
              >
                <FileText className="h-4 w-4" />
                <span>Open Resume PDF</span>
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
