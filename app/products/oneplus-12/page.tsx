"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function OnePlus12Page() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/oneplus12.jpg",
    "/oneplus12-2.jpg",
    "/oneplus12-3.jpg",
    "/oneplus12-4.jpg",
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
                  alt="OnePlus 12"
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
                      alt={`OnePlus 12 view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">OnePlus 12</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The OnePlus 12 delivers flagship performance with Snapdragon 8 Gen 3 and a stunning 
                  2K display. Experience Hasselblad-tuned cameras and blazing-fast 100W charging for 
                  all-day productivity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With AI-powered photography features and OxygenOS optimization, the OnePlus 12 combines 
                  premium hardware with intelligent software. The Trinity Engine ensures smooth performance 
                  across gaming and multitasking scenarios.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "6.82-inch 2K AMOLED display with 120Hz ProXDR",
                    "Snapdragon 8 Gen 3 processor",
                    "Hasselblad camera system with 50MP main sensor",
                    "AI Eraser for intelligent photo editing",
                    "5400mAh battery with 100W SUPERVOOC charging",
                    "50W wireless charging support",
                    "OxygenOS 14 based on Android 14",
                    "Aqua Touch for wet display operation"
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
