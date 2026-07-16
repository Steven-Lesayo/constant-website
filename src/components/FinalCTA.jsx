import { motion } from 'framer-motion'
import { APK_URL } from '../data/constants'

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 gradient-hero animate-gradient opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.2)_0%,_transparent_60%)]" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-glow">
            Ready for delivery that keeps its word?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Download Constant and see what tracked, reliable delivery actually feels like.
          </p>
          <a
            href={APK_URL}
            className="btn-primary px-10 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2 shadow-glow"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Get the App
          </a>
        </motion.div>
      </div>
    </section>
  )
}
