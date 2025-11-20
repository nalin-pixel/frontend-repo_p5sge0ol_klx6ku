import React from 'react'
import { motion } from 'framer-motion'

const resources = [
  {
    id: 1,
    title: 'AWS Exam Readiness: Tips that Actually Work',
    excerpt: 'A concise guide to structuring your study plan for associate and professional AWS certifications.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Designing Cost-Efficient Azure Architectures',
    excerpt: 'Key patterns for resilient, scalable and cost-aware solutions on Microsoft Azure.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'GCP Data Engineering: What to Learn First',
    excerpt: 'Start with BigQuery fundamentals and data modelling to accelerate your GCP journey.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1600&auto=format&fit=crop'
  }
]

const Resources = () => {
  return (
    <section aria-label="Blog & Resources" className="relative py-24">
      <div
        className="absolute inset-0 -z-10 bg-fixed"
        aria-hidden
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(24,71,54,0.85), rgba(24,71,54,0.85)), url('https://images.unsplash.com/photo-1483354483454-4cd359948304?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Blog & Resources</h2>
          <a href="#" className="text-white/90 hover:text-white underline-offset-4 hover:underline">View All Articles</a>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r, idx) => (
            <motion.article
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: 'easeInOut', delay: idx * 0.05 }}
              className="overflow-hidden rounded-xl bg-white/95 backdrop-blur border border-white/40"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={r.image} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{r.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{r.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

export default Resources
