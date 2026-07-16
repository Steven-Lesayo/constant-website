import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Screenshots from './components/Screenshots'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import ForBusiness from './components/ForBusiness'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import TrackOrder from './components/TrackOrder'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <Stats />
      <Testimonials />
      <ForBusiness />
      <FAQ />
      <FinalCTA />
      <TrackOrder />
      <ContactForm />
      <Footer />
    </div>
  )
}
