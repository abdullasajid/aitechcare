"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function iPhone17ProMaxPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    "/iphone17-1.png",
    "/iphone17-2.png",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/#smartphones" className="inline-flex items-center gap-2 text-accent hover:underline mb-8">
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
                  alt="iPhone 17 Pro Max"
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
                      alt={`iPhone 17 Pro Max view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">iPhone 17 Pro Max</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The ultimate iPhone with the A19 Pro chip, Apple Intelligence 2.0, and the most advanced camera system ever. 
                  Experience next-generation AI capabilities with Siri 2.0 and breakthrough display technology.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a stunning 6.9-inch Super Retina XDR display featuring ProMotion 240Hz, titanium design, and up to 
                  2TB storage, the iPhone 17 Pro Max delivers unmatched performance and sophistication.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "6.9-inch Super Retina XDR display with ProMotion 240Hz",
                    "A19 Pro chip with enhanced Neural Engine",
                    "Pro camera system with 48MP Main, Ultra Wide, and 5x Telephoto",
                    "Apple Intelligence 2.0 with advanced AI features",
                    "ProRes and Log video recording up to 8K",
                    "Titanium design with Action button and Camera Control",
                    "Up to 40 hours video playback",
                    "5G and Wi-Fi 7 connectivity"
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
