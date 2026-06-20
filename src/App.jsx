import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Education from './component/Education'
import Skills from './component/Skills'
import Certifications from './component/certifications'
import Contact from './component/Contact'
import Footer from './component/Footer'
import ScrollToTop from './component/ScrollToTop'
import Loader from './component/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <div className="app" key="app">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Certifications />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </AnimatePresence>
  )
}

export default App