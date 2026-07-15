import { DISPATCH_HUB_URL } from '../data/constants'

export default function LoginModal({ open, onClose }) {
  if (!open) return null

  const login = () => {
    window.location.href = `${DISPATCH_HUB_URL}/auth`
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card border border-border rounded-2xl w-full max-w-md p-8 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold">
            C
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Welcome back</h2>
            <p className="text-muted-foreground text-sm">Choose how to sign in</p>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={login}
            className="w-full glass-card rounded-xl p-4 text-left transition-all duration-300 glass-card-hover"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center text-white shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-foreground font-semibold">Admin / Staff</h3>
                <p className="text-muted-foreground text-xs mt-0.5">Operations, analytics, and dispatch tools</p>
              </div>
            </div>
          </button>

          <button
            onClick={login}
            className="w-full glass-card rounded-xl p-4 text-left transition-all duration-300 glass-card-hover"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center text-white shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-foreground font-semibold">Merchant</h3>
                <p className="text-muted-foreground text-xs mt-0.5">Manage orders, riders, and deliveries</p>
              </div>
            </div>
          </button>
        </div>

        <p className="text-muted-foreground text-xs text-center mt-6">
          New to Constant?{' '}
          <a
            href={`${DISPATCH_HUB_URL}/auth/register`}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Register as a merchant
          </a>
        </p>
      </div>
    </div>
  )
}
