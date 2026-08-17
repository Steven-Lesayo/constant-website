import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { HERO, APK_URL, HERO_TRUST } from '../data/constants'

function TrackingMockup() {
  return (
    <div className="relative mx-auto w-[290px] sm:w-[330px]">
      {/* Phone frame */}
      <div className="relative rounded-[2.6rem] border border-border bg-card p-2.5 shadow-lg">
        <div className="relative rounded-[2.1rem] overflow-hidden bg-[#EAF0F7] aspect-[9/19]">
          {/* Map */}
          <svg
            viewBox="0 0 300 640"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* blocks */}
            <g stroke="#D6DEE9" strokeWidth="6" fill="none">
              <path d="M0 180h300M0 360h300M0 540h300" />
              <path d="M140 0v640M250 0v640M60 0v640" />
            </g>
            <g stroke="#E6EDF5" strokeWidth="3" fill="none">
              <path d="M0 120h300M0 300h300M0 470h300" />
              <path d="M200 0v640M100 0v640" />
            </g>
            {/* roads */}
            <g stroke="#C9D4E2" strokeWidth="10" fill="none" strokeLinecap="round">
              <path d="M-10 90 C 80 90, 90 200, 190 200" />
              <path d="M120 -10 C 140 150, 60 260, 90 380" />
              <path d="M310 250 C 240 260, 220 340, 240 440" />
            </g>
            {/* route */}
            <path
              d="M 90 380 C 120 300, 200 250, 240 440"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="5"
              strokeLinecap="round"
              className="animate-dash"
              opacity="0.8"
            />
            {/* pickup */}
            <g transform="translate(90 380)">
              <circle r="13" fill="#7C3AED" opacity="0.2" />
              <circle r="8" fill="#7C3AED" />
              <circle r="3" fill="white" />
            </g>
            {/* rider */}
            <g transform="translate(168 318)">
              <circle r="16" fill="#22C55E" opacity="0.25" className="dot-pulse" />
              <circle r="9" fill="#22C55E" />
              <circle r="3.5" fill="white" />
            </g>
            {/* dropoff */}
            <g transform="translate(240 440)">
              <circle r="13" fill="#F59E0B" opacity="0.2" />
              <circle r="8" fill="#F59E0B" />
              <circle r="3" fill="white" />
            </g>
          </svg>

          {/* Status chips */}
          <div className="absolute top-4 left-3 right-3 flex items-center justify-between">
            <div className="bg-white/95 rounded-full px-3 py-1.5 shadow-sm text-[11px] font-semibold text-foreground flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              In transit
            </div>
            <div className="bg-white/95 rounded-full px-3 py-1.5 shadow-sm text-[11px] font-semibold text-foreground">
              ETA 8 min
            </div>
          </div>
          <div className="absolute bottom-4 left-3 right-3 bg-white/95 rounded-2xl p-3 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                Kenyatta Ave · Kilimani
              </div>
              <span className="text-[11px] font-semibold text-foreground">KES 250</span>
            </div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full w-3/4 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* floating badge */}
      <div className="absolute -right-6 top-16 rotate-3 bg-card border border-border rounded-2xl px-4 py-3 shadow-md">
        <p className="text-[10px] text-muted-foreground">Delivery</p>
        <p className="text-sm font-bold text-foreground">#C-250817-1014</p>
      </div>
      <div className="absolute -left-6 bottom-24 -rotate-2 bg-card border border-border rounded-2xl px-4 py-3 shadow-md">
        <p className="text-[10px] text-muted-foreground">Rider</p>
        <p className="text-sm font-semibold text-foreground">James · 4.9 ★</p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 gradient-hero animate-gradient" />
      <div className="absolute top-24 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-muted-foreground text-sm">{HERO.eyebrow}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-foreground leading-[1.1] mb-6">
              Your delivery.{' '}
              <span className="gradient-text">Tracked, on time, every time.</span>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mb-8">
              {HERO.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
              <a
                href={APK_URL}
                className="btn-primary px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Download the App
              </a>
              <Link
                to="for-business"
                spy
                smooth
                offset={-80}
                duration={500}
                className="group text-foreground/80 hover:text-primary font-semibold text-base inline-flex items-center gap-1.5 cursor-pointer"
              >
                Are you a business? Partner with Constant
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
              {HERO_TRUST.map((item) => (
                <span
                  key={item}
                  className="text-sm text-muted-foreground flex items-center gap-1.5"
                >
                  <svg
                    className="w-4 h-4 text-success shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </span>
              ))}
            </div>

            <div className="text-sm text-muted-foreground">{HERO.microcopy}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <TrackingMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
