import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
import TypeformModal from './components/TypeformModal'
import { useState } from 'react'

export default function App() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <CTA onSignUp={() => setIsTypeformOpen(true)} />
      </main>
      <Footer />
      <TypeformModal open={isTypeformOpen} setOpen={setIsTypeformOpen} />
    </div>
  )
}