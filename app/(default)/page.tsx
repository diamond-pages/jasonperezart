export const metadata = {
  title: 'Jason Perez Art Collective | Miami & New York Art Brokerage',
  description: 'Professional art brokerage representing over 40 talented artists. Pop art, street art, contemporary, and fine art. Based in Miami, FL & New York.',
}

import Hero from '@/components/hero'
import Artists from '@/components/artists'
import Awards from '@/components/awards'
import About from '@/components/about'
import Services from '@/components/services'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Artists />
      <Awards />
      <About />
      <Services />
      <Contact />
    </>
  )
}
