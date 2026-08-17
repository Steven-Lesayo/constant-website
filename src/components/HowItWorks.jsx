import { motion } from 'framer-motion'
import { HOW_IT_WORKS } from '../data/constants'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Three steps. That's it.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Request, track, receive — and you're done.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[16.67%] right-[16.67%] h-0.5 border-t-2 border-dashed border-primary/40" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {HOW_IT_WORKS.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className="relative inline-flex items-center justify-center mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-md">
                    {item.step}
                  </div>
                </div>

                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
                  Step 0{item.step}
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed sm:max-w-xs mx-auto">
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