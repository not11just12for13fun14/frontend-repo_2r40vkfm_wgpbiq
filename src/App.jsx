import { useState } from 'react'
import IntroOverlay from './components/IntroOverlay'
import Hero from './components/Hero'
import MarqueeUniversities from './components/MarqueeUniversities'
import Sections from './components/Sections'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <div className="min-h-screen bg-white text-[#0b0f18]">
      {showIntro && <IntroOverlay onFinish={() => setShowIntro(false)} />}
      {/* Minimal header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 mix-blend-difference">
        <div className="text-white font-semibold tracking-tight">Nadit</div>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#come-funziona" className="hover:text-white">Come funziona</a>
          <a href="#cosa-facciamo" className="hover:text-white">Cosa facciamo</a>
          <a href="#chi-siamo" className="hover:text-white">Chi siamo</a>
        </nav>
      </header>

      <main>
        <Hero />
        <MarqueeUniversities />
        <Sections />
      </main>

      <footer className="py-10 text-center text-sm text-black/60 bg-white">© {new Date().getFullYear()} Nadit</footer>
    </div>
  )
}

export default App
