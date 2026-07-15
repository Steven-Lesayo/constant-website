import { FOOTER_LINKS, DISPATCH_HUB_URL } from '../data/constants'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white font-bold text-sm">
                C
              </div>
              <span className="text-white font-bold text-lg">Constant</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your world, delivered faster. Real-time tracking, reliable couriers,
              and seamless delivery experiences.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-semibold text-sm mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#C026D3] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            Constant @2026. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href={`${DISPATCH_HUB_URL}/privacy`} className="hover:text-[#C026D3] transition-colors">
              Privacy Policy
            </a>
            <a href={`${DISPATCH_HUB_URL}/terms`} className="hover:text-[#C026D3] transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
