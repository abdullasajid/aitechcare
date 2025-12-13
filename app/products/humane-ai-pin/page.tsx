"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function HumaneAIPin() {
  const [selectedImage, setSelectedImage] = useState("/humane-pin.jpg")

  const images = [
    "/humane-pin.jpg",
    "/humane-pin-2.jpg",
    "/humane-pin-3.jpg",
    "/humane-pin-4.jpg",
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
                alt="Humane AI Pin"
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
                    alt={`Humane AI Pin view ${index + 1}`}
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
              <p className="text-accent font-semibold mb-2">Humane</p>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Humane AI Pin
              </h1>
              <p className="text-lg text-muted-foreground">
                Standalone AI device with laser projector display and voice control - no phone required
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Standalone AI device with built-in cellular connectivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Laser ink display projects interface onto your palm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Advanced voice control with natural language processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>13MP camera with AI vision for real-world analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Translation, search, and communication without a phone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Magnetic attachment with battery booster system</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Processor</p>
                  <p className="font-semibold text-foreground">Qualcomm Snapdragon</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Battery Life</p>
                  <p className="font-semibold text-foreground">All day with booster</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Camera</p>
                  <p className="font-semibold text-foreground">13MP ultra-wide</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Display</p>
                  <p className="font-semibold text-foreground">Laser Ink projector</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Connectivity</p>
                  <p className="font-semibold text-foreground">4G LTE, Wi-Fi, Bluetooth</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Weight</p>
                  <p className="font-semibold text-foreground">34g (with battery)</p>
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
