"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MotorolaRazrUltra2025Page() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/motorola-razr.jpg",
    "/motorola-razr-2.jpg",
    "/motorola-razr-3.jpg",
    "/motorola-razr-4.jpg",
  ]

  const features = [
    "6.9-inch pOLED foldable main display with 165Hz",
    "4.5-inch pOLED external display - largest on any flip phone",
    "Snapdragon 8 Elite processor",
    "50MP main camera with OIS and AI Pro photography",
    "Moto AI 2.0 with Google Gemini integration",
    "4500mAh battery with 68W TurboPower charging",
    "30W wireless charging",
    "Premium vegan leather and titanium options",
    "IPX8 water resistance",
    "Hello UI 3.0 based on Android 16",
    "AI-powered real-time video editing",
    "Flex View mode with enhanced app support",
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <Image
                  src={images[selectedImage]}
                  alt="Motorola Razr Ultra 2025"
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
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
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-accent font-semibold mb-2">Motorola</p>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  Motorola Razr Ultra 2025
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(4.8/5)</span>
                </div>
                <p className="text-muted-foreground text-lg">
                  The Motorola Razr Ultra 2025 sets the new standard for flip phones with the largest 
                  external display, Snapdragon 8 Elite power, and Moto AI 2.0 features. Experience 
                  flagship performance in an iconic foldable design.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Specifications
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Main Display:</strong> 6.9-inch pOLED, 165Hz, 3000 nits peak</p>
                  <p><strong>External Display:</strong> 4.5-inch pOLED, 165Hz, full app support</p>
                  <p><strong>Processor:</strong> Snapdragon 8 Elite</p>
                  <p><strong>RAM:</strong> 16GB</p>
                  <p><strong>Storage:</strong> 512GB, 1TB</p>
                  <p><strong>Camera:</strong> 50MP Main (OIS), 50MP Ultra Wide + Macro, 32MP Front</p>
                  <p><strong>Battery:</strong> 4500mAh with 68W wired, 30W wireless</p>
                  <p><strong>Water Resistance:</strong> IPX8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
