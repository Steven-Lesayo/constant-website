import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import ForBusiness from './components/ForBusiness'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import TrackOrder from './components/TrackOrder'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Privacy from './components/Privacy'
import Terms from './components/Terms'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <ForBusiness />
      <FAQ />
      <FinalCTA />
      <TrackOrder />
      <ContactForm />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
