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
    pending: 'text-yellow-400',
    assigned: 'text-blue-400',
    pickedUp: 'text-[#C026D3]',
    inTransit: 'text-purple-400',
    delivered: 'text-green-400',
    cancelled: 'text-red-400',
  }

  return (
    <section id="track" className="py-20 lg:py-28 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Track Your Package
          </h2>
          <p className="text-gray-400 text-lg">
            Enter your order number to see real-time delivery status.
          </p>
        </motion.div>

        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <form onSubmit={handleTrack} className="flex gap-3">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter tracking code (e.g. C-250714-1430)"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#8B00FF] focus:ring-1 focus:ring-[#8B00FF] transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary text-white px-6 py-3 rounded-xl font-medium disabled:opacity-50"
            >
              {loading ? 'Tracking...' : 'Track'}
            </button>
          </form>

          {error && (
            <p className="mt-4 text-red-400 text-sm text-center">{error}</p>
          )}

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 space-y-4"
            >
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                <span className="text-gray-400 text-sm">Order</span>
                <span className="text-white font-mono text-sm">
                  {result.orderNumber}
                </span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                <span className="text-gray-400 text-sm">Status</span>
                <span
                  className={`font-medium capitalize ${
                    statusColors[result.status] || 'text-white'
                  }`}
                >
                  {result.status === 'pickedUp'
                    ? 'Picked Up'
                    : result.status === 'inTransit'
                    ? 'In Transit'
                    : result.status}
                </span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                <span className="text-gray-400 text-sm">Pickup</span>
                <span className="text-white text-sm text-right max-w-[200px] truncate">
                  {result.pickup?.label}
                </span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                <span className="text-gray-400 text-sm">Dropoff</span>
                <span className="text-white text-sm text-right max-w-[200px] truncate">
                  {result.dropoff?.label}
                </span>
              </div>
              {result.riderLocation && (
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                  <span className="text-gray-400 text-sm">Rider Location</span>
                  <span className="text-green-400 text-sm">Live</span>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
