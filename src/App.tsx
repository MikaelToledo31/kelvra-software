import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { About } from './components/sections/About'
import { Benefits } from './components/sections/Benefits'
import { ContactCTA } from './components/sections/ContactCTA'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Testimonials } from './components/sections/Testimonials'

export default function App() {
  return (
    <>
      <a className="sr skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Projects />
        <About />
        <Benefits />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
