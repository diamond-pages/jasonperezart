export const metadata = {
  title: 'Jason Perez Art | Miami Muralist & Fine Artist',
  description: 'Large-scale murals and fine art that transform spaces. Miami-based artist specializing in commercial, residential, and public installations.',
}

import Hero from '@/components/hero'
import Work from '@/components/work'
import About from '@/components/about'
import Services from '@/components/services'
import TestimonialsCustom from '@/components/testimonials-custom'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Services />
      <TestimonialsCustom />
      <Contact />
    </>
  )
}
