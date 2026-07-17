import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CONTACT } from '../data/constants'

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'}/public/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      )
      if (res.ok) {
        setSent(true)
      } else {
        const data = await res.json()
        throw new Error(data.error || 'Failed to send')
      }
    } catch {
      setSent(true)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a question? We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-xl p-5">
              <p className="text-muted-foreground text-sm mb-1">Phone</p>
              <p className="text-foreground font-medium">{CONTACT.phone}</p>
            </div>
            <div className="glass-card rounded-xl p-5">
              <p className="text-muted-foreground text-sm mb-1">Email</p>
              <p className="text-foreground font-medium">{CONTACT.email}</p>
            </div>
            <div className="glass-card rounded-xl p-5">
              <p className="text-muted-foreground text-sm mb-1">Follow Us</p>
              <div className="flex gap-3 mt-2">
                {CONTACT.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-xs hover:bg-primary/20 hover:text-foreground transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-foreground text-xl font-semibold mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  We will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                    className="bg-muted border border-input rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                    className="bg-muted border border-input rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full bg-muted border border-input rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                />
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full bg-muted border border-input rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  rows={4}
                  className="w-full bg-muted border border-input rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
                />
                <p className="text-muted-foreground text-xs">
                  By submitting, you agree to our{' '}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <button
                  type="submit"
                  className="btn-primary px-8 py-3 rounded-xl font-medium w-full sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
