import { motion } from 'framer-motion'
import { FEATURES } from '../data/constants'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function MiniMap() {
  return (
    <div className="relative h-full min-h-[180px] rounded-2xl overflow-hidden bg-[#EAF0F7]">
      <svg viewBox="0 0 300 200" className="absolute inset-0 w-full h-full">
        <g stroke="#D6DEE9" strokeWidth="5" fill="none">
          <path d="M0 60h300M0 140h300M100 0v200M220 0v200" />
        </g>
        <g stroke="#C9D4E2" strokeWidth="8" fill="none" strokeLinecap="round">
          <path d="M-10 30 C 90 30, 110 110, 220 110" />
          <path d="M60 -10 C 80 90, 40 150, 150 210" />
        </g>
        <path
          d="M 60 90 C 120 80, 160 60, 220 110"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-dash"
        />
        <circle cx="60" cy="90" r="7" fill="#7C3AED" />
        <circle cx="220" cy="110" r="7" fill="#F59E0B" />
        <circle cx="150" cy="72" r="10" fill="#22C55E" opacity="0.3" className="dot-pulse" />
        <circle cx="150" cy="72" r="6" fill="#22C55E" />
      </svg>
      <div className="absolute top-3 left-3 bg-white/95 rounded-full px-2.5 py-1 text-[11px] font-semibold text-foreground flex items-center gap-1.5 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        Live · 2 km away
      </div>
    </div>
  )
}

export default function Features() {
  const [featured, ...rest] = FEATURES

  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything you need, nothing you don't
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            From real-time tracking to secure payments — Constant has every delivery
            scenario covered.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div
            variants={cardVariants}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="grid sm:grid-cols-2 items-stretch">
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-2xl mb-5">
                  {featured.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {featured.title}
                </h3>
                <h4 className="text-sm font-medium text-primary mb-3">
                  {featured.headline}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                  {featured.description}
                </p>
              </div>
              <div className="p-4 sm:p-6">
                <MiniMap />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((feature) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="glass-card glass-card-hover rounded-2xl p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center text-xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1.5">
                  {feature.title}
                </h3>
                <h4 className="text-sm font-medium text-primary mb-2">
                  {feature.headline}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
