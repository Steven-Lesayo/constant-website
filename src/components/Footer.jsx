import { Link } from 'react-router-dom'
import { FOOTER_LINKS } from '../data/constants'
import brandLogo from '../assets/constant-logo-brand.png'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10">
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
              {group.title === 'Get the App' ? (
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href="/constant.apk"
                      className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-2.5 text-foreground hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                    >
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L13.792 12l2.906-2.907zM5.864 2.658L16.8 8.991l-2.3 2.3-8.636-8.633z" />
                      </svg>
                      <span className="leading-tight">
                        <span className="block text-[10px] text-muted-foreground">Get it on</span>
                        Google Play
                      </span>
                    </a>
                  </li>
                  <li>
                    <span className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-muted/60 px-3.5 py-2.5 opacity-60 cursor-not-allowed text-sm font-medium">
                      <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.03 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z" />
                      </svg>
                      <span className="leading-tight">
                        <span className="block text-[10px] text-muted-foreground">Coming soon on</span>
                        App Store
                      </span>
                    </span>
                  </li>
                </ul>
              ) : (
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
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; 2026 Constant. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
