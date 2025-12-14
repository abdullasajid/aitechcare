"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function GooglePixel9ProPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    "/pixel9.jpg",
    "/pixel9-2.jpg",
    "/pixel9-3.jpg",
    "/pixel9-4.jpg",
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
                  alt="Google Pixel 9 Pro"
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
                      alt={`Pixel 9 Pro view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Google Pixel 9 Pro</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Google Pixel 9 Pro brings the power of Gemini AI to your pocket. With advanced 
                  computational photography, the Tensor G4 chip, and seamless integration with Google services, 
                  it's the ultimate AI-powered smartphone.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Experience revolutionary AI features like Magic Editor, Best Take, and real-time translation. 
                  The 6.3-inch Super Actua display delivers stunning visuals while the advanced camera system 
                  captures perfect photos in any lighting condition.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "6.3-inch Super Actua OLED display with 120Hz",
                    "Google Tensor G4 chip with Titan M2 security",
                    "50MP main camera with AI-powered photo editing",
                    "Gemini AI integration for advanced assistance",
                    "Magic Editor and Best Take photo features",
                    "All-day battery with fast wireless charging",
                    "7 years of OS and security updates",
                    "Circle to Search powered by Google AI"
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
                  <p><strong>Display:</strong> 6.8-inch Super Actua OLED, 120Hz, up to 2000 nits</p>
                  <p><strong>Processor:</strong> Google Tensor G4 with Titan M2</p>
                  <p><strong>RAM:</strong> 16GB</p>
                  <p><strong>Storage:</strong> 128GB, 256GB, 512GB, 1TB</p>
                  <p><strong>Camera:</strong> 50MP Main, 48MP Ultra Wide, 48MP 5x Telephoto</p>
                  <p><strong>Battery:</strong> All-day battery with 30W fast charging</p>
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
