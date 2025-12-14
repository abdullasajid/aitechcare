"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function MotorolaRazrUltra2025Page() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    "/motrolla-1.webp",
    "/motrolla-2.avif",
    "/motrolla-3.webp",
    "/motrolla-4.webp",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/#smartphones" className="inline-flex items-center gap-2 text-accent hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="Motorola Razr Ultra 2025"
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
                      alt={`Motorola Razr Ultra 2025 view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Motorola Razr Ultra 2025</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Motorola Razr Ultra 2025 sets the new standard for flip phones with the largest 
                  external display, Snapdragon 8 Elite power, and Moto AI 2.0 features. Experience 
                  flagship performance in an iconic foldable design.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With revolutionary AI capabilities and an unprecedented 4.5-inch external display, the Razr Ultra 2025 
                  redefines what's possible in a foldable phone. Premium materials, cutting-edge performance, and 
                  all-day battery life make this the ultimate flip phone.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "6.9-inch pOLED foldable main display with 165Hz",
                    "4.5-inch pOLED external display - largest on any flip phone",
                    "Snapdragon 8 Elite processor",
                    "50MP main camera with OIS and AI Pro photography",
                    "Moto AI 2.0 with Google Gemini integration",
                    "4500mAh battery with 68W TurboPower charging",
                    "30W wireless charging",
                    "IPX8 water resistance"
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
