'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid #f0f0f0' : '1px solid rgba(255,255,255,0.2)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src="/logo.svg"
            alt="Pirineu Tech"
            className="h-8 w-auto transition-all duration-300"
            style={{
              filter: scrolled ? 'brightness(0)' : 'brightness(0) invert(1)',
            }}
          />
        </a>

        {/* Center links */}
        <ul className="hidden md:flex items-center gap-8">
          {['Missió', 'Línies', 'Socis', 'Contacte'].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[14px] transition-colors duration-300"
                style={{ color: scrolled ? '#666666' : 'rgba(255,255,255,0.85)' }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#socis"
          className="text-[14px] font-medium rounded-full px-5 py-2 transition-all duration-300"
          style={
            scrolled
              ? { background: '#0f0f0f', color: '#ffffff', border: '1px solid transparent' }
              : { background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.4)' }
          }
        >
          Fes-te soci
        </a>
      </div>
    </nav>
  )
}
