import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Intro overlay inspired by ElevenLabs onboarding: lens zoom + logo formation
export default function IntroOverlay({ onFinish = () => {} }) {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setDone(true)
      const t2 = setTimeout(onFinish, 600)
      return () => clearTimeout(t2)
    }, 2300)
    return () => clearTimeout(t)
  }, [onFinish])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-50 bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          {/* Lens zoom effect */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            initial={{ scale: 1.6, filter: 'blur(12px)' }}
            animate={{ scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a12] via-[#0b0f2b] to-black" />
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(1200px_600px_at_center,rgba(100,72,255,0.35),transparent)]" />
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(900px_450px_at_center,rgba(24,188,255,0.25),transparent)]" />
          </motion.div>

          {/* Nadit logo formation (glasses mount) */}
          <motion.div
            className="relative h-full w-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.div className="flex items-center gap-4" aria-label="Nadit logo intro">
              {/* Glasses icon built with two circles + bridge */}
              <motion.svg width="120" height="40" viewBox="0 0 120 40" fill="none"
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.circle cx="30" cy="20" r="12" stroke="url(#g1)" strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
                <motion.circle cx="90" cy="20" r="12" stroke="url(#g2)" strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.75 }}
                />
                <motion.line x1="42" y1="20" x2="78" y2="20" stroke="url(#g3)" strokeWidth="2.5"
                  initial={{ x2: 42 }}
                  animate={{ x2: 78 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                />
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="60" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#3B82F6" />
                  </linearGradient>
                  <linearGradient id="g2" x1="60" y1="0" x2="120" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#22D3EE" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                  <linearGradient id="g3" x1="0" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#111827" />
                    <stop offset="1" stopColor="#6B21A8" />
                  </linearGradient>
                </defs>
              </motion.svg>
              <motion.span
                className="text-4xl md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-[linear-gradient(90deg,#ffffff,rgba(255,255,255,0.75))]"
                initial={{ x: -8, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                Nadit
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Transition to black then reveal */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.4 }}
            style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 70%)' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
