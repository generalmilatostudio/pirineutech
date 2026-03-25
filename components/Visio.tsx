'use client'

import { motion } from 'framer-motion'

const WORDS = 'Pensem en dècades. No en trimestres.'.split(' ')
const SUBTEXT_DELAY = WORDS.length * 0.08 + 0.3

export default function Visio() {
  return (
    <>
      <hr className="border-t border-[#1a1a1a] mx-0" />

      <section className="bg-[#0f0f0f] py-40 px-12">
        <div className="max-w-4xl mx-auto text-center">

          {/* Label */}
          <motion.p
            className="text-xs uppercase tracking-[0.15em] text-[#2D6A4F] font-medium mb-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            La nostra visió
          </motion.p>

          {/* Word-by-word headline */}
          <h2
            className="font-playfair text-white font-normal leading-[1.1]"
            style={{
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              letterSpacing: '-0.02em',
            }}
            aria-label="Pensem en dècades. No en trimestres."
          >
            {WORDS.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          {/* Subtext */}
          <motion.p
            className="text-lg text-[#666] max-w-xl mx-auto leading-[1.7] mt-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: SUBTEXT_DELAY, ease: 'easeOut' }}
          >
            La transició digital del Pirineu no és una opció. És una necessitat. Una
            regió on la tecnologia no és una amenaça per a l&apos;entorn, sinó el seu
            millor aliat.
          </motion.p>

        </div>
      </section>
    </>
  )
}
