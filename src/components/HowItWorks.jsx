import { motion } from 'framer-motion'
import { HOW_IT_WORKS } from '../data/constants'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three steps. That's it.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Request, track, receive — and you're done.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[calc(16.67%+30px)] right-[calc(16.67%+30px)] h-0.5 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {HOW_IT_WORKS.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold shadow-glow">
                    {item.step}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
