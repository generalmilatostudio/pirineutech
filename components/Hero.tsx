'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const H1_TEXT = "El Pirineu té el seu propi ritme. Nosaltres l'accelerem."
const VIDEO_URL =
  'https://media.weavy.ai/video/upload/uploads/B3na8rRU3iOFlkcmlQ9fqSIdPa12/sany9bjw5czkdtgzgtpc.mp4'

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
    <section className="relative h-screen overflow-hidden">
      {/* Video background */}
      <video
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content — bottom-left */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 pl-16 pr-8">
        <div className="flex flex-col items-start gap-6 max-w-2xl">
          {/* Pill tag — glassmorphism */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs tracking-[0.15em] uppercase font-medium text-white">
            Node tecnològic · Alt Pirineu i Aran
          </div>

          {/* H1 typewriter — Cormorant Garamond, weight 300 */}
          <h1
            className="text-white font-light leading-tight tracking-[-0.02em] font-[family-name:var(--font-cormorant)]"
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 300,
            }}
          >
            {displayed}
            {!done && (
              <span
                className="inline-block w-[2px] h-[0.85em] bg-white ml-1 align-middle animate-pulse"
                aria-hidden="true"
              />
            )}
          </h1>

          {/* Subheading */}
          <motion.p
            className="text-lg text-white/80 leading-[1.7]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          >
            Pirineu Tech és el node tecnològic de l&apos;Alt Pirineu i Aran. Connectem
            empreses, talent i institucions per construir la regió digital del futur.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-row items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
          >
            <a
              href="#socis"
              className="bg-white text-[#0f0f0f] rounded-full px-7 py-3 text-[15px] font-medium transition-all duration-200 hover:bg-white/90 hover:scale-[1.02]"
            >
              Fes-te soci
            </a>
            <a
              href="#projecte"
              className="border border-white/40 text-white rounded-full px-7 py-3 text-[15px] font-medium transition-all duration-200 hover:border-white/80 hover:scale-[1.02]"
            >
              Descobreix el projecte
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
