import { motion } from 'framer-motion'
import { DISPATCH_HUB_URL } from '../data/constants'

export default function ForBusiness() {
  return (
    <section id="for-business" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.08)_0%,_transparent_60%)]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for businesses that deliver
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Whether you're running a restaurant, a shop, or an errand-heavy operation,
            Constant's merchant dashboard gives you the same visibility your customers
            get — live order status, rider assignment, and delivery analytics, all in
            one place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <a
            href={`${DISPATCH_HUB_URL}/auth/register`}
            className="btn-primary px-8 py-3 rounded-xl text-base font-semibold inline-flex items-center gap-2"
          >
            See Merchant Tools
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
