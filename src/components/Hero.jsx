import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { HERO, APP_STORE_URL, APK_URL } from '../data/constants'

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
            <span className="text-muted-foreground text-sm">{HERO.stats}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-glow">
            {HERO.headline.split('–')[0]}
            <span className="block gradient-text">– {HERO.headline.split('–')[1]}</span>
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
              to="features"
              spy
              smooth
              offset={-80}
              duration={500}
              className="btn-outline px-8 py-3 rounded-xl text-base font-semibold cursor-pointer"
            >
              Learn More
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-foreground font-semibold">{HERO.rating}★</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">Available on</span>
              <div className="flex items-center gap-2">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-24 rounded bg-card border border-border flex items-center justify-center text-xs text-muted-foreground hover:bg-accent transition-colors"
                >
                  App Store
                </a>
                <a
                  href={APK_URL}
                  className="h-8 w-24 rounded bg-card border border-border flex items-center justify-center text-xs text-muted-foreground hover:bg-accent transition-colors"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
