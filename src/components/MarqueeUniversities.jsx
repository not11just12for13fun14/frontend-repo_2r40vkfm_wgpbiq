import { useMemo } from 'react'
import { motion } from 'framer-motion'

const logos = [
  { name: 'MIT', svg: (cls) => (<svg className={cls} viewBox="0 0 100 24" fill="currentColor" aria-label="MIT"><rect x="0" y="0" width="6" height="24"/><rect x="10" y="0" width="6" height="24"/><rect x="20" y="12" width="6" height="12"/><rect x="30" y="0" width="6" height="24"/><rect x="40" y="0" width="6" height="24"/></svg>) },
  { name: 'Harvard', svg: (cls) => (<svg className={cls} viewBox="0 0 200 40" fill="currentColor" aria-label="Harvard"><rect x="0" y="0" width="24" height="24" rx="3"/><rect x="30" y="0" width="120" height="12" rx="2"/><rect x="30" y="16" width="160" height="8" rx="2"/></svg>) },
  { name: 'Oxford', svg: (cls) => (<svg className={cls} viewBox="0 0 160 40" fill="currentColor" aria-label="Oxford"><circle cx="20" cy="20" r="18"/><rect x="46" y="8" width="100" height="8" rx="4"/><rect x="46" y="24" width="80" height="8" rx="4"/></svg>) },
  { name: 'Cambridge', svg: (cls) => (<svg className={cls} viewBox="0 0 200 40" fill="currentColor" aria-label="Cambridge"><rect x="0" y="0" width="36" height="36" rx="6"/><rect x="44" y="8" width="150" height="8" rx="4"/><rect x="44" y="24" width="130" height="8" rx="4"/></svg>) },
  { name: 'Bocconi', svg: (cls) => (<svg className={cls} viewBox="0 0 160 40" fill="currentColor" aria-label="Bocconi"><rect x="0" y="8" width="140" height="8" rx="4"/><rect x="0" y="24" width="100" height="8" rx="4"/></svg>) },
  { name: 'LUISS', svg: (cls) => (<svg className={cls} viewBox="0 0 120 40" fill="currentColor" aria-label="LUISS"><rect x="0" y="8" width="16" height="24" rx="2"/><rect x="24" y="8" width="16" height="24" rx="2"/><rect x="48" y="8" width="16" height="24" rx="2"/><rect x="72" y="8" width="16" height="24" rx="2"/></svg>) },
  { name: 'ESSEC', svg: (cls) => (<svg className={cls} viewBox="0 0 140 40" fill="currentColor" aria-label="ESSEC"><rect x="0" y="8" width="120" height="8" rx="4"/><rect x="0" y="24" width="90" height="8" rx="4"/></svg>) },
  { name: 'ETH', svg: (cls) => (<svg className={cls} viewBox="0 0 120 40" fill="currentColor" aria-label="ETH"><rect x="0" y="8" width="80" height="8" rx="4"/><rect x="0" y="24" width="60" height="8" rx="4"/></svg>) },
]

export default function MarqueeUniversities() {
  const list = useMemo(() => [...logos, ...logos, ...logos], [])
  return (
    <section className="relative py-16 md:py-20 bg-[#0c111c]">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(700px_350px_at_50%_0%,rgba(139,92,246,0.18),transparent)]" />
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-14 items-center will-change-transform"
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
        >
          {list.map((l, i) => (
            <div key={`${l.name}-${i}`} className="group shrink-0">
              <div className="text-white/60 group-hover:text-white transition-colors">
                {l.svg('w-32 h-10')}
              </div>
              <div className="h-0.5 mt-2 w-0 group-hover:w-full transition-all duration-500 bg-white/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
