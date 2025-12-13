"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function iPhoneAirPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/iphoneair-1.png",
    "/iphoneair-2.png",
    "/iphoneair-3.png",
    "/iphoneair-4.png",
    "/iphoneair-5.png",
  ]

  const features = [
    "6.6-inch Super Retina XDR display with ProMotion",
    "A19 chip with advanced Neural Engine",
    "Ultra-thin 5.5mm design - thinnest iPhone ever",
    "48MP Fusion camera with computational photography",
    "Apple Intelligence built-in",
    "Aerospace-grade aluminum unibody",
    "All-day battery life with MagSafe charging",
    "5G and Wi-Fi 7 connectivity",
    "Dynamic Island for notifications",
    "iOS 19 with full AI integration",
    "Under-display Face ID",
    "Featherweight at just 140g",
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
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-500/10 to-silver-500/10">
                <Image
                  src={images[selectedImage]}
                  alt="iPhone Air"
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
                      alt={`iPhone Air view ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-accent font-semibold mb-2">Apple</p>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  iPhone Air
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(4.8/5)</span>
                </div>
                <p className="text-muted-foreground text-lg">
                  Impossibly thin. Incredibly powerful. The iPhone Air is Apple's thinnest smartphone 
                  ever at just 5.5mm, delivering flagship performance in an ultra-portable design 
                  with Apple Intelligence built-in.
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
                  <p><strong>Display:</strong> 6.6-inch Super Retina XDR with ProMotion 120Hz</p>
                  <p><strong>Chip:</strong> A19 with 6-core Neural Engine</p>
                  <p><strong>Storage:</strong> 128GB, 256GB, 512GB</p>
                  <p><strong>Camera:</strong> 48MP Fusion camera with Smart HDR 6</p>
                  <p><strong>Thickness:</strong> 5.5mm - thinnest iPhone ever</p>
                  <p><strong>Weight:</strong> 140g</p>
                  <p><strong>Materials:</strong> Aerospace-grade aluminum unibody</p>
                  <p><strong>Water Resistance:</strong> IP68</p>
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
