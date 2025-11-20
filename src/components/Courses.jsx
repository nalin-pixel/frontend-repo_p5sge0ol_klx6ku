import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, ChevronDown } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

const courses = [
  {
    id: 'aws-architect',
    title: 'AWS Solutions Architect',
    level: 'Intermediate',
    category: 'AWS',
    summary: 'Master core AWS services and architectures for real-world deployments.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'aws-developer',
    title: 'AWS Developer Associate',
    level: 'Beginner',
    category: 'AWS',
    summary: 'Build and deploy cloud-native apps with AWS developer tooling.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'azure-admin',
    title: 'Azure Administrator',
    level: 'Intermediate',
    category: 'Azure',
    summary: 'Operate, monitor and manage Azure subscriptions and services.',
    image: 'https://images.unsplash.com/photo-1731865746988-5f2a4811d602?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBenVyZSUyMEFkbWluaXN0cmF0b3J8ZW58MHwwfHx8MTc2MzY2MzEyNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'azure-architect',
    title: 'Azure Solutions Architect',
    level: 'Advanced',
    category: 'Azure',
    summary: 'Design resilient Azure solutions meeting security and cost targets.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'gcp-data',
    title: 'GCP Data Engineer',
    level: 'Advanced',
    category: 'GCP',
    summary: 'Design pipelines and warehouses using BigQuery and Dataflow.',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'gcp-associate',
    title: 'GCP Associate Cloud Engineer',
    level: 'Beginner',
    category: 'GCP',
    summary: 'Deploy and manage cloud resources on Google Cloud effectively.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
  },
]

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']
const categories = ['All', 'AWS', 'Azure', 'GCP']

const LevelBadge = ({ level }) => {
  const color = level === 'Beginner' ? 'bg-emerald-100 text-emerald-700' : level === 'Intermediate' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${color}`}>{level}</span>
}

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [category, setCategory] = useState(searchParams.get('category') || 'All')
  const [level, setLevel] = useState(searchParams.get('level') || 'All')

  useEffect(() => {
    const params = {}
    if (category && category !== 'All') params.category = category
    if (level && level !== 'All') params.level = level
    setSearchParams(params, { replace: true })
  }, [category, level, setSearchParams])

  const filtered = useMemo(() => {
    return courses.filter(c => (category === 'All' || c.category === category) && (level === 'All' || c.level === level))
  }, [category, level])

  return (
    <section id="courses" aria-labelledby="courses-heading" className="relative py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="courses-heading" className="text-3xl sm:text-4xl font-bold text-slate-900">Explore Our Courses</h2>
            <p className="mt-2 text-slate-600">Filter by platform and level. Shareable links reflect your selected filters.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Course filters">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" aria-hidden />
              <select
                aria-label="Filter by category"
                className="appearance-none pl-9 pr-9 py-2 rounded-md border border-slate-300 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#184736] focus:border-[#184736]"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            </div>
            <div className="relative">
              <select
                aria-label="Filter by level"
                className="appearance-none pr-9 py-2 px-3 rounded-md border border-slate-300 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#184736] focus:border-[#184736]"
                value={level}
                onChange={(e)=>setLevel(e.target.value)}
              >
                {levels.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0,6).map((course, idx) => (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: 'easeInOut', delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img src={course.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{course.title}</h3>
                  <LevelBadge level={course.level} />
                </div>
                <p className="mt-2 text-slate-600 text-sm">{course.summary}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{course.category}</span>
                  <span className="text-[#184736] text-sm font-medium">View details</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/0 group-hover:ring-black/5 transition-all duration-500 group-hover:-translate-y-1" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
