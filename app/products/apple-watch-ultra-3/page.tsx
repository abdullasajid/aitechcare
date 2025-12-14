"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function AppleWatchUltra3Page() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    "/watch1.png",
    "/watch2.png",
    "/watch3.png",
    "/watch4.png",
    "/watch5.png",
    "/watch6.png",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/#ai-products" className="inline-flex items-center gap-2 text-accent hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="Apple Watch Ultra 3"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-6 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition ${
                      selectedImage === index
                        ? "border-accent"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Apple Watch Ultra 3 view ${index + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Apple Watch Ultra 3</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The most rugged and capable Apple Watch pushes the limits of what a smartwatch can do. 
                  With advanced AI-powered health tracking, precision GPS, and extreme durability, 
                  it's designed for athletes, adventurers, and anyone who demands more.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Featuring a 49mm aerospace-grade titanium case, the brightest Apple display ever, and up to 
                  36 hours of battery life, Apple Watch Ultra 3 is built to withstand the elements while delivering 
                  comprehensive health insights and connectivity features.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "49mm aerospace-grade titanium case",
                    "Always-On Retina display up to 3000 nits",
                    "S9 SiP with double-tap gesture control",
                    "Advanced health sensors (ECG, blood oxygen, temperature)",
                    "Precision dual-frequency GPS",
                    "Up to 36 hours of battery life",
                    "Water resistant to 100m depth",
                    "AI-powered fitness coaching and insights"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
