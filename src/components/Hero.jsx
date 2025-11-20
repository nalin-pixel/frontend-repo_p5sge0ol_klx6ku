import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import React from 'react'

const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, 80])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7])

  return (
    <section aria-label="CloudProsTraining Hero" className="relative min-h-[80vh] w-full overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        aria-hidden="true"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2060&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          style={{ opacity }}
          className="max-w-3xl"
        >
          <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:text-[#184736] focus:px-4 focus:py-2 focus:rounded-md">
            Skip to content
          </a>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Advance your cloud career with expert-led training
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-blue-50 max-w-2xl">
            Practical, certification-focused courses for AWS, Azure and GCP — designed by certified professionals to accelerate your growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-md bg-[#184736] px-5 py-3 text-white shadow-lg shadow-[#184736]/25 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-white/70 hover:scale-[1.02]"
              aria-label="Explore Courses"
            >
              Explore Courses
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-md bg-white/90 text-[#184736] px-5 py-3 shadow-lg transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-white/70 hover:scale-[1.02]"
              aria-label="Contact Us"
            >
              Contact Us
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* subtle gradient edge */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

export default Hero
