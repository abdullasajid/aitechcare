"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_done-H5YeAYJt47JacQkQLu5kHnUvtVGTUZ.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 z-10">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
                Home of <span className="text-accent">AI Tech</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              Next-generation AI devices and premium smartphones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex relative h-96 md:h-full min-h-96 items-center justify-center"></div>
        </div>
      </div>
    </section>
  )
}
