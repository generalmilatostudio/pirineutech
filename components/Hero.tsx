'use client'

import { motion } from 'framer-motion'

const VIDEO_URL =
  'https://media.weavy.ai/video/upload/uploads/B3na8rRU3iOFlkcmlQ9fqSIdPa12/l38nvbtow4lm9rq95nk9.mp4'

// Expo ease-out for the reveal
const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

// Clip-path line reveal
function LineReveal({
  children,
  delay,
}: {
  children: React.ReactNode
  delay: number
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ clipPath: 'inset(0 0 100% 0)', y: 12 }}
        animate={{ clipPath: 'inset(0 0 0% 0)', y: 0 }}
        transition={{ duration: 0.9, delay, ease: EXPO }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function Hero() {
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
      <div className="absolute inset-0 bg-black/35" />

      {/* White gradient fade at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '40%',
          background: 'linear-gradient(to top, rgba(255,255,255,0.85), transparent)',
          zIndex: 2,
        }}
      />

      {/* Content — bottom-left */}
      <div
        className="absolute inset-0 flex flex-col justify-end pb-16 px-6 md:px-12 lg:px-16"
        style={{ zIndex: 3 }}
      >
        <div className="flex flex-col items-start gap-6 max-w-2xl">
          {/* Pill tag */}
          <LineReveal delay={0}>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs tracking-[0.15em] uppercase font-medium text-white flex items-center gap-2">
              <span>Node tecnològic · Alt Pirineu i Aran</span>
              <span className="pill-chevron text-[10px]">›</span>
            </div>
          </LineReveal>

          {/* H1 — two-line clip-path reveal */}
          <h1
            className="font-playfair text-white font-normal"
            style={{
              fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}
          >
            <LineReveal delay={0.1}>
              <span>
                El Pirineu té el seu <em>propi ritme</em>.
              </span>
            </LineReveal>
            <LineReveal delay={0.22}>
              <span>
                Nosaltres l&apos;<em>accelerem</em>.
              </span>
            </LineReveal>
          </h1>

          {/* Subheading */}
          <div className="overflow-hidden">
            <motion.p
              className="text-white/95"
              style={{
                fontSize: '16px',
                lineHeight: 1.6,
                textShadow: '0 1px 8px rgba(0,0,0,0.4)',
              }}
              initial={{ clipPath: 'inset(0 0 100% 0)', y: 12 }}
              animate={{ clipPath: 'inset(0 0 0% 0)', y: 0 }}
              transition={{ duration: 0.9, delay: 0.46, ease: EXPO }}
            >
              Pirineu Tech és el node tecnològic de l&apos;Alt Pirineu i Aran. Connectem
              empreses, talent i institucions per construir la regió digital del futur.
            </motion.p>
          </div>

          {/* Buttons */}
          <div className="overflow-hidden">
            <motion.div
              className="flex flex-row items-center gap-4"
              initial={{ clipPath: 'inset(0 0 100% 0)', y: 12 }}
              animate={{ clipPath: 'inset(0 0 0% 0)', y: 0 }}
              transition={{ duration: 0.9, delay: 0.58, ease: EXPO }}
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
      </div>
    </section>
  )
}
