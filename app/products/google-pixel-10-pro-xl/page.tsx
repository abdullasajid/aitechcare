"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function GooglePixel10ProXLPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    "/pixel.png",
    "/pixel.png",
    "/pixel.png",
    "/pixel.png",
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
              <div className="relative bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="Google Pixel 10 Pro XL"
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
                      alt={`Pixel 10 Pro XL view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Google Pixel 10 Pro XL</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Google's most advanced Pixel brings Gemini 2.0 AI directly to your pocket. With 
                  the Tensor G5 chip, revolutionary computational photography, and on-device AI 
                  processing, it's the smartest smartphone ever created.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Experience unparalleled AI capabilities with real-time translation in 100+ languages, 
                  advanced photo editing with Magic Editor Pro, and 7 years of guaranteed updates. 
                  The large 6.8-inch display delivers stunning visuals for all your content.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "6.8-inch Super Actua LTPO OLED display with 120Hz",
                    "Google Tensor G5 chip with advanced AI capabilities",
                    "50MP main camera with Gemini 2.0 AI enhancements",
                    "Gemini 2.0 on-device AI for real-time processing",
                    "Magic Editor Pro with AI-powered transformations",
                    "All-day battery with 45W fast charging",
                    "7 years of OS and security updates",
                    "Real-time AI translation in 100+ languages"
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
