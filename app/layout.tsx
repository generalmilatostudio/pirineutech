import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const geist = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist',
  weight: '100 900',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-cormorant',
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
    <html lang="ca" className={`${geist.variable} ${cormorant.variable}`}>
      <body className="bg-white text-[#0f0f0f] antialiased font-[family-name:var(--font-geist)]">
        {children}
      </body>
    </html>
  )
}
