"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function MagSafeChargerPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = ["/magsafe.png", "/magsafe-2.jpg"]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/#accessories" className="inline-flex items-center gap-2 text-accent hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="MagSafe Charger"
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
                      alt={`MagSafe Charger view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">MagSafe Charger</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The MagSafe Charger makes wireless charging a snap. The perfectly aligned magnets attach 
                  to your iPhone 12 or later to provide faster wireless charging up to 15W.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The magnetic alignment experience only applies to iPhone 12, iPhone 13, iPhone 14, iPhone 15, 
                  and iPhone 16. MagSafe Charger maintains compatibility with Qi charging, so it can be used 
                  to wirelessly charge your iPhone 8 or later, as well as AirPods models with a wireless charging case.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "15W fast wireless charging for iPhone",
                    "Perfect magnetic alignment every time",
                    "Compatible with MagSafe cases",
                    "Qi2 certified for universal compatibility",
                    "1-meter integrated USB-C cable",
                    "Premium aluminum and silicone design",
                    "Works with iPhone 12 and later",
                    "Foreign object detection for safety"
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
