import { motion } from 'framer-motion'

function Section({ title, children, dark = false }) {
  return (
    <section className={`${dark ? 'bg-[#070a12] text-white' : 'bg-white text-[#0b0f18]'} py-20 md:py-28 relative overflow-hidden`}>
      <div className={`pointer-events-none absolute inset-0 ${dark ? 'opacity-20 bg-[radial-gradient(600px_300px_at_50%_10%,rgba(99,102,241,0.35),transparent)]' : ''}`} />
      <div className="container mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-2xl md:text-4xl font-semibold"
          initial={{ y: 14, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h2>
        <div className="mt-6 md:mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}

export default function Sections() {
  return (
    <div>
      <Section title="Perché provare?" dark>
        <motion.p className="text-white/80 leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Personalizza la tua scelta universitaria. In pochi minuti, Nadit costruisce un profilo unico su di te e ti mostra con chiarezza dove puoi brillare. Scopri opportunità concrete e un piano d’azione, oggi.
        </motion.p>
      </Section>

      <Section title="Come funziona">
        <div className="grid md:grid-cols-3 gap-6">
          {[{t:'Rispondi',d:'Condividi interessi, attitudini, obiettivi.'},{t:'Scopri',d:'Ricevi suggerimenti mirati e percorsi su misura.'},{t:'Capisci',d:'Approfondisci perché certe strade sono giuste per te.'}].map((c,i)=> (
            <motion.div key={i} className="rounded-2xl p-6 border border-black/10 bg-white shadow-sm"
              initial={{ y: 14, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i*0.05, duration: 0.6 }}
            >
              <div className="text-sm uppercase tracking-wider text-[#6366f1] font-medium">{c.t}</div>
              <div className="mt-2 text-[#0b0f18]/80">{c.d}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Cresci con noi" dark>
        <div className="grid md:grid-cols-2 gap-6">
          {[{t:'Unisciti al Team',d:'Costruiamo la guida che avremmo voluto. Talenti curiosi e veloci sono i benvenuti.'},{t:'Credi in Noi',d:'Sostieni la nostra visione di orientamento chiaro, accessibile, di qualità.'}].map((c,i)=> (
            <motion.div key={i} className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur"
              initial={{ y: 14, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i*0.05, duration: 0.6 }}
            >
              <div className="text-sm uppercase tracking-wider text-white/70 font-medium">{c.t}</div>
              <div className="mt-2 text-white/80">{c.d}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-white/70 text-sm">Con affetto, Giovanni • Stefano • Simone</div>
      </Section>

      <Section title="Vision e Mission">
        <p className="text-[#0b0f18]/80 max-w-3xl">Vision: chiarezza per ogni studente. Mission: un assistente che ascolta davvero, spiega il perché e suggerisce azioni, con tecnologia che eleva le persone.</p>
      </Section>

      <Section title="Cosa significa Nadit" dark>
        <p className="text-white/80 max-w-3xl">Dal nadir al zenit: passare dall’ombra all’illuminazione. Portiamo luce nelle scelte complesse, con semplicità e precisione.</p>
      </Section>

      <Section title="Chi siamo">
        <div className="grid md:grid-cols-3 gap-6">
          {[{n:'Giovanni',b:'Strategia e prodotto.'},{n:'Stefano',b:'Tecnologia e dati.'},{n:'Simone',b:'Design e comunicazione.'}].map((p,i)=> (
            <motion.div key={i} className="rounded-2xl p-6 border border-black/10 bg-white shadow-sm flex flex-col items-center text-center"
              initial={{ y: 14, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i*0.05, duration: 0.6 }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 mb-3" />
              <div className="font-medium">{p.n}</div>
              <div className="text-sm text-[#0b0f18]/70">{p.b}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Feedback" dark>
        <FeedbackForm />
      </Section>
    </div>
  )
}

function FeedbackForm() {
  async function onSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = {
      name: fd.get('name') || undefined,
      email: fd.get('email') || undefined,
      message: fd.get('message') || '',
      source: 'website'
    }
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/feedback`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
    })
    const data = await res.json().catch(()=>({}))
    alert(data?.status === 'ok' ? 'Grazie per il tuo messaggio!' : 'Invio non riuscito, riprova.')
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={onSubmit} className="max-w-2xl">
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" placeholder="Nome" className="bg-white/5 text-white placeholder-white/40 rounded-xl px-4 py-3 border border-white/10 outline-none focus:ring-2 focus:ring-indigo-400/40" />
        <input type="email" name="email" placeholder="Email" className="bg-white/5 text-white placeholder-white/40 rounded-xl px-4 py-3 border border-white/10 outline-none focus:ring-2 focus:ring-indigo-400/40" />
      </div>
      <textarea name="message" required rows={5} placeholder="Lascia un messaggio"
        className="mt-4 w-full bg-white/5 text-white placeholder-white/40 rounded-xl px-4 py-3 border border-white/10 outline-none focus:ring-2 focus:ring-indigo-400/40" />
      <div className="mt-4 flex items-center gap-3">
        <button type="submit" className="px-5 py-3 rounded-xl bg-white text-[#0b0f18] hover:bg-white/90 transition">Invia</button>
        <span className="text-white/50 text-sm">Invio a info@nadit.com</span>
      </div>
    </form>
  )
}
