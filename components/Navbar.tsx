'use client'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#f0f0f0]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="w-6 h-6 bg-[#0f0f0f] rounded-sm inline-block" aria-hidden="true" />
          <span className="text-[15px] font-semibold tracking-tight text-[#0f0f0f]">
            Pirineu Tech
          </span>
        </a>

        {/* Center links */}
        <ul className="hidden md:flex items-center gap-8">
          {['Missió', 'Línies', 'Socis', 'Contacte'].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[14px] text-[#666666] hover:text-[#0f0f0f] transition-colors duration-150"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#socis"
          className="bg-[#0f0f0f] text-white text-[14px] font-medium rounded-full px-5 py-2 hover:bg-[#333] transition-colors duration-150"
        >
          Fes-te soci
        </a>
      </div>
    </nav>
  )
}
