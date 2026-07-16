import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { HERO, APK_URL } from '../data/constants'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 gradient-hero animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.15)_0%,_transparent_60%)]" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-muted-foreground text-sm">{HERO.eyebrow}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-glow">
            {HERO.headline}
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            {HERO.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={APK_URL}
              className="btn-primary px-8 py-3 rounded-xl text-base font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Download the App
            </a>
            <Link
              to="for-business"
              spy
              smooth
              offset={-80}
              duration={500}
              className="btn-outline px-8 py-3 rounded-xl text-base font-semibold cursor-pointer"
            >
              Are you a business? → Partner with Constant
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            {HERO.microcopy}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
