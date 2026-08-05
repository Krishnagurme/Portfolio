import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:block rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-slate-950"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
