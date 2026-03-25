'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mountain, Zap, Users, Eye, LucideIcon } from 'lucide-react'

const ITEMS: { Icon: LucideIcon; title: string; description: string }[] = [
  {
    Icon: Mountain,
    title: 'Territori',
    description: "Projectes d'impacte real a l'Alt Pirineu i Aran",
  },
  {
    Icon: Zap,
    title: 'Innovació',
    description: 'Solucions tecnològiques adaptades a les necessitats locals',
  },
  {
    Icon: Users,
    title: 'Talent',
    description: 'Formació i captació de talent digital a la regió',
  },
  {
    Icon: Eye,
    title: 'Transparència',
    description: 'Operem amb total transparència davant els nostres socis',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Missio() {
  const videoRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <>
      <hr className="border-t border-[#f0f0f0] mx-0" />

      <section className="bg-white py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* TOP PART */}
          <motion.div
            className="flex items-start justify-between gap-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Left: label + H2 + description */}
            <div className="flex flex-col gap-5 max-w-2xl">
              <span className="self-start border border-[#e8e8e8] rounded-full px-3 py-1 text-xs text-[#666]">
                La nostra missió
              </span>

              <h2
                className="font-playfair text-[#0f0f0f] font-normal leading-tight"
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                Una missió. Un territori.
              </h2>

              <p className="text-base text-[#888] leading-[1.7] max-w-md">
                No som una associació convencional. Som la infraestructura humana que
                necessita l&apos;Alt Pirineu per competir en el món digital.
              </p>
            </div>

            {/* Right: CTA */}
            <div className="shrink-0 pt-1">
              <a
                href="#contacte"
                className="border border-[#e0e0e0] rounded-full px-4 py-1.5 text-sm text-[#0f0f0f] hover:border-[#0f0f0f] transition-colors duration-150 whitespace-nowrap"
              >
                Contacta amb nosaltres ›
              </a>
            </div>
          </motion.div>

          {/* BOTTOM PART */}
          <div className="mt-12 grid gap-8" style={{ gridTemplateColumns: '55fr 45fr' }}>

            {/* Left: video with parallax */}
            <motion.div
              ref={videoRef}
              className="relative bg-[#f5f5f0] rounded-2xl overflow-hidden"
              style={{ aspectRatio: '4/3' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <motion.div className="absolute inset-0" style={{ y }}>
                <video
                  src="https://media.weavy.ai/video/upload/uploads/B3na8rRU3iOFlkcmlQ9fqSIdPa12/orfiu6rjgsf0c2q6rsla.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ height: 'calc(100% + 60px)', marginTop: '-30px' }}
                />
              </motion.div>
            </motion.div>

            {/* Right: accordion items */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {ITEMS.map(({ Icon, title, description }, i) => {
                const isActive = activeIndex === i
                const isLast = i === ITEMS.length - 1
                return (
                  <div
                    key={title}
                    className={`cursor-pointer transition-all duration-200 ${
                      !isLast ? 'border-b border-[#f0f0f0]' : ''
                    }`}
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    <div
                      className={`flex items-start gap-3 px-4 py-3 rounded-xl transition-colors duration-200 ${
                        isActive ? 'bg-[#f5f5f0]' : ''
                      }`}
                    >
                      <Icon
                        size={18}
                        className="mt-0.5 shrink-0 text-[#0f0f0f]"
                        strokeWidth={1.5}
                      />
                      <div className="flex flex-col gap-1">
                        <span
                          className={`text-sm text-[#0f0f0f] transition-all duration-200 ${
                            isActive ? 'font-semibold' : 'font-normal'
                          }`}
                        >
                          {title}
                        </span>
                        <motion.span
                          className="text-sm text-[#888] leading-[1.6] overflow-hidden block"
                          initial={false}
                          animate={
                            isActive
                              ? { opacity: 1, height: 'auto', marginTop: 0 }
                              : { opacity: 0, height: 0, marginTop: 0 }
                          }
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                        >
                          {description}
                        </motion.span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

        </div>
      </section>
    </>
  )
}
