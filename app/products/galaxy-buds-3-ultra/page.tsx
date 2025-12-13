"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function GalaxyBuds3Ultra() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/galaxy-buds3.jpg",
    "/galaxy-buds3-2.jpg",
    "/galaxy-buds3-3.jpg",
    "/galaxy-buds3-4.jpg",
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
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
                <Image
                  src={images[selectedImage]}
                  alt="Galaxy Buds 3 Ultra"
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
                      alt={`Galaxy Buds 3 Ultra view ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-accent font-semibold mb-2">Samsung</p>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Galaxy Buds 3 Ultra
              </h1>
              <p className="text-lg text-muted-foreground">
                Premium wireless earbuds with Galaxy AI translation and real-time audio enhancement
              </p>
            </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Galaxy AI real-time translation in 20+ languages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Intelligent Active Noise Cancellation with 360° Audio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Adaptive EQ that learns your preferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Voice Focus AI for crystal-clear calls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Up to 40 hours total battery life with wireless charging case</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Premium dual-driver system with Hi-Res Audio certification</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Specifications
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Drivers:</strong> Dual driver (11mm + 6.5mm)</p>
                  <p><strong>Battery Life:</strong> 8h (ANC on) / 40h total</p>
                  <p><strong>Connectivity:</strong> Bluetooth 5.4, LE Audio</p>
                  <p><strong>Water Resistance:</strong> IPX7</p>
                  <p><strong>AI Features:</strong> Translation, Voice Focus, Adaptive EQ</p>
                  <p><strong>Charging:</strong> USB-C, Qi wireless</p>
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
