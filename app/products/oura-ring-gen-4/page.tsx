"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function OuraRingGen4() {
  const [selectedImage, setSelectedImage] = useState("/oura-ring.jpg")

  const images = [
    "/oura-ring.jpg",
    "/oura-ring-2.jpg",
    "/oura-ring-3.jpg",
    "/oura-ring-4.jpg",
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
                alt="Oura Ring Gen 4"
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
                    alt={`Oura Ring Gen 4 view ${index + 1}`}
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
              <p className="text-accent font-semibold mb-2">Oura</p>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Oura Ring Gen 4
              </h1>
              <p className="text-lg text-muted-foreground">
                Advanced AI-powered health tracking ring with comprehensive sleep and fitness analysis
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>AI-powered sleep staging with personalized insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Advanced heart rate variability and cardiovascular monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Body temperature tracking with fever detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Activity and workout tracking with automatic detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Up to 8 days battery life on a single charge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Lightweight titanium design with scratch-resistant coating</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Material</p>
                  <p className="font-semibold text-foreground">Titanium with PVD coating</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Battery Life</p>
                  <p className="font-semibold text-foreground">Up to 8 days</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Water Resistance</p>
                  <p className="font-semibold text-foreground">100m (10 ATM)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Weight</p>
                  <p className="font-semibold text-foreground">3-6g (size dependent)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Sensors</p>
                  <p className="font-semibold text-foreground">PPG, Temperature, Accelerometer, Gyroscope</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Connectivity</p>
                  <p className="font-semibold text-foreground">Bluetooth 5.4 LE</p>
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
