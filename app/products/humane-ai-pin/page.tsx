"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HumaneAIPin() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/humane-pin.jpg",
    "/humane-pin-2.jpg",
    "/humane-pin-3.jpg",
    "/humane-pin-4.jpg",
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
                  alt="Humane AI Pin"
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
                      alt={`Humane AI Pin view ${index + 1}`}
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
              <p className="text-accent font-semibold mb-2">Humane</p>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Humane AI Pin
              </h1>
              <p className="text-lg text-muted-foreground">
                Standalone AI device with laser projector display and voice control - no phone required
              </p>
            </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Standalone AI device with built-in cellular connectivity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Laser ink display projects interface onto your palm</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Advanced voice control with natural language processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">13MP camera with AI vision for real-world analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Translation, search, and communication without a phone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Magnetic attachment with battery booster system</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Specifications
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Processor:</strong> Qualcomm Snapdragon</p>
                  <p><strong>Battery Life:</strong> All day with booster</p>
                  <p><strong>Camera:</strong> 13MP ultra-wide</p>
                  <p><strong>Display:</strong> Laser Ink projector</p>
                  <p><strong>Connectivity:</strong> 4G LTE, Wi-Fi, Bluetooth</p>
                  <p><strong>Weight:</strong> 34g (with battery)</p>
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
