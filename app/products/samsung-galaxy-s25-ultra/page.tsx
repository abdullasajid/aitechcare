"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function SamsungGalaxyS25UltraPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    "/s25-1.avif",
    "/s25-2.avif",
    "/s25-3.avif",
    "/s25-4.avif",
    "/s25-5.avif",
    "/s25-6.avif",
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
              <div className="relative bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="Samsung Galaxy S25 Ultra"
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
                      alt={`Galaxy S25 Ultra view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Samsung Galaxy S25 Ultra</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The pinnacle of Samsung innovation with Galaxy AI 2.0, featuring the most powerful Snapdragon 
                  processor ever made for Galaxy. Experience revolutionary mobile computing with a stunning 6.9-inch 
                  display and advanced S Pen capabilities.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a premium titanium frame, 200MP camera system powered by Galaxy AI, and all-day battery life, 
                  the S25 Ultra is built for those who demand excellence in every aspect of their smartphone experience.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "6.9-inch Dynamic AMOLED 2X display with 120Hz",
                    "Snapdragon 8 Elite for Galaxy processor",
                    "200MP main camera with Galaxy AI 2.0 enhancements",
                    "Advanced Galaxy AI with real-time translation",
                    "Built-in S Pen with AI-powered features",
                    "5000mAh battery with 65W super fast charging",
                    "Titanium frame with Gorilla Glass Armor 2",
                    "One UI 7 with enhanced AI assistant"
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
                  Samsung's most advanced Galaxy ever with Snapdragon 8 Elite, Galaxy AI 2.0, and a 
                  revolutionary 200MP camera system. The titanium design and S Pen integration make 
                  it the ultimate productivity powerhouse.
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
                  <p><strong>Display:</strong> 6.9-inch Dynamic AMOLED 2X, 120Hz, 3000 nits peak</p>
                  <p><strong>Processor:</strong> Snapdragon 8 Elite for Galaxy</p>
                  <p><strong>RAM:</strong> 16GB</p>
                  <p><strong>Storage:</strong> 256GB, 512GB, 1TB</p>
                  <p><strong>Camera:</strong> 200MP Main, 50MP Ultra Wide, 50MP 5x Periscope, 10MP 3x Telephoto</p>
                  <p><strong>Battery:</strong> 5000mAh with 65W wired, 25W wireless charging</p>
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
