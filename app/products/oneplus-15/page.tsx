"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function OnePlus15Page() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/oneplus-1.webp",
    "/oneplus-2.webp",
    "/oneplus-3.png",
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
              <div className="relative bg-gradient-to-br from-red-500/20 to-black/20 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="OnePlus 15"
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
                      alt={`OnePlus 15 view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">OnePlus 15</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The OnePlus 15 delivers the ultimate flagship experience with Snapdragon 8 Elite Gen 2 
                  and a massive 6500mAh battery. Experience Hasselblad-tuned cameras and the fastest 
                  charging at 150W for unmatched productivity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With AI-powered OxygenOS features and real-time language translation, the OnePlus 15 
                  combines cutting-edge hardware with intelligent software. Trinity Engine 3.0 ensures 
                  optimal gaming and multitasking performance.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "6.8-inch 2K+ LTPO AMOLED display with 120Hz",
                    "Snapdragon 8 Elite Gen 2 processor",
                    "Hasselblad camera with 50MP LYT-900 sensor",
                    "OnePlus AI with real-time language translation",
                    "6500mAh battery with 150W SUPERVOOC charging",
                    "65W wireless charging and reverse charging",
                    "AI Photo Enhance with pro-level editing",
                    "IP69 water and dust resistance"
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
