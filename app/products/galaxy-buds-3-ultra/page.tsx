"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function GalaxyBuds3Ultra() {
  const [selectedImage, setSelectedImage] = useState("/galaxy-buds3.jpg")

  const images = [
    "/galaxy-buds3.jpg",
    "/galaxy-buds3-2.jpg",
    "/galaxy-buds3-3.jpg",
    "/galaxy-buds3-4.jpg",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-accent hover:opacity-80 transition"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Product Details */}
      <main className="container py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-xl overflow-hidden border border-border bg-gradient-to-br from-accent/20 to-primary/20">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Galaxy Buds 3 Ultra"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === img
                      ? "border-accent"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Galaxy Buds 3 Ultra view ${index + 1}`}
                    fill
                    className="object-cover"
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

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Galaxy AI real-time translation in 20+ languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Intelligent Active Noise Cancellation with 360° Audio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Adaptive EQ that learns your preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Voice Focus AI for crystal-clear calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Up to 40 hours total battery life with wireless charging case</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Premium dual-driver system with Hi-Res Audio certification</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Drivers</p>
                  <p className="font-semibold text-foreground">Dual driver (11mm + 6.5mm)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Battery Life</p>
                  <p className="font-semibold text-foreground">8h (ANC on) / 40h total</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Connectivity</p>
                  <p className="font-semibold text-foreground">Bluetooth 5.4, LE Audio</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Water Resistance</p>
                  <p className="font-semibold text-foreground">IPX7</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">AI Features</p>
                  <p className="font-semibold text-foreground">Translation, Voice Focus, Adaptive EQ</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Charging</p>
                  <p className="font-semibold text-foreground">USB-C, Qi wireless</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
