'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const FROM = 2024
const TO = 2054
const DURATION = 3000 // ms

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(FROM)

  useEffect(() => {
    if (!active) return
    const start = performance.now()
    let raf: number

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / DURATION, 1)
      // easeOut cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(FROM + (target - FROM) * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target])

  return value
}

export default function Visio() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const year = useCountUp(TO, inView)

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  })

  return (
    <>
      <hr className="border-t border-[#e8e8e8] mx-0" />

      <section className="bg-[#f5f2ee] py-32 px-8">
        <div ref={ref} className="max-w-4xl mx-auto text-center px-6 sm:px-0">

          {/* Label */}
          <motion.p
            className="text-xs uppercase tracking-[0.15em] text-[#2D6A4F] font-medium mb-16"
            {...fadeUp(0)}
          >
            La nostra visió
          </motion.p>

          {/* Year counter */}
          <motion.div {...fadeUp(0.1)}>
            <p
              className="font-playfair text-[#0f0f0f] font-normal leading-none tabular-nums"
              style={{
                fontSize: 'clamp(5rem, 15vw, 14rem)',
                letterSpacing: '-0.04em',
              }}
              aria-label={`Any objectiu: ${TO}`}
            >
              {year}
            </p>
          </motion.div>

          {/* Divider line */}
          <motion.div
            className="w-16 bg-[#0f0f0f] h-px mx-auto my-8"
            {...fadeUp(0.3)}
          />

          {/* Main phrase */}
          <motion.h2
            className="font-playfair text-[#0f0f0f] font-normal leading-tight"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              letterSpacing: '-0.02em',
            }}
            {...fadeUp(2.5)}
          >
            Pensem en dècades. No en trimestres.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-base text-[#888] max-w-md mx-auto leading-[1.7] mt-6"
            {...fadeUp(3)}
          >
            La transició digital del Pirineu no és una opció. És una necessitat.
            Una regió on la tecnologia no és una amenaça per a l&apos;entorn,
            sinó el seu millor aliat.
          </motion.p>

        </div>
      </section>
    </>
  )
}
