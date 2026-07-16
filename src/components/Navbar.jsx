import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { NAV_LINKS, APK_URL } from '../data/constants'
import brandLogo from '../assets/constant-logo-brand.png'
import LoginModal from './LoginModal'
import { useTheme } from './ThemeProvider'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5">
            <img
              src={brandLogo}
              alt="Constant"
              className="w-8 h-8 rounded-lg object-cover"
              style={{ boxShadow: '0 10px 30px rgba(124, 58, 237, 0.24)' }}
            />
            <span className="text-foreground font-bold text-xl">
              Constant <span className="text-muted-foreground font-normal">Deliveries</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href.replace('#', '')}
                spy
                smooth
                offset={-80}
                duration={500}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="track"
              spy
              smooth
              offset={-80}
              duration={500}
              className="btn-outline px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
            >
              Track Order
            </Link>
            <button
              onClick={() => setLoginOpen(true)}
              className="btn-outline px-4 py-2 rounded-lg text-sm font-medium"
            >
              Login
            </button>
            <a
              href={APK_URL}
              className="btn-primary px-5 py-2 rounded-lg text-sm font-medium"
            >
              Download App
            </a>
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href.replace('#', '')}
                spy
                smooth
                offset={-80}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="block text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2">
              <Link
                to="track"
                spy
                smooth
                offset={-80}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="w-full btn-outline px-4 py-2 rounded-lg text-sm font-medium cursor-pointer block text-center"
              >
                Track Order
              </Link>
              <button
                onClick={() => { setLoginOpen(true); setMenuOpen(false) }}
                className="w-full btn-outline px-4 py-2 rounded-lg text-sm font-medium"
              >
                Login
              </button>
              <a
                href={APK_URL}
                onClick={() => setMenuOpen(false)}
                className="w-full btn-primary px-4 py-2 rounded-lg text-sm font-medium block text-center"
              >
                Download App
              </a>
              <button
                onClick={() => { toggleTheme(); setMenuOpen(false) }}
                className="w-full btn-outline px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
              >
                {theme === 'dark' ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Light Mode
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  )
}
