"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function GalaxyRing() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/galaxy_ring-1.webp",
    "/galaxy_ring-2.webp",
    "/galaxy_ring-3.webp",
    "/galaxy_ring-4.webp",
    "/galaxy_ring-5.webp",
    "/galaxy_ring-6.webp",
    "/galaxy_ring-7.webp",
    "/galaxy_ring-8.webp",
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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10">
                <Image
                  src={images[selectedImage]}
                  alt="Samsung Galaxy Ring"
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
                      alt={`Samsung Galaxy Ring view ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  Samsung Galaxy Ring
                </h1>
                <p className="text-muted-foreground text-lg">
                  Smart ring with AI-powered health tracking, heart rate monitoring, and sleep analysis
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">AI-powered health insights with Galaxy AI integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">24/7 heart rate and blood oxygen monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Advanced sleep tracking with AI sleep coaching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Skin temperature sensing for cycle tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Up to 7 days battery life on a single charge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Water resistant up to 100m (10 ATM)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Lightweight titanium design in multiple sizes</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Specifications
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Material:</strong> Titanium with epoxy coating</p>
                  <p><strong>Battery Life:</strong> Up to 7 days</p>
                  <p><strong>Water Resistance:</strong> 100m (10 ATM)</p>
                  <p><strong>Weight:</strong> 2.3-3.0g (size dependent)</p>
                  <p><strong>Sensors:</strong> Optical heart rate, SpO2, skin temperature, accelerometer</p>
                  <p><strong>Connectivity:</strong> Bluetooth 5.4</p>
                  <p><strong>Compatibility:</strong> Android devices with Samsung Health app</p>
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
