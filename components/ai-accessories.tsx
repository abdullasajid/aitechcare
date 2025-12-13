"use client"

import { Headphones, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const accessories = [
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
    name: "Oura Ring Gen 4",
    brand: "Oura",
    specs: 'AI Health Tracking | Sleep Analysis | Fitness',
    image: "/oura-ring.jpg",
    link: "/products/oura-ring-gen-4",
  },
  {
    name: "Humane AI Pin",
    brand: "Humane",
    specs: 'Standalone AI | Projector Display | Voice Control',
    image: "/humane-pin.jpg",
    link: "/products/humane-ai-pin",
  },
  {
    name: "Rabbit R1",
    brand: "Rabbit",
    specs: 'AI Assistant Device | Touchscreen | Voice Commands',
    image: "/rabbit-r1.jpg",
    link: "/products/rabbit-r1",
  },
]

export default function AIAccessories() {
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
      prev + itemsPerView >= accessories.length ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, accessories.length - itemsPerView) : prev - 1
    )
  }

  const visibleAccessories = accessories.slice(currentIndex, currentIndex + itemsPerView)
  if (visibleAccessories.length < itemsPerView) {
    visibleAccessories.push(...accessories.slice(0, itemsPerView - visibleAccessories.length))
  }

  return (
    <section id="ai-accessories" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/40 rounded-full">
            <Headphones className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Smart Accessories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            AI <span className="text-accent">Accessories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Next-generation AI-powered wearables and smart accessories
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
              {visibleAccessories.map((accessory, index) => (
                <Link key={`${accessory.name}-${index}`} href={accessory.link} className="group block">
                  {/* Image Container */}
                  <div className="relative mb-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl overflow-hidden border border-border aspect-video flex items-center justify-center group-hover:border-accent/50 transition">
                    <img
                      src={accessory.image || "/placeholder.svg"}
                      alt={accessory.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-accent font-semibold mb-1">{accessory.brand}</p>
                      <h3 className="text-xl font-bold text-foreground">{accessory.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{accessory.specs}</p>

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
            {Array.from({ length: accessories.length - itemsPerView + 1 }).map((_, index) => (
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
