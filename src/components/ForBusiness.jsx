import { motion } from 'framer-motion'
import { DISPATCH_HUB_URL } from '../data/constants'

const ORDERS = [
  { id: 'C-0817-1204', route: 'Ngara Rd → CBD', status: 'In Transit', tone: 'primary' },
  { id: 'C-0817-1201', route: 'Kilimani → Lavington', status: 'Picked Up', tone: 'info' },
  { id: 'C-0817-1158', route: 'Westlands → Kileleshwa', status: 'Delivered', tone: 'success' },
  { id: 'C-0817-1150', route: 'Parklands → Hurlingham', status: 'Delivered', tone: 'success' },
]

const toneClass = {
  primary: 'bg-primary/15 text-primary',
  info: 'bg-info/15 text-info',
  success: 'bg-success/15 text-success',
}

function DashboardMockup() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
        <span className="ml-3 text-xs text-muted-foreground font-mono">
          Constant Dispatch
        </span>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: 'Active', value: '12' },
            { label: 'Today', value: '128' },
            { label: 'Riders', value: '9' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-surface-alt px-3 py-2.5">
              <p className="text-base font-bold text-foreground leading-tight">{s.value}</p>
              <p className="text-[11px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <ul className="space-y-2.5">
          {ORDERS.map((o) => (
            <li
              key={o.id}
              className="flex items-center justify-between rounded-xl border border-border px-3.5 py-2.5"
            >
              <div className="min-w-0">
                <p className="text-xs font-semibold text-foreground font-mono">{o.id}</p>
                <p className="text-[11px] text-muted-foreground truncate">{o.route}</p>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${toneClass[o.tone]}`}
              >
                {o.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function ForBusiness() {
  return (
    <section id="for-business" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary/[0.06] border border-primary/15 overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center gap-10 p-8 sm:p-12 lg:p-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                For Business
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Built for businesses that deliver
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed mb-6">
                Whether you're running a restaurant, a shop, or an errand-heavy
                operation, Constant's merchant dashboard gives you the same
                visibility your customers get — all in one place.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Live order status across every rider',
                  'Rider assignment and route visibility',
                  'Delivery analytics for your team',
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

              <a
                href={`${DISPATCH_HUB_URL}/auth/register`}
                className="btn-primary px-7 py-3 rounded-xl text-base font-semibold inline-flex items-center gap-2"
              >
                See Merchant Tools
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <DashboardMockup />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
