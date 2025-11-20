import React from 'react'
import Hero from './components/Hero'
import Courses from './components/Courses'
import About from './components/About'
import Resources from './components/Resources'
import Register from './components/Register'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#184736] rounded">
            <div className="h-8 w-8 rounded bg-[#184736]" aria-hidden />
            <span className="font-semibold text-slate-900">CloudProsTraining</span>
          </a>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-slate-700">
            <a className="hover:text-[#184736]" href="#courses">Courses</a>
            <a className="hover:text-[#184736]" href="#about">About</a>
            <a className="hover:text-[#184736]" href="#register">Contact</a>
          </nav>
          <a href="#register" className="ml-4 inline-flex items-center rounded-md bg-[#184736] px-4 py-2 text-white text-sm font-medium shadow-sm hover:opacity-95">Register</a>
        </div>
      </header>

      <main id="content">
        <Hero />
        <Courses />
        <About />
        <Resources />
        <Register />
      </main>

      <Footer />
    </div>
  )
}

export default App
