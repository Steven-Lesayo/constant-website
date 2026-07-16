import { Link } from 'react-router-dom'
import brandLogo from '../assets/constant-logo-brand.png'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <nav className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Constant
          </Link>
        </nav>

        <div className="flex items-center gap-2.5 mb-8">
          <img
            src={brandLogo}
            alt="Constant"
            className="w-8 h-8 rounded-lg object-cover"
            style={{ boxShadow: '0 10px 30px rgba(124, 58, 237, 0.24)' }}
          />
          <span className="text-foreground font-bold text-lg">Constant</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-10">
          Last updated: July 2026
        </p>

        <div className="prose prose-sm prose-invert max-w-none space-y-8 text-muted-foreground">
          <p>
            This Privacy Policy explains how Constant ("we," "us," "our") collects, uses, shares, and protects information when you use the Constant mobile app, website, or dispatch hub (collectively, the "Services").
          </p>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">1. Information We Collect</h2>

            <h3 className="text-foreground font-medium mt-4 mb-2">1.1 Information you give us directly</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name, phone number, and email address when you create an account</li>
              <li>Delivery pickup and drop-off addresses</li>
              <li>Payment method selection (M-Pesa or cash)</li>
              <li>Messages sent through in-app chat with riders or support</li>
              <li>Feedback, ratings, and support requests</li>
            </ul>

            <h3 className="text-foreground font-medium mt-4 mb-2">1.2 Information collected automatically</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Location data</strong>: real-time GPS location during active deliveries, used to show live tracking to customers and coordinate riders</li>
              <li><strong>Device information</strong>: device type, operating system, app version, and push notification tokens (for delivery status alerts)</li>
              <li><strong>Usage data</strong>: pages visited, features used, and general app interaction data</li>
              <li><strong>Log and error data</strong>: technical logs (including through our error-tracking tool) to diagnose crashes and bugs</li>
            </ul>

            <h3 className="text-foreground font-medium mt-4 mb-2">1.3 Information from third parties</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Firebase (Google)</strong>: used for authentication — we receive a verified identity token when you sign in, not your raw password</li>
              <li><strong>M-Pesa (Safaricom)</strong>: payment confirmation data when you pay via M-Pesa; we do not store your M-Pesa PIN or full financial account details</li>
              <li>Merchant partners may share delivery request details on your behalf if you order through a partnered business</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Create and manage your account</li>
              <li>Match you with available riders and coordinate deliveries</li>
              <li>Show real-time tracking of your delivery</li>
              <li>Process payments via M-Pesa or confirm cash payment</li>
              <li>Send delivery status notifications</li>
              <li>Enable in-app chat between customers, riders, and support/dispatch staff</li>
              <li>Monitor and improve platform performance and reliability</li>
              <li>Detect, investigate, and prevent fraud, abuse, or security incidents</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-2">We do <strong>not</strong> sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">3. Who We Share Information With</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Riders</strong>: assigned riders receive your delivery address and, where needed, your live location and chat messages to complete the delivery</li>
              <li><strong>Merchants</strong>: if you order through a merchant partner, they receive delivery status relevant to your order</li>
              <li><strong>Service providers</strong>: infrastructure and processing partners that help us operate the platform, including cloud hosting, Firebase (authentication), M-Pesa / Safaricom (payment processing), and error monitoring and analytics tools</li>
              <li><strong>Legal and safety purposes</strong>: we may disclose information if required by law, to protect rights, safety, or to investigate fraud or misuse</li>
            </ul>
            <p className="mt-2">Each of these parties only receives the information necessary to perform their function and is expected to handle it securely.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">4. Data Retention</h2>
            <p>We retain personal information for as long as your account is active or as needed to provide the Services. We may retain certain data longer where required for legal, security, or dispute-resolution purposes (for example, transaction records for financial compliance). You can request account deletion — see Section 6.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">5. Data Security</h2>
            <p>We apply reasonable technical and organizational measures to protect your information, including encrypted authentication, access controls based on staff roles, and monitoring for unauthorized access. No system is perfectly secure, and we cannot guarantee absolute security of information transmitted over the internet.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">6. Your Rights and Choices</h2>
            <p>Depending on applicable law, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your account and associated data</li>
              <li>Withdraw consent for location tracking (note: this may limit your ability to use real-time delivery features)</li>
              <li>Opt out of non-essential push notifications through your device settings</li>
            </ul>
            <p className="mt-2">To exercise these rights, contact us using the details in Section 10.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">7. Location Data Specifically</h2>
            <p>Location tracking is central to how Constant works. We collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Customer location</strong>: to determine pickup points and show your position to assigned riders during active deliveries</li>
              <li><strong>Rider location</strong>: continuously during active shifts/deliveries, to provide live tracking and optimize assignment</li>
            </ul>
            <p>Location data is used only for operational purposes (matching, tracking, safety, and support) and is not shared publicly.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">8. Children's Privacy</h2>
            <p>Constant is not directed at children under 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact us so we can remove it.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will indicate the date of the latest revision at the top of this page, and where changes are significant, we will provide additional notice (e.g., in-app notification).</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or how your information is handled, contact us at:</p>
            <p className="mt-2">
              <strong>Email:</strong> lesitez@live.com<br />
              <strong>Phone:</strong> 0799200020
            </p>
          </section>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <Link to="/" className="text-primary hover:underline text-sm">
            &larr; Back to Constant
          </Link>
        </div>
      </div>
    </div>
  )
}
