"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function HumaneAIPin() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    "/humane-pin.jpg",
    "/humane-pin-2.jpg",
    "/humane-pin-3.jpg",
    "/humane-pin-4.jpg",
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
              <div className="relative bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="Humane AI Pin"
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
                      alt={`Humane AI Pin view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Humane AI Pin</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Standalone AI device with laser projector display and voice control - no phone required. 
                  The Humane AI Pin represents a new category of wearable AI that puts advanced intelligence 
                  directly at your fingertips.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With built-in cellular connectivity and a revolutionary laser ink display that projects onto 
                  your palm, access information, translate languages, and communicate seamlessly without ever 
                  pulling out your phone.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Standalone AI device with built-in cellular connectivity",
                    "Laser ink display projects interface onto your palm",
                    "Advanced voice control with natural language processing",
                    "13MP camera with AI vision for real-world analysis",
                    "Real-time translation and search",
                    "Touch and gesture controls",
                    "All-day battery with magnetic charging",
                    "Privacy-focused design with Trust Light"
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
