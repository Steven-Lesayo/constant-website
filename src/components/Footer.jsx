import { FOOTER_LINKS, DISPATCH_HUB_URL } from '../data/constants'
import brandLogo from '../assets/constant-logo-brand.png'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src={brandLogo}
                alt="Constant"
                className="w-8 h-8 rounded-lg object-cover"
                style={{ boxShadow: '0 10px 30px rgba(124, 58, 237, 0.24)' }}
              />
              <span className="text-foreground font-bold text-lg">Constant</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Delivery you can count on.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-foreground font-semibold text-sm mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; 2026 Constant. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href={`${DISPATCH_HUB_URL}/privacy`} className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href={`${DISPATCH_HUB_URL}/terms`} className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
