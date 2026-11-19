import SiteHeader from './components/SiteHeader.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import PracticeAreas from './sections/PracticeAreas.jsx'
import Partners from './sections/Partners.jsx'
import Contact from './sections/Contact.jsx'
import { useScrollReveal } from './hooks/useScrollReveal.js'

export default function App() {
  useScrollReveal()

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Partners />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
