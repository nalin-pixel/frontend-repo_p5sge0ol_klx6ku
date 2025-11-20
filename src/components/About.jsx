import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const About = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, -40])

  return (
    <section id="about" className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative overflow-hidden rounded-xl shadow-sm">
          <motion.img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
            alt="Instructor leading a cloud training session"
            loading="lazy"
            className="h-full w-full object-cover"
            style={{ y }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Learn from Certified Cloud Professionals</h2>
          <p className="mt-4 text-slate-600 text-lg">
            At CloudProsTraining, we deliver practical, hands-on courses taught by certified AWS, Azure, and Google Cloud experts. Our mission is to equip you with job-ready skills and the confidence to pass industry-recognized certifications. With real-world labs, curated resources, and mentorship, we help professionals transition into cloud roles and advance their careers while keeping training accessible and up-to-date with the latest best practices.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
