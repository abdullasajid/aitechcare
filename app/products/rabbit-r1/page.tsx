"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function RabbitR1() {
  const [selectedImage, setSelectedImage] = useState("/rabbit-r1.jpg")

  const images = [
    "/rabbit-r1.jpg",
    "/rabbit-r1-2.jpg",
    "/rabbit-r1-3.jpg",
    "/rabbit-r1-4.jpg",
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
                alt="Rabbit R1"
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
                    alt={`Rabbit R1 view ${index + 1}`}
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
              <p className="text-accent font-semibold mb-2">Rabbit</p>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Rabbit R1
              </h1>
              <p className="text-lg text-muted-foreground">
                Compact AI assistant device with touchscreen and voice commands for everyday tasks
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>2.88" touchscreen display with intuitive interface</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Large Action Model (LAM) for understanding complex tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Push-to-talk button for instant AI assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>360° rotating camera for versatile capture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>4G LTE connectivity with built-in SIM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Compact pocket-sized design with scroll wheel navigation</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Display</p>
                  <p className="font-semibold text-foreground">2.88" touchscreen</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Battery Life</p>
                  <p className="font-semibold text-foreground">All day use</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Camera</p>
                  <p className="font-semibold text-foreground">8MP 360° rotating</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Storage</p>
                  <p className="font-semibold text-foreground">128GB internal</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Connectivity</p>
                  <p className="font-semibold text-foreground">4G LTE, Wi-Fi, Bluetooth</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Weight</p>
                  <p className="font-semibold text-foreground">115g</p>
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
