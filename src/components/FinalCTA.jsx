import { motion } from 'framer-motion'
import { APK_URL } from '../data/constants'

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary px-6 sm:px-12 py-14 sm:py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(270_91%_65%/0.25)_0%,_transparent_55%)]" />
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Ready for delivery that keeps its word?
              </h2>
              <p className="text-primary-foreground/80 text-base sm:text-lg max-w-xl mx-auto mb-8">
                Download Constant and see what tracked, reliable delivery actually
                feels like.
              </p>
              <a
                href={APK_URL}
                className="btn-inverted px-10 py-4 rounded-xl text-base font-semibold inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Get the App
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
