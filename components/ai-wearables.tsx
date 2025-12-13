"use client"

import { Watch, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const wearables = [
  {
    name: "Meta AI Glasses",
    brand: "Meta",
    specs: 'AI Assistant | 12MP Camera | Voice Commands',
    image: "/meta_glasses1.webp",
    link: "/products/meta-ai-glasses",
  },
  {
    name: "Apple Watch Ultra 3",
    brand: "Apple",
    specs: 'AI Health Tracking | S9 SiP | 36h Battery',
    image: "/watch1.png",
    link: "/products/apple-watch-ultra-3",
  },
  {
    name: "AirPods Pro 3",
    brand: "Apple",
    specs: 'AI Noise Cancellation | Health Sensors | Siri AI',
    image: "/airpods-pro3.jpg",
    link: "/products/airpods-pro-3",
  },
  {
    name: "Galaxy Buds 3 Ultra",
    brand: "Samsung",
    specs: 'Galaxy AI Translation | ANC | Real-time Audio',
    image: "/galaxy-buds3.jpg",
    link: "/products/galaxy-buds-3-ultra",
  },
  {
    name: "Galaxy Ring",
    brand: "Samsung",
    specs: 'AI Health Tracking | Heart Rate | Sleep Monitoring',
    image: "/galaxy_ring.webp",
    link: "/products/galaxy-ring",
  },
  {
    name: "Oura Ring Gen 4",
    brand: "Oura",
    specs: 'AI Health Tracking | Sleep Analysis | Fitness',
    image: "/oura-ring.jpg",
    link: "/products/oura-ring-gen-4",
  },
]

export default function AIWearables() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const itemsPerView = isMobile ? 1 : 3

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= wearables.length ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, wearables.length - itemsPerView) : prev - 1
    )
  }

  const visibleWearables = wearables.slice(currentIndex, currentIndex + itemsPerView)
  if (visibleWearables.length < itemsPerView) {
    visibleWearables.push(...wearables.slice(0, itemsPerView - visibleWearables.length))
  }

  return (
    <section id="ai-wearables" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/40 rounded-full">
            <Watch className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Smart Wearables</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            AI <span className="text-accent">Wearables</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Next-generation AI-powered wearable technology for your daily life
          </p>
        </div>

        <div className="relative">
          {/* Carousel Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-accent text-primary-foreground p-3 rounded-full hover:opacity-90 transition shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-accent text-primary-foreground p-3 rounded-full hover:opacity-90 transition shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500">
              {visibleWearables.map((wearable, index) => (
                <Link key={`${wearable.name}-${index}`} href={wearable.link} className="group block">
                  {/* Image Container */}
                  <div className="relative mb-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl overflow-hidden border border-border aspect-video flex items-center justify-center group-hover:border-accent/50 transition">
                    <img
                      src={wearable.image || "/placeholder.svg"}
                      alt={wearable.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-accent font-semibold mb-1">{wearable.brand}</p>
                      <h3 className="text-xl font-bold text-foreground">{wearable.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{wearable.specs}</p>

                    {/* Button */}
                    <div className="flex justify-center md:justify-end pt-4 border-t border-border">
                      <button className="w-full md:w-auto px-4 py-2 bg-accent text-primary-foreground rounded-lg hover:opacity-90 transition font-medium text-sm">
                        Check It Out
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: wearables.length - itemsPerView + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition ${
                  currentIndex === index ? "bg-accent w-8" : "bg-border"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
