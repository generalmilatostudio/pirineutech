'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Visio() {
  return (
    <>
      <hr className="border-t border-[#e8e8e8] mx-0" />

      <section className="bg-[#f5f2ee] py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <motion.div {...fadeUp(0)}>
            <span className="border border-[#e0e0e0] rounded-full px-3 py-1 text-xs text-[#666] inline-block mb-8">
              La nostra visió
            </span>

            <h2
              className="font-playfair text-[#0f0f0f] font-normal leading-[1.08]"
              style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
                letterSpacing: '-0.02em',
              }}
            >
              <span className="block">Pensem en dècades.</span>
              <span className="block pl-8">No en trimestres.</span>
            </h2>
          </motion.div>

          {/* Right column */}
          <motion.div className="flex items-center" {...fadeUp(0.2)}>
            <p className="text-lg text-[#888] leading-[1.7] max-w-sm">
              La transició digital del Pirineu no és una opció. És una necessitat.
              Una regió on la tecnologia no és una amenaça per a l&apos;entorn,
              sinó el seu millor aliat.
            </p>
          </motion.div>

        </div>
      </section>
    </>
  )
}
