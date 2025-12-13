"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AirPodsPro3() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/airpods-pro3.jpg",
    "/airpods-pro3-2.jpg",
    "/airpods-pro3-3.jpg",
    "/airpods-pro3-4.jpg",
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
                  alt="AirPods Pro 3"
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
                      alt={`AirPods Pro 3 view ${index + 1}`}
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
                  AirPods Pro 3
                </h1>
                <p className="text-muted-foreground text-lg">
                  Next-generation wireless earbuds with advanced AI noise cancellation and health tracking
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">AI-powered Adaptive Noise Cancellation with personalized profiles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Advanced health sensors for heart rate and temperature monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Enhanced Siri with contextual AI understanding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Spatial Audio with dynamic head tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Up to 36 hours total battery life with MagSafe charging case</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">USB-C charging and improved water resistance (IP55)</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Specifications
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Chip:</strong> H3 Ultra</p>
                  <p><strong>Battery Life:</strong> 6h (ANC on) / 36h total</p>
                  <p><strong>Connectivity:</strong> Bluetooth 5.4</p>
                  <p><strong>Water Resistance:</strong> IP55</p>
                  <p><strong>Sensors:</strong> Heart rate, Temperature, Accelerometer</p>
                  <p><strong>Charging:</strong> USB-C, MagSafe, Qi wireless</p>
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
