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

        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Terms and Conditions</h1>
        <p className="text-muted-foreground text-sm mb-10">
          Last updated: July 2026
        </p>

        <div className="space-y-8 text-muted-foreground">
          <p>
            These Terms and Conditions ("Terms") govern your access to and use of the Constant mobile app, website, and dispatch hub (collectively, the "Services"), operated by Constant ("we," "us," "our"). By creating an account or using the Services, you agree to these Terms.
          </p>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">1. Who These Terms Apply To</h2>
            <p>Constant serves several types of users, each with additional obligations noted below:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Customers</strong> — request and pay for deliveries</li>
              <li><strong>Riders</strong> — accept and fulfill delivery requests</li>
              <li><strong>Merchants</strong> — request deliveries on behalf of their own customers via the dispatch hub</li>
              <li><strong>Admin/Staff</strong> — operate and manage the platform internally</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">2. Eligibility</h2>
            <p>You must be at least 18 years old to create an account and use the Services. By using the Services, you confirm that you meet this requirement and that all information you provide is accurate.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">3. Account Registration</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
              <li>You must provide accurate registration information and keep it up to date.</li>
              <li>You are responsible for all activity that occurs under your account.</li>
              <li>We reserve the right to suspend or terminate accounts that provide false information, violate these Terms, or are used fraudulently.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">4. How the Service Works</h2>

            <h3 className="text-foreground font-medium mt-4 mb-2">4.1 For Customers</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>You may request on-demand or scheduled deliveries through the app.</li>
              <li>Delivery pricing, availability, and estimated timing are provided at the time of request and may vary based on distance, demand, and location.</li>
              <li>You are responsible for ensuring the accuracy of pickup/drop-off details and that delivered items comply with Section 7 (Prohibited Items).</li>
            </ul>

            <h3 className="text-foreground font-medium mt-4 mb-2">4.2 For Riders</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Riders are independent contractors, not employees of Constant, unless otherwise agreed in a separate written agreement.</li>
              <li>Riders are responsible for complying with applicable traffic laws, holding any required licenses/permits, and safely handling deliveries.</li>
              <li>Constant may deactivate rider accounts for safety violations, repeated customer complaints, or fraudulent activity.</li>
            </ul>

            <h3 className="text-foreground font-medium mt-4 mb-2">4.3 For Merchants</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Merchants may request deliveries on behalf of their end customers through the dispatch hub.</li>
              <li>Merchants are responsible for the accuracy of order and address details submitted through their dashboard.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">5. Payments</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Payments may be made via M-Pesa or cash, as selected at the time of request.</li>
              <li>Delivery fees are disclosed before you confirm a request.</li>
              <li>M-Pesa transactions are processed through Safaricom's payment infrastructure; Constant does not store your M-Pesa PIN.</li>
              <li>Refunds, where applicable, will be assessed on a case-by-case basis (e.g., failed delivery, platform error).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">6. Cancellations</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Customers may cancel a delivery request before a rider is assigned at no charge.</li>
              <li>Cancellations after a rider has been assigned or has begun travel may incur a cancellation fee.</li>
              <li>Constant reserves the right to cancel or reassign a delivery due to safety concerns, rider unavailability, or prohibited item detection.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">7. Prohibited Items and Conduct</h2>
            <p className="mb-2">You may not use Constant to request delivery of:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Illegal substances or contraband</li>
              <li>Weapons or explosives</li>
              <li>Hazardous materials</li>
              <li>Any item prohibited under Kenyan law</li>
            </ul>
            <p className="mt-4 mb-2">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use the Services for any unlawful purpose</li>
              <li>Harass, threaten, or abuse riders, customers, or staff (including through in-app chat)</li>
              <li>Attempt to interfere with the security or normal operation of the Services</li>
              <li>Misrepresent your identity or the contents of a delivery request</li>
            </ul>
            <p className="mt-2">Violation of this section may result in immediate account suspension or termination, and may be reported to relevant authorities where applicable.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">8. Real-Time Tracking and Communication</h2>
            <p>By using the Services, you consent to location tracking as described in our Privacy Policy, which is necessary for rider assignment, live tracking, and delivery coordination. In-app chat is provided to facilitate delivery coordination and should not be used for unrelated communication.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Constant acts as a platform connecting customers, riders, and merchants, and is not a common carrier or insurer of goods.</li>
              <li>Constant is not liable for indirect, incidental, or consequential damages arising from use of the Services.</li>
              <li>Constant's total liability for any claim relating to a specific delivery is limited to the fee paid for that delivery, except where liability cannot be limited by law.</li>
              <li>We do not guarantee uninterrupted or error-free operation of the Services (including tracking, notifications, or chat features).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">10. Account Suspension and Termination</h2>
            <p>We may suspend or terminate your access to the Services, with or without notice, if:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>You violate these Terms</li>
              <li>We suspect fraudulent, abusive, or unlawful activity</li>
              <li>Required by law or regulatory request</li>
            </ul>
            <p className="mt-2">You may stop using the Services and request account deletion at any time in accordance with our Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">11. Intellectual Property</h2>
            <p>All content, branding, and technology associated with Constant (including the app, website, and dispatch hub) are the property of Constant or its licensors. You may not copy, modify, or distribute any part of the Services without permission.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">12. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the Services after changes take effect constitutes acceptance of the revised Terms. Where changes are significant, we will provide additional notice.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">13. Governing Law and Disputes</h2>
            <p>These Terms are governed by the laws of Kenya. Any disputes arising from these Terms or use of the Services will be subject to the jurisdiction of the courts of Kenya, unless otherwise required by applicable law.</p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">14. Contact Us</h2>
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
