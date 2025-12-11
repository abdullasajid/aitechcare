"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function OnePlus13Page() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/oneplus13.jpg",
    "/oneplus13-2.jpg",
    "/oneplus13-3.jpg",
    "/oneplus13-4.jpg",
  ]

  const features = [
    "6.82-inch 2K AMOLED display with 120Hz ProXDR",
    "Snapdragon 8 Elite processor",
    "Hasselblad camera system with 50MP LYT-808 sensor",
    "OxygenOS AI with smart productivity features",
    "6000mAh battery with 100W SUPERVOOC charging",
    "50W wireless charging and reverse charging",
    "OxygenOS 15 based on Android 15",
    "AI Eraser 2.0 for advanced photo editing",
    "Aqua Touch 2.0 for wet display operation",
    "Trinity Engine 2.0 for optimized performance",
    "IP69 water and dust resistance",
    "AI-powered call transcription",
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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-red-500/10 to-black/10">
                <Image
                  src={images[selectedImage]}
                  alt="OnePlus 13"
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
                      alt={`OnePlus 13 view ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-accent font-semibold mb-2">OnePlus</p>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  OnePlus 13
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
                  The OnePlus 13 delivers flagship performance with Snapdragon 8 Elite, a massive 
                  6000mAh battery, and Hasselblad-tuned cameras. Experience blazing-fast 100W charging 
                  and AI-powered OxygenOS features.
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
                  <p><strong>Display:</strong> 6.82-inch 2K AMOLED, 120Hz, up to 4500 nits peak</p>
                  <p><strong>Processor:</strong> Snapdragon 8 Elite</p>
                  <p><strong>RAM:</strong> 12GB/16GB/24GB LPDDR5X</p>
                  <p><strong>Storage:</strong> 256GB, 512GB, 1TB UFS 4.0</p>
                  <p><strong>Camera:</strong> 50MP Main (LYT-808), 50MP Periscope 3x, 50MP Ultra Wide</p>
                  <p><strong>Battery:</strong> 6000mAh with 100W wired, 50W wireless</p>
                  <p><strong>Water Resistance:</strong> IP69</p>
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
