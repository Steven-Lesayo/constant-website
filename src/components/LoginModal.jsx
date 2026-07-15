import { motion, AnimatePresence } from 'framer-motion'
import { DISPATCH_HUB_URL } from '../data/constants'

export default function LoginModal({ open, onClose }) {
  const redirect = (path) => {
    window.open(`${DISPATCH_HUB_URL}${path}`, '_blank')
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              className="glass-card rounded-2xl p-6 sm:p-8 w-full max-w-md relative"
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                  C
                </div>
                <h2 className="text-xl font-bold text-white">Welcome to Constant</h2>
                <p className="text-gray-400 text-sm mt-1">Choose your portal</p>
              </div>

              {/* Admin card */}
              <button
                onClick={() => redirect('/auth')}
                className="w-full glass-card glass-card-hover rounded-xl p-5 text-left mb-3 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#8B00FF]/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#C026D3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold">Admin / Staff Portal</p>
                    <p className="text-gray-400 text-sm mt-0.5">
                      Manage deliveries, riders, analytics & more
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-[#C026D3] transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {/* Merchant card */}
              <button
                onClick={() => redirect('/auth')}
                className="w-full glass-card glass-card-hover rounded-xl p-5 text-left mb-6 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C026D3]/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#C026D3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold">Merchant Portal</p>
                    <p className="text-gray-400 text-sm mt-0.5">
                      Track orders, manage your store, view earnings
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-[#C026D3] transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {/* Register link */}
              <p className="text-center text-gray-500 text-sm">
                New merchant?{' '}
                <button
                  onClick={() => redirect('/auth/register')}
                  className="text-[#C026D3] hover:underline font-medium"
                >
                  Register here
                </button>
              </p>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
