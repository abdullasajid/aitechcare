"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function AqaraHubM3() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    "/hubM3.png",
    "/hubM3-1.jpg",
  ]
  
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/#ai-products" className="inline-flex items-center gap-2 text-accent hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="Aqara Hub M3"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-6 gap-2">
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
                      alt={`Aqara Hub M3 view ${index + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Aqara Hub M3</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Aqara Hub M3 is the ultimate smart home control center, bringing together all your devices 
                  under one powerful hub. With Matter and Thread support, it seamlessly connects over 200+ Zigbee 
                  devices while offering universal compatibility with Apple HomeKit, Amazon Alexa, and Google Home.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Designed for the modern smart home, the Hub M3 features a sleek display showing temperature, 
                  humidity, and air quality in real-time. Its advanced automation engine learns your patterns and 
                  creates intelligent routines that make your home truly responsive to your needs.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Matter and Thread compatible for universal connectivity",
                    "Supports 200+ Zigbee 3.0 devices simultaneously",
                    "Built-in IR control for TVs and AC units",
                    "Real-time environmental monitoring (temp, humidity, air quality)",
                    "Works with Apple HomeKit, Alexa, and Google Home",
                    "Local automation processing for instant response",
                    "Ethernet and Wi-Fi connectivity options",
                    "Compact design with informative OLED display"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
