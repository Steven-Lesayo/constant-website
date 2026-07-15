import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { NAV_LINKS } from '../data/constants'
import LoginModal from './LoginModal'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

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
          ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white font-bold text-sm">
              C
            </div>
            <span className="text-white font-bold text-xl">
              Constant <span className="text-gray-400 font-normal">Deliveries</span>
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
                className="text-gray-300 hover:text-[#C026D3] transition-colors cursor-pointer text-sm font-medium"
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
            <button className="btn-primary px-5 py-2 rounded-lg text-sm font-medium text-white">
              Download App
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
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
        <div className="lg:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/10">
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
                className="block text-gray-300 hover:text-[#C026D3] transition-colors py-2"
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
              <button
                onClick={() => setMenuOpen(false)}
                className="w-full btn-primary px-4 py-2 rounded-lg text-sm font-medium text-white block text-center"
              >
                Download App
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
