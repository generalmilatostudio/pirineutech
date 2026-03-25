'use client'

import { motion } from 'framer-motion'

export default function Visio() {
  return (
    <>
      <hr className="border-t border-[#e8e8e8] mx-0" />

      <section className="relative bg-[#f5f2ee] py-32 px-6 md:px-12 lg:px-16 overflow-hidden">

        {/* Decorative opening quote */}
        <span
          className="absolute top-0 left-4 md:left-10 font-playfair leading-none pointer-events-none select-none"
          style={{
            fontSize: 'clamp(12rem, 20vw, 18rem)',
            color: 'rgba(0,0,0,0.06)',
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          &ldquo;
        </span>

        {/* Decorative closing quote */}
        <span
          className="absolute bottom-0 right-4 md:right-10 font-playfair leading-none pointer-events-none select-none"
          style={{
            fontSize: 'clamp(12rem, 20vw, 18rem)',
            color: 'rgba(0,0,0,0.06)',
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          &rdquo;
        </span>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="border border-[#e0e0e0] rounded-full px-3 py-1 text-xs text-[#666] inline-block mb-10">
              La nostra visió
            </span>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            className="font-playfair text-[#0f0f0f] font-normal leading-[1.2] max-w-3xl relative z-10"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontStyle: 'italic',
              letterSpacing: '-0.02em',
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            Pensem en dècades. No en trimestres.
          </motion.blockquote>

          {/* Attribution */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="w-12 h-px bg-[#0f0f0f] mb-4" />
            <p className="text-sm text-[#999] max-w-sm leading-[1.6]">
              La transició digital del Pirineu no és una opció.
              És una necessitat.
            </p>
          </motion.div>

        </div>
      </section>
    </>
  )
}
