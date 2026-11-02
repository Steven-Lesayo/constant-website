import { Link } from 'react-router-dom'
import brandLogo from '../assets/constant-logo-brand.png'

export default function DeleteAccount() {
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

        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Delete Your Account</h1>
        <p className="text-muted-foreground text-sm mb-10">
          How to permanently delete your Constant account and associated data
        </p>

        <div className="prose prose-sm prose-invert max-w-none space-y-8 text-muted-foreground">
          <p>
            You can delete your Constant account directly in the app. Deletion is
            <strong> immediate</strong> — once confirmed, your account is permanently
            removed and you will be signed out.
          </p>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">Option 1: Delete your account in the app (recommended)</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Open <strong>Constant</strong> and go to <strong>Settings</strong>.
              </li>
              <li>
                Scroll to the bottom and tap <strong>Delete account</strong>.
              </li>
              <li>
                Type <strong>DELETE</strong> to confirm, enter your <strong>password</strong>,
                and tap <strong>Delete</strong>.
              </li>
              <li>
                You will be signed out immediately and your request will be processed.
              </li>
            </ol>

            <h3 className="text-foreground font-medium mt-6 mb-2">What is deleted immediately</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your profile (name, email address, phone number)</li>
              <li>Your sign-in credentials</li>
              <li>Your saved places and addresses</li>
              <li>Your support requests</li>
              <li>Any active deliveries are cancelled at this time</li>
            </ul>

            <h3 className="text-foreground font-medium mt-6 mb-2">What is kept</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Delivery and transaction records — retained only as long as required
                for legal, security, and financial-compliance purposes, then deleted
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">Option 2: Request deletion by contacting us</h2>
            <p>If you cannot access the app, contact us and we will delete your account for you:</p>
            <p className="mt-2">
              <strong>Email:</strong> lesitez@live.com<br />
              <strong>Phone:</strong> 0799200020
            </p>
            <p className="mt-2">
              Include the email address or phone number registered to your account.
              We will process your request as soon as we can verify it.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">Data deletion requests</h2>
            <p>
              To request deletion of specific data (such as chat history) without
              deleting your account, contact us at the email above. We will remove
              the data where possible, subject to any legal retention obligations.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold mb-4">Learn more</h2>
            <p>
              See our{' '}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{' '}
              for full details on how we handle your information.
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
