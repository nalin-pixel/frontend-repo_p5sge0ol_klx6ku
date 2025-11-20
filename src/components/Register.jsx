import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const Register = () => {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', interest: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => setSubmitted(true), 500)
  }

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <section id="register" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-200 via-teal-200 to-white" aria-hidden />
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Register Your Interest</h2>
        <p className="mt-2 text-slate-600 text-center">Tell us what you want to learn and we’ll reach out with the next cohort details.</p>

        <div className="mt-10 rounded-2xl bg-white/80 backdrop-blur p-6 shadow-xl">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.65, ease: 'easeInOut' }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                aria-label="Register interest form"
              >
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-slate-700" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition-all focus:ring-2 focus:ring-[#184736] focus:border-[#184736] focus:shadow-md"
                    placeholder="Your full name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-slate-700" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition-all focus:ring-2 focus:ring-[#184736] focus:border-[#184736] focus:shadow-md"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700" htmlFor="interest">Course Interest</label>
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={onChange}
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition-all focus:ring-2 focus:ring-[#184736] focus:border-[#184736] focus:shadow-md"
                  >
                    <option value="">Select a course</option>
                    <option>AWS Solutions Architect</option>
                    <option>AWS Developer Associate</option>
                    <option>Azure Administrator</option>
                    <option>Azure Solutions Architect</option>
                    <option>GCP Data Engineer</option>
                    <option>GCP Associate Cloud Engineer</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[#184736] px-4 py-3 text-white font-medium shadow-lg shadow-[#184736]/20 transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-[#184736]"
                  >
                    Submit
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.65, ease: 'easeInOut' }}
                className="flex flex-col items-center justify-center py-10 text-center"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 className="h-12 w-12 text-emerald-600" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Thanks! We received your interest.</h3>
                <p className="mt-2 text-slate-600">Our team will be in touch with next steps and upcoming start dates.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Register
