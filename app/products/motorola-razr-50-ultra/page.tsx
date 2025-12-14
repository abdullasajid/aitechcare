"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function MotorolaRazr50UltraPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    "/motorola-razr.jpg",
    "/motorola-razr-2.jpg",
    "/motorola-razr-3.jpg",
    "/motorola-razr-4.jpg",
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
                  alt="Motorola Razr 50 Ultra"
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
                      alt={`Motorola Razr 50 Ultra view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Motorola Razr 50 Ultra</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Motorola Razr 50 Ultra redefines flip phone design with its massive external display 
                  and Moto AI features. Experience flagship performance in an iconic foldable form factor 
                  with premium materials.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With the largest external display on any flip phone and advanced AI capabilities, the Razr 50 Ultra 
                  lets you do more without opening your phone. Powerful performance meets stunning design in this 
                  revolutionary foldable smartphone.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "6.9-inch pOLED foldable main display with 165Hz",
                    "4-inch pOLED external display for quick access",
                    "Snapdragon 8s Gen 3 processor",
                    "50MP main camera with OIS and AI enhancements",
                    "Moto AI with Google Gemini integration",
                    "4000mAh battery with 45W TurboPower charging",
                    "15W wireless charging",
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
