import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
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
