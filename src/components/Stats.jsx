import { motion } from 'framer-motion'
import { STATS } from '../data/constants'

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center lg:text-left lg:px-8 ${
                i > 0 ? 'lg:border-l lg:border-border' : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
