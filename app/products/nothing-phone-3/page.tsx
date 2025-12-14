"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function NothingPhone3Page() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    "/nothing.webp",
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
              <div className="relative bg-gradient-to-br from-white/10 to-gray-500/10 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="Nothing Phone (3)"
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
                      alt={`Nothing Phone (3) view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nothing Phone (3)</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Nothing Phone (3) takes the iconic Glyph Interface to the next level with AI 
                  integration. Featuring flagship performance and clean Nothing OS, this device delivers 
                  the most advanced transparent design yet.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With cutting-edge hardware and seamless software optimization, the Nothing Phone (3) 
                  redefines the smartphone experience. The unique transparent design combined with smart 
                  AI features makes it stand out in every way.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "6.7-inch LTPO AMOLED display with 120Hz refresh rate",
                    "Snapdragon 8s Gen 3 processor",
                    "Advanced Glyph Interface with AI integration",
                    "50MP triple camera system with OIS",
                    "5000mAh battery with 65W fast charging",
                    "45W wireless charging support",
                    "Clean Nothing OS experience",
                    "IP68 water and dust resistance"
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
