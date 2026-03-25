'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const H1_TEXT = 'El Pirineu té el seu propi ritme. Nosaltres l\'accelerem.'

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(H1_TEXT.slice(0, i))
      if (i === H1_TEXT.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-40 pb-24 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Pill tag */}
        <div className="border border-[#e8e8e8] rounded-full px-4 py-1.5 text-xs tracking-[0.15em] uppercase font-medium text-[#666666]">
          Node tecnològic ·{' '}
          <span className="text-[#2D6A4F]">Alt Pirineu i Aran</span>
        </div>

        {/* H1 typewriter */}
        <h1
          className="text-[#0f0f0f] font-semibold leading-tight tracking-[-0.03em]"
          style={{
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          }}
        >
          {displayed}
          {!done && (
            <span
              className="inline-block w-[3px] h-[0.85em] bg-[#0f0f0f] ml-1 align-middle animate-pulse"
              aria-hidden="true"
            />
          )}
        </h1>

        {/* Subheading */}
        <motion.p
          className="text-lg text-[#666666] leading-[1.7] max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
        >
          Pirineu Tech és el node tecnològic de l&apos;Alt Pirineu i Aran. Connectem
          empreses, talent i institucions per construir la regió digital del futur.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
        >
          <a
            href="#socis"
            className="bg-[#0f0f0f] text-white rounded-full px-7 py-3 text-[15px] font-medium transition-all duration-200 hover:bg-[#333] hover:scale-[1.02]"
          >
            Fes-te soci
          </a>
          <a
            href="#projecte"
            className="border border-[#e0e0e0] text-[#0f0f0f] rounded-full px-7 py-3 text-[15px] font-medium transition-all duration-200 hover:border-[#aaa] hover:scale-[1.02]"
          >
            Descobreix el projecte
          </a>
        </motion.div>
      </div>
    </section>
  )
}
