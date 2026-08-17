import { useState } from 'react'
import { motion } from 'framer-motion'

export default function TrackOrder() {
  const [code, setCode] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleTrack = async (e) => {
    e.preventDefault()
    if (!code.trim()) return

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'
        }/public/track/${code.trim()}`
      )
      if (!res.ok) {
        if (res.status === 404) throw new Error('Order not found')
        throw new Error('Tracking failed')
      }
      const data = await res.json()
      setResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const statusColors = {
    pending: 'text-warning',
    assigned: 'text-info',
    pickedUp: 'text-primary',
    inTransit: 'text-purple-400',
    delivered: 'text-success',
    cancelled: 'text-destructive',
  }

  return (
    <section id="track" className="py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              Live Demo
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Track your package in real time
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              No download, no sign-up. Enter a real order number and watch the same
              live status your customers see — pickup point, drop-off, and whether
              your rider is on the move.
            </p>

            <ul className="space-y-3">
              {[
                'Live status updates as the rider moves',
                'Pickup and drop-off locations at a glance',
                'Rider location shown live while in transit',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-foreground/90"
                >
                  <svg
                    className="w-4 h-4 text-primary shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <form onSubmit={handleTrack} className="flex gap-3">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="e.g. C-250714-1430"
                  className="flex-1 bg-muted border border-input rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary px-6 py-3 rounded-xl font-medium disabled:opacity-50"
                >
                  {loading ? 'Tracking...' : 'Track'}
                </button>
              </form>

              {error && (
                <p className="mt-4 text-destructive text-sm text-center">{error}</p>
              )}

              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 space-y-3"
                >
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted">
                    <span className="text-muted-foreground text-sm">Order</span>
                    <span className="text-foreground font-mono text-sm">
                      {result.orderNumber}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted">
                    <span className="text-muted-foreground text-sm">Status</span>
                    <span
                      className={`font-medium capitalize ${
                        statusColors[result.status] || 'text-foreground'
                      }`}
                    >
                      {result.status === 'pickedUp'
                        ? 'Picked Up'
                        : result.status === 'inTransit'
                        ? 'In Transit'
                        : result.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted">
                    <span className="text-muted-foreground text-sm">Pickup</span>
                    <span className="text-foreground text-sm text-right max-w-[200px] truncate">
                      {result.pickup?.label}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted">
                    <span className="text-muted-foreground text-sm">Dropoff</span>
                    <span className="text-foreground text-sm text-right max-w-[200px] truncate">
                      {result.dropoff?.label}
                    </span>
                  </div>
                  {result.riderLocation && (
                    <div className="flex items-center justify-between p-4 rounded-xl bg-muted">
                      <span className="text-muted-foreground text-sm">Rider Location</span>
                      <span className="flex items-center gap-1.5 text-success text-sm">
                        <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                        Live
                      </span>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
