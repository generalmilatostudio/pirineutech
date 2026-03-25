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
        className="relative overflow-hidden flex items-end justify-start pb-24 pt-40 px-6 md:px-16 lg:px-24"
        style={{ minHeight: '80vh' }}
      >
        {/* Background image */}
        <img
          src="https://cdn.midjourney.com/f9f1a737-a8c1-4703-a67c-d7ab78c2ffdd/0_1.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Content — bottom-left frosted glass card */}
        <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 w-fit max-w-lg">
          <motion.div {...fadeUp(0)}>
            <span className="border border-[#e0e0e0] rounded-full px-3 py-1 text-xs text-[#666] inline-block mb-6">
              Col·labora
            </span>
          </motion.div>

          <motion.h2
            className="font-playfair text-[#0f0f0f] font-normal leading-[1.08] mb-4"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              letterSpacing: '-0.02em',
            }}
            {...fadeUp(0.1)}
          >
            El canvi no espera.
          </motion.h2>

          <motion.p
            className="text-base text-[#555] leading-[1.7] mb-8"
            {...fadeUp(0.2)}
          >
            Uneix la teva organització a Pirineu Tech i forma part de la xarxa que
            definirà el futur tecnològic de l&apos;Alt Pirineu i Aran.
          </motion.p>

          <motion.div {...fadeUp(0.3)}>
            <a
              href="#contacte"
              className="inline-block bg-[#0f0f0f] text-white rounded-full px-8 py-3 text-sm font-medium transition-all duration-200 hover:bg-[#333] hover:scale-[1.02]"
            >
              Parlem ›
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
