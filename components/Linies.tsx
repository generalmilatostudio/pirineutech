'use client'

import { motion } from 'framer-motion'
import { Zap, Users, Leaf } from 'lucide-react'

const CARDS = [
  {
    Icon: Zap,
    title: 'Innovació tecnològica',
    text: 'Solucions tecnològiques adaptades a les necessitats reals del territori',
  },
  {
    Icon: Users,
    title: 'Col·laboració i talent',
    text: 'Connectem empreses, institucions i talent digital de la regió',
  },
  {
    Icon: Leaf,
    title: 'Sostenibilitat',
    text: "Tecnologia que respecta i potencia l'entorn natural del Pirineu",
  },
]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Linies() {
  return (
    <>
      <hr className="border-t border-[#e8e8e8] mx-0" />

      <section className="relative overflow-hidden" style={{ minHeight: '70vh' }}>

        {/* Background image */}
        <img
          src="https://cdn.midjourney.com/4bec3011-c080-44bb-91a9-18bafe6e0477/0_1.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/60" />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">

            {/* Top block */}
            <motion.div className="py-24" {...fadeUp(0)}>
              <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl">
                <span className="border border-[#e0e0e0] rounded-full px-3 py-1 text-xs text-[#666] inline-block mb-6">
                  Línies d&apos;actuació
                </span>

                <h2
                  className="font-playfair text-[#0f0f0f] font-normal leading-tight"
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Treballem en projectes que transformen el territori gràcies a la tecnologia
                </h2>

                <p className="text-base text-[#555] leading-[1.7] mt-4">
                  A Pirineu Tech treballem per impulsar projectes que transformin el territori,
                  combinant innovació tecnològica i sostenibilitat.
                </p>

                <a
                  href="#contacte"
                  className="mt-6 inline-block text-sm font-medium text-[#0f0f0f] border-b border-[#0f0f0f]/20 hover:border-[#0f0f0f] transition-colors duration-150"
                >
                  Contacta amb nosaltres →
                </a>
              </div>
            </motion.div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-24">
              {CARDS.map(({ Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/60 cursor-default"
                  style={{ transition: 'background 0.3s, transform 0.3s' }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.background =
                      'rgba(255,255,255,0.95)'
                    ;(e.currentTarget as HTMLDivElement).style.transform =
                      'translateY(-4px)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.background =
                      'rgba(255,255,255,0.80)'
                    ;(e.currentTarget as HTMLDivElement).style.transform =
                      'translateY(0)'
                  }}
                  {...fadeUp(i * 0.1)}
                >
                  <div className="w-10 h-10 bg-[#f5f2ee] rounded-xl flex items-center justify-center mb-6">
                    <Icon size={20} color="#0f0f0f" strokeWidth={1.5} />
                  </div>
                  <p className="text-base font-medium text-[#0f0f0f] mb-2">{title}</p>
                  <p className="text-sm text-[#666] leading-[1.6]">{text}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
