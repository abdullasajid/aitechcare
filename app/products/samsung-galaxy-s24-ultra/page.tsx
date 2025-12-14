"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function SamsungGalaxyS24UltraPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/samsung-s24.jpg",
    "/samsung-s24-2.jpg",
    "/samsung-s24-3.jpg",
    "/samsung-s24-4.jpg",
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
              <div className="relative bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="Samsung Galaxy S24 Ultra"
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
                      alt={`Samsung Galaxy S24 Ultra view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Samsung Galaxy S24 Ultra</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Samsung's most powerful smartphone featuring a 200MP camera and Galaxy AI capabilities. 
                  Built with premium titanium and designed for ultimate productivity and creativity with 
                  the iconic S Pen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Experience cutting-edge AI features including Circle to Search, real-time translation, 
                  and advanced photo editing. The stunning Dynamic AMOLED display delivers vibrant colors 
                  with ProMotion technology.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "6.8-inch Dynamic AMOLED 2X display with 120Hz",
                    "Snapdragon 8 Gen 3 for Galaxy processor",
                    "200MP main camera with AI-enhanced photography",
                    "Galaxy AI features including Circle to Search",
                    "Built-in S Pen for productivity",
                    "5000mAh battery with 45W fast charging",
                    "Titanium frame with Gorilla Glass Armor",
                    "IP68 water and dust resistance"
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
