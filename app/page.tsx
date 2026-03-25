import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Missio from '@/components/Missio'
import Visio from '@/components/Visio'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Missio />
      <Visio />
    </main>
  )
}
