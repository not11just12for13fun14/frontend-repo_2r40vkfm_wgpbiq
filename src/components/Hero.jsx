import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0f18]">
      {/* Radial gradient auras matching brief */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(800px_400px_at_50%_30%,rgba(139,92,246,0.25),transparent)]" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(900px_450px_at_50%_70%,rgba(59,130,246,0.18),transparent)]" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(600px_300px_at_20%_80%,rgba(34,211,238,0.18),transparent)]" />
      </div>

      {/* Spline animation center */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Orientamento universitario, potenziato dall'intelligenza artificiale
        </motion.h1>
        <motion.p
          className="mt-4 md:mt-6 text-base md:text-lg text-white/70"
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.7 }}
        >
          Nadit analizza il tuo profilo, capisce le tue ambizioni e ti guida con chiarezza verso il tuo percorso ideale.
        </motion.p>
      </div>
    </section>
  )
}
