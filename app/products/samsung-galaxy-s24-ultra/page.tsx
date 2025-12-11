"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SamsungGalaxyS24UltraPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/samsung-s24.jpg",
    "/samsung-s24-2.jpg",
    "/samsung-s24-3.jpg",
    "/samsung-s24-4.jpg",
  ]

  const features = [
    "6.8-inch Dynamic AMOLED 2X display with 120Hz",
    "Snapdragon 8 Gen 3 for Galaxy processor",
    "200MP main camera with AI-enhanced photography",
    "Galaxy AI features including Circle to Search",
    "Built-in S Pen for productivity",
    "5000mAh battery with 45W fast charging",
    "Titanium frame with Gorilla Glass Armor",
    "Up to 1TB storage",
    "Ray tracing for mobile gaming",
    "One UI 6.1 with AI assistant",
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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10">
                <Image
                  src={images[selectedImage]}
                  alt="Samsung Galaxy S24 Ultra"
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
                      alt={`Samsung Galaxy S24 Ultra view ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-accent font-semibold mb-2">Samsung</p>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  Samsung Galaxy S24 Ultra
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
                  Samsung's most powerful smartphone featuring a 200MP camera, Galaxy AI capabilities, 
                  and the iconic S Pen. Built with premium titanium and designed for ultimate productivity 
                  and creativity.
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
                  <p><strong>Display:</strong> 6.8-inch Dynamic AMOLED 2X, 120Hz, 2600 nits peak</p>
                  <p><strong>Processor:</strong> Snapdragon 8 Gen 3 for Galaxy</p>
                  <p><strong>RAM:</strong> 12GB</p>
                  <p><strong>Storage:</strong> 256GB, 512GB, 1TB</p>
                  <p><strong>Camera:</strong> 200MP Main, 12MP Ultra Wide, 50MP 5x Periscope, 10MP 3x Telephoto</p>
                  <p><strong>Battery:</strong> 5000mAh with 45W wired, 15W wireless charging</p>
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
