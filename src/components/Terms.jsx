import { Link } from 'react-router-dom'
import brandLogo from '../assets/constant-logo-brand.png'

export default function Terms() {
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

        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground text-sm mb-10">
          Last updated: July 2026
        </p>

        <div className="space-y-8 text-muted-foreground">
          <p>
            These Terms of Service ("Terms") govern your use of the Constant mobile app, website, and dispatch hub (collectively, the "Services"). By using Constant, you agree to these Terms. If you do not agree, do not use the Services.
          </p>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">1. The Service</h2>
            <p>Constant connects users with independent delivery riders for the purpose of transporting parcels and goods. We facilitate the connection between customers, riders, and merchants — we are not a common carrier and do not transport goods ourselves.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">2. Eligibility</h2>
            <p>You must be at least 18 years old to use the Services. By creating an account, you represent that you are legally capable of entering into binding contracts.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">3. Account Registration</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You agree to provide accurate, current information and to update it as necessary.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">4. Delivery Rules</h2>
            <h3 className="text-foreground font-medium mt-4 mb-2">4.1 Prohibited Items</h3>
            <p>You may not use Constant to transport illegal items, hazardous materials, firearms, perishable goods without proper packaging, or any item whose transport violates applicable law. Violation may result in account termination and legal action.</p>

            <h3 className="text-foreground font-medium mt-4 mb-2">4.2 Collection Period</h3>
            <p>If a package is not collected within 3 days of delivery attempt, our support team will contact you to arrange redelivery or storage at a nearby hub. Storage fees may apply after this period.</p>

            <h3 className="text-foreground font-medium mt-4 mb-2">4.3 Damaged Items</h3>
            <p>Every package is handled with care. In the rare event of damage, contact our support team within 24 hours of delivery to initiate a claims process. Claims are assessed on a case-by-case basis and may be subject to investigation.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">5. Payments and Fees</h2>
            <p>Delivery fees are displayed before you confirm a request. Payment may be made via M-Pesa or cash at the point of delivery. If a delivery fails due to reasons on our end, you receive a full refund. Cancellations made before pickup are also fully refunded.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">6. Rider Conduct and Responsibility</h2>
            <p>Riders are independent contractors, not employees of Constant. While we facilitate the connection and provide tracking and support tools, we are not responsible for the conduct of riders. Concerns about rider behaviour should be reported through our support channels.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">7. Merchant Accounts</h2>
            <p>Merchant accounts are subject to additional approval. Pending approval, merchants have limited access to the platform. Approved merchants are responsible for ensuring the accuracy of delivery information provided through their account.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">8. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Use the Services for any unlawful purpose</li>
              <li>Attempt to manipulate the platform, including creating fake delivery requests</li>
              <li>Harass, abuse, or threaten riders, customers, or staff</li>
              <li>Access or attempt to access accounts without authorisation</li>
              <li>Use automated tools to interact with the platform without our written consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">9. Termination</h2>
            <p>We reserve the right to suspend or terminate accounts that violate these Terms or engage in conduct that we deem harmful to the platform, its users, or the public.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Constant shall not be liable for indirect, incidental, or consequential damages arising out of your use of the Services. Our total liability is limited to the amount you paid for the specific delivery giving rise to the claim.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">11. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the Services after changes constitutes acceptance of the new Terms. We will notify you of significant changes via in-app notification or email.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">12. Contact</h2>
            <p>For questions about these Terms, contact us at:</p>
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
