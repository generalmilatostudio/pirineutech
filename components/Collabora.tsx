'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Collabora() {
  return (
    <>
      <hr className="border-t border-[#e8e8e8] mx-0" />

      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight: '80vh' }}
      >
        {/* Background image */}
        <img
          src="https://cdn.midjourney.com/f9f1a737-a8c1-4703-a67c-d7ab78c2ffdd/0_1.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center py-24">
          <motion.div {...fadeUp(0)}>
            <span className="bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 text-xs text-white inline-block mb-8">
              Col·labora
            </span>
          </motion.div>

          <motion.h2
            className="font-playfair text-[#0f0f0f] font-normal leading-[1.08] mb-6"
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              letterSpacing: '-0.02em',
            }}
            {...fadeUp(0.1)}
          >
            El canvi no espera.
          </motion.h2>

          <motion.p
            className="text-lg text-[#444] max-w-md mx-auto leading-[1.7] mb-10"
            {...fadeUp(0.2)}
          >
            Uneix la teva organització a Pirineu Tech i forma part de la xarxa que
            definirà el futur tecnològic de l&apos;Alt Pirineu i Aran.
          </motion.p>

          <motion.div {...fadeUp(0.3)}>
            <a
              href="#contacte"
              className="inline-block bg-[#0f0f0f] text-white rounded-full px-8 py-4 text-sm font-medium transition-all duration-200 hover:bg-[#333] hover:scale-[1.02]"
            >
              Parlem ›
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
