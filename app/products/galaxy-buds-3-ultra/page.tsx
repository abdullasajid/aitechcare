"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function GalaxyBuds3Ultra() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    "/galaxybuds3-1.png",
    "/galaxybuds3-2.png",
    "/galaxybuds3-3.png",
    "/galaxybuds3-1.png",
    "/galaxybuds3-2.png",
    "/galaxybuds3-3.png",
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
              <div className="relative bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="Galaxy Buds 3 Ultra"
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
                      alt={`Galaxy Buds 3 Ultra view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Galaxy Buds 3 Ultra</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Premium wireless earbuds with Galaxy AI translation and real-time audio enhancement. Experience 
                  superior sound quality with intelligent features that adapt to your environment and preferences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With real-time translation in over 20 languages, adaptive noise cancellation, and premium dual-driver 
                  system, the Galaxy Buds 3 Ultra delivers an exceptional audio experience powered by Galaxy AI.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Galaxy AI real-time translation in 20+ languages",
                    "Intelligent Active Noise Cancellation with 360° Audio",
                    "Adaptive EQ that learns your preferences",
                    "Voice Focus AI for crystal-clear calls",
                    "Up to 40 hours total battery life",
                    "Premium dual-driver system with Hi-Res Audio",
                    "IPX7 water resistance",
                    "Bluetooth 5.4 with LE Audio"
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
