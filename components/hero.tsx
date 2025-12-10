"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-between pt-24 pb-20 pl-8">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_done-H5YeAYJt47JacQkQLu5kHnUvtVGTUZ.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight text-balance">
            Home of <span className="text-accent">AI Technology</span>
          </h1>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 w-fit">
          Explore Products
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}
