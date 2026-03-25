import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Missio from '@/components/Missio'
import Visio from '@/components/Visio'
import Linies from '@/components/Linies'
import Collabora from '@/components/Collabora'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Missio />
      <Visio />
      <Linies />
      <Collabora />
      <Footer />
    </main>
  )
}
