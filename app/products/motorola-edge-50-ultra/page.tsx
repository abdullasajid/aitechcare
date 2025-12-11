"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MotorolaEdge50UltraPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/motorola-edge.jpg",
    "/motorola-edge-2.jpg",
    "/motorola-edge-3.jpg",
    "/motorola-edge-4.jpg",
  ]

  const features = [
    "6.7-inch pOLED display with 144Hz refresh rate",
    "Snapdragon 8s Gen 3 processor",
    "50MP main camera with OIS",
    "Moto AI features for smart assistance",
    "4500mAh battery with 125W TurboPower charging",
    "50W wireless charging",
    "Premium wooden or vegan leather back options",
    "Ready For desktop mode support",
    "IP68 water and dust resistance",
    "Hello UI based on Android 14",
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
                  alt="Motorola Edge 50 Ultra"
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
                      alt={`Motorola Edge 50 Ultra view ${index + 1}`}
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
                  Motorola Edge 50 Ultra
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(4.6/5)</span>
                </div>
                <p className="text-muted-foreground text-lg">
                  The Motorola Edge 50 Ultra combines powerful performance with premium materials. 
                  Featuring ultra-fast 125W charging, AI-powered Moto features, and a stunning 
                  144Hz display in a sustainable design.
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
                  <p><strong>Display:</strong> 6.7-inch pOLED, 144Hz, up to 2500 nits</p>
                  <p><strong>Processor:</strong> Snapdragon 8s Gen 3</p>
                  <p><strong>RAM:</strong> 12GB/16GB</p>
                  <p><strong>Storage:</strong> 512GB, 1TB</p>
                  <p><strong>Camera:</strong> 50MP Main (OIS), 50MP Ultra Wide, 64MP 3x Telephoto</p>
                  <p><strong>Battery:</strong> 4500mAh with 125W wired, 50W wireless</p>
                  <p><strong>Water Resistance:</strong> IP68</p>
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
