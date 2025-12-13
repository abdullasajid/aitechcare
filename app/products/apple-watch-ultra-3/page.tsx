"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AppleWatchUltra3Page() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/watch1.png",
    "/watch2.png",
    "/watch3.png",
    "/watch4.png",
    "/watch5.png",
    "/watch6.png",
    "/watch7.png",
  ]

  const features = [
    "49mm aerospace-grade titanium case",
    "Always-On Retina display up to 3000 nits",
    "S9 SiP with double-tap gesture control",
    "Advanced health sensors (ECG, blood oxygen, temperature)",
    "Precision dual-frequency GPS",
    "Up to 36 hours of battery life",
    "Water resistant to 100m depth",
    "Crash detection and fall detection",
    "Action button for quick access to features",
    "Cellular connectivity with eSIM",
    "AI-powered fitness coaching and insights",
    "Sleep tracking with sleep stages",
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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-teal-500/10 to-green-500/10">
                <Image
                  src={images[selectedImage]}
                  alt="Apple Watch Ultra 3"
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="grid grid-cols-7 gap-2">
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
                      alt={`Apple Watch Ultra 3 view ${index + 1}`}
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
                  Apple Watch Ultra 3
                </h1>
                <p className="text-muted-foreground text-lg">
                  The most rugged and capable Apple Watch pushes the limits of what a smartwatch can do. 
                  With advanced AI-powered health tracking, precision GPS, and extreme durability, 
                  it's designed for athletes, adventurers, and anyone who demands more.
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
                  <p><strong>Display:</strong> 49mm always-on LTPO OLED Retina display</p>
                  <p><strong>Processor:</strong> Apple S9 SiP with Neural Engine</p>
                  <p><strong>Storage:</strong> 64GB</p>
                  <p><strong>Battery:</strong> Up to 36 hours normal use, 72 hours in Low Power Mode</p>
                  <p><strong>Sensors:</strong> ECG, blood oxygen, optical heart sensor, temperature, depth gauge, compass</p>
                  <p><strong>Connectivity:</strong> GPS (L1 + L5), Cellular, Wi-Fi 4, Bluetooth 5.3, NFC, Ultra Wideband</p>
                  <p><strong>Water Resistance:</strong> WR100 (100m), IP6X dust resistant, MIL-STD 810H</p>
                  <p><strong>Operating Temp:</strong> -20° to 55° C</p>
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
