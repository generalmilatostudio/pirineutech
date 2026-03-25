import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
// Playfair Display via @fontsource (Google Fonts blocked at build time)
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/400-italic.css'
import '@fontsource/playfair-display/500.css'
import '@fontsource/playfair-display/500-italic.css'

const geist = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist',
  weight: '100 900',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Pirineu Tech — Node tecnològic de l'Alt Pirineu i Aran",
  description:
    'Connectem empreses, talent i institucions per construir la regió digital del futur.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca" className={geist.variable}>
      <body className="bg-white text-[#0f0f0f] antialiased font-[family-name:var(--font-geist)]">
        {children}
      </body>
    </html>
  )
}
