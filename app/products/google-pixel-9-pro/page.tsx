"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function GooglePixel9ProPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/pixel9.jpg",
    "/pixel9-2.jpg",
    "/pixel9-3.jpg",
    "/pixel9-4.jpg",
  ]

  const features = [
    "6.8-inch Super Actua OLED display with 120Hz",
    "Google Tensor G4 chip with Titan M2 security",
    "50MP main camera with AI-powered photo editing",
    "Gemini AI integration for advanced assistance",
    "Magic Editor and Best Take photo features",
    "All-day battery with fast wireless charging",
    "7 years of OS and security updates",
    "Call Screen with AI voice detection",
    "Circle to Search powered by Google AI",
    "Android 14 with exclusive Pixel features",
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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-green-500/10 to-blue-500/10">
                <Image
                  src={images[selectedImage]}
                  alt="Google Pixel 9 Pro"
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
                      alt={`Google Pixel 9 Pro view ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-accent font-semibold mb-2">Google</p>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  Google Pixel 9 Pro
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
                  The Google Pixel 9 Pro brings the power of Gemini AI to your pocket. With advanced 
                  computational photography, the Tensor G4 chip, and seamless integration with Google services, 
                  it's the ultimate AI-powered smartphone.
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
