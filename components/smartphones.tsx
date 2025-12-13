"use client"

import { Smartphone, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const smartphones = [
  {
    name: "iPhone 17 Pro Max",
    brand: "Apple",
    specs: '6.9" OLED | 2TB | A19 Pro | Apple Intelligence 2.0',
    image: "/iphone17-1.png",
    link: "/products/iphone-17-pro-max",
  },
  {
    name: "iPhone Air",
    brand: "Apple",
    specs: '6.6" OLED | 512GB | A19 | Ultra-thin Design',
    image: "/iphoneair-1.png",
    link: "/products/iphone-air",
  },
  {
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    specs: '6.9" AMOLED | 1TB | Snapdragon 8 Elite | Galaxy AI 2.0',
    image: "/samsung-s25.jpg",
    link: "/products/samsung-galaxy-s25-ultra",
  },
  {
    name: "Google Pixel 10 Pro XL",
    brand: "Google",
    specs: '6.8" OLED | 1TB | Tensor G5 | Gemini 2.0 AI',
    image: "/pixel10.jpg",
    link: "/products/google-pixel-10-pro-xl",
  },
  {
    name: "OnePlus 15",
    brand: "OnePlus",
    specs: '6.8" AMOLED | 1TB | Snapdragon 8 Elite Gen 2 | OnePlus AI',
    image: "/oneplus15.jpg",
    link: "/products/oneplus-15",
  },
  {
    name: "Nothing Phone (3)",
    brand: "Nothing",
    specs: '6.7" AMOLED | 512GB | Snapdragon 8s Gen 3 | Glyph AI',
    image: "/nothing-phone.jpg",
    link: "/products/nothing-phone-3",
  },
  {
    name: "Motorola Razr Ultra 2025",
    brand: "Motorola",
    specs: '6.9" pOLED Flip | 512GB | Snapdragon 8 Elite | Moto AI 2.0',
    image: "/motorola-razr.jpg",
    link: "/products/motorola-razr-ultra-2025",
  },
]

export default function Smartphones() {
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
      prev + itemsPerView >= smartphones.length ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, smartphones.length - itemsPerView) : prev - 1
    )
  }

  const visiblePhones = smartphones.slice(currentIndex, currentIndex + itemsPerView)
  if (visiblePhones.length < itemsPerView) {
    visiblePhones.push(...smartphones.slice(0, itemsPerView - visiblePhones.length))
  }

  return (
    <section id="smartphones" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/40 rounded-full">
            <Smartphone className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Premium Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            AI-Powered <span className="text-accent">Phones</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience premium performance with AI-enhanced flagship smartphones
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
              {visiblePhones.map((phone, index) => (
                <Link key={`${phone.name}-${index}`} href={phone.link} className="group block">
                  {/* Image Container */}
                  <div className="relative mb-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl overflow-hidden border border-border aspect-video flex items-center justify-center group-hover:border-accent/50 transition">
                    <img
                      src={phone.image || "/placeholder.svg"}
                      alt={phone.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-accent font-semibold mb-1">{phone.brand}</p>
                      <h3 className="text-xl font-bold text-foreground">{phone.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{phone.specs}</p>

                    {/* Button */}
                    <div className="flex justify-end pt-4 border-t border-border">
                      <button className="px-4 py-2 bg-accent text-primary-foreground rounded-lg hover:opacity-90 transition font-medium text-sm">
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
            {Array.from({ length: smartphones.length - itemsPerView + 1 }).map((_, index) => (
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
