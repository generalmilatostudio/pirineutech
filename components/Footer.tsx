export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] pt-20 pb-10 px-6 md:px-12 lg:px-16">

      {/* Tagline */}
      <div className="border-b border-white/10 pb-16 mb-16 text-center">
        <p
          className="font-playfair text-white font-normal"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontStyle: 'italic',
            letterSpacing: '-0.02em',
          }}
        >
          Tecnologia. Territori. Futur.
        </p>
      </div>

      {/* Three columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Col 1 — logo + tagline */}
        <div>
          <img
            src="/logo.svg"
            alt="Pirineu Tech"
            className="h-8 w-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <p className="text-sm text-[#555] mt-3 max-w-xs leading-[1.6]">
            El node tecnològic de l&apos;Alt Pirineu i Aran.
          </p>
        </div>

        {/* Col 2 — Organització */}
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-[#444] mb-4">
            Organització
          </p>
          {['Missió i Visió', "Línies d'actuació", 'Transparència'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-[#666] hover:text-white transition-colors duration-150 mb-2 block"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Col 3 — Contacte */}
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-[#444] mb-4">
            Contacte
          </p>
          <p className="text-sm text-[#666] mb-2">Plaça dels Oms, 1</p>
          <p className="text-sm text-[#666] mb-2">25700 La Seu d&apos;Urgell</p>
          <a
            href="mailto:info@pirineu.tech"
            className="text-sm text-[#666] hover:text-white transition-colors duration-150"
          >
            info@pirineu.tech
          </a>
        </div>

      </div>

      {/* Col·laboren separator */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12">
        <p className="text-xs uppercase tracking-[0.15em] text-[#444] mb-6 mt-12">
          Col·laboren amb nosaltres
        </p>
        <img
          src="https://pirineutech.com/sites/default/files/inline-images/idapa-logo.png"
          alt="IDAPA"
          className="h-8 w-auto"
          style={{ filter: 'brightness(0) invert(1)', opacity: 0.4 }}
        />
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-[#444]">
          © 2026 Pirineu Tech · Tots els drets reservats
        </p>
        <p className="text-xs text-[#444] hover:text-white transition-colors duration-150 cursor-pointer">
          Desenvolupat per Milato Studio
        </p>
      </div>

    </footer>
  )
}
