"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function GooglePixel9ProXLPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/pixel9.jpg",
    "/pixel9-2.jpg",
    "/pixel9-3.jpg",
    "/pixel9-4.jpg",
  ]

  const features = [
    "6.8-inch Super Actua LTPO OLED display with 120Hz",
    "Google Tensor G4 chip with advanced AI capabilities",
    "50MP main camera with Gemini AI photo enhancements",
    "Gemini Nano on-device AI for real-time processing",
    "Magic Editor with AI-powered object removal",
    "All-day battery with 37W fast charging",
    "7 years of OS and security updates",
    "Call Screen with real-time AI transcription",
    "Circle to Search with multimodal understanding",
    "Pixel Screenshots with AI memory recall",
    "Live Translate for conversations",
    "Thermometer sensor for temperature readings",
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
                  alt="Google Pixel 9 Pro XL"
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
                      alt={`Google Pixel 9 Pro XL view ${index + 1}`}
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
                  Google Pixel 9 Pro XL
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
                  Google's largest and most powerful Pixel brings Gemini AI to your fingertips. With 
                  the Tensor G4 chip, advanced computational photography, and on-device AI processing, 
                  it's the smartest smartphone ever made.
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
                  <p><strong>Display:</strong> 6.8-inch Super Actua LTPO OLED, 120Hz, 3000 nits peak</p>
                  <p><strong>Processor:</strong> Google Tensor G4 with Titan M2 security</p>
                  <p><strong>RAM:</strong> 16GB LPDDR5X</p>
                  <p><strong>Storage:</strong> 128GB, 256GB, 512GB, 1TB</p>
                  <p><strong>Camera:</strong> 50MP Main, 48MP Ultra Wide, 48MP 5x Telephoto</p>
                  <p><strong>Battery:</strong> 5060mAh with 37W wired, 23W wireless charging</p>
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
