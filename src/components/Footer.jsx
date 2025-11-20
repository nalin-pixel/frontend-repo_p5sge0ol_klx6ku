import React from 'react'
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-[#184736]" aria-hidden />
            <span className="font-semibold text-white">CloudProsTraining</span>
          </div>
          <p className="mt-3 text-sm text-slate-400">Expert-led cloud training for AWS, Azure, and GCP. Learn by doing, progress with confidence.</p>
        </div>
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li><a className="hover:text-white" href="#">Home</a></li>
            <li><a className="hover:text-white" href="#courses">Courses</a></li>
            <li><a className="hover:text-white" href="#">Blog</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a className="hover:text-white" href="#about">About</a></li>
            <li><a className="hover:text-white" href="#register">Contact</a></li>
            <li><a className="hover:text-white" href="#">Privacy</a></li>
          </ul>
        </nav>
        <div className="flex items-start gap-3">
          <a aria-label="Facebook" href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition shadow-inner"><Facebook className="h-5 w-5" /></a>
          <a aria-label="Twitter" href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition shadow-inner"><Twitter className="h-5 w-5" /></a>
          <a aria-label="LinkedIn" href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition shadow-inner"><Linkedin className="h-5 w-5" /></a>
          <a aria-label="Email" href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition shadow-inner"><Mail className="h-5 w-5" /></a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-400">© 2025 CloudProsTraining. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
