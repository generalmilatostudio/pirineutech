'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const VIDEO_URL =
  'https://media.weavy.ai/video/upload/uploads/B3na8rRU3iOFlkcmlQ9fqSIdPa12/l38nvbtow4lm9rq95nk9.mp4'

// Segments: plain text alternating with italic spans
// Full text: "El Pirineu té el seu propi ritme. Nosaltres l'accelerem."
const SEGMENTS: { text: string; italic: boolean }[] = [
  { text: "El Pirineu té el seu ", italic: false },
  { text: "propi ritme",          italic: true  },
  { text: ". Nosaltres l'",       italic: false },
  { text: "accelerem",            italic: true  },
  { text: ".",                    italic: false },
]

const FULL_TEXT = SEGMENTS.map((s) => s.text).join('')

function renderTypewriter(displayed: string) {
  let remaining = displayed.length
  const nodes: React.ReactNode[] = []
  for (let i = 0; i < SEGMENTS.length; i++) {
    if (remaining <= 0) break
    const seg = SEGMENTS[i]
    const visible = seg.text.slice(0, remaining)
    remaining -= seg.text.length
    if (!visible) break
    nodes.push(
      seg.italic ? (
        <em key={i} style={{ fontStyle: 'italic' }}>{visible}</em>
      ) : (
        <span key={i}>{visible}</span>
      )
    )
  }
  return nodes
}

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(FULL_TEXT.slice(0, i))
      if (i === FULL_TEXT.length) {
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

      {/* White gradient fade at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '40%',
          background: 'linear-gradient(to top, rgba(255,255,255,0.85), transparent)',
          zIndex: 2,
        }}
      />

      {/* Content — bottom-left, above gradient */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 pl-16 pr-8" style={{ zIndex: 3 }}>
        <div className="flex flex-col items-start gap-6 max-w-2xl">
          {/* Pill tag — glassmorphism */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs tracking-[0.15em] uppercase font-medium text-white flex items-center gap-2">
            <span>Node tecnològic · Alt Pirineu i Aran</span>
            <span className="pill-chevron text-[10px]">›</span>
          </div>

          {/* H1 — Playfair Display via CSS variable, weight 400, selective italic */}
          <h1
            className="text-white font-playfair"
            style={{
              fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}
          >
            {renderTypewriter(displayed)}
            {!done && (
              <span
                className="inline-block w-[2px] h-[0.8em] bg-white ml-0.5 align-middle animate-pulse"
                aria-hidden="true"
              />
            )}
          </h1>

          {/* Subheading */}
          <motion.p
            className="text-white/95"
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              textShadow: '0 1px 8px rgba(0,0,0,0.4)',
            }}
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
