import { motion } from 'framer-motion'

export default function Screenshots() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C026D3]/10 rounded-full blur-[150px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Same Great Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The website mirrors your Flutter app — same dark gradient theme, same
            intuitive design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {['Login', 'Sign Up', 'Home Map'].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-4 sm:p-6 text-center"
            >
              {/* Phone frame mockup */}
              <div className="mx-auto w-48 h-96 rounded-[2rem] border-2 border-white/10 bg-gradient-to-b from-[#0A0A0A] to-[#1A0033] flex items-center justify-center mb-4 shadow-xl">
                <div className="text-center px-4">
                  <div className="w-12 h-12 rounded-xl bg-[#8B00FF]/20 flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                    C
                  </div>
                  <p className="text-white text-xs font-medium">{label} Screen</p>
                  <p className="text-gray-500 text-[10px] mt-1">App preview</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm font-medium">{label}</p>
              <p className="text-gray-500 text-xs mt-1">
                Flutter {label.toLowerCase()} screen
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
