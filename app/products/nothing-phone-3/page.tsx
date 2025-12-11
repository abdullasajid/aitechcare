"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NothingPhone3Page() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/nothing-phone.jpg",
    "/nothing-phone-2.jpg",
    "/nothing-phone-3.jpg",
    "/nothing-phone-4.jpg",
  ]

  const features = [
    "6.7-inch LTPO AMOLED display with 120Hz refresh rate",
    "Snapdragon 8s Gen 3 chipset",
    "Glyph Interface 2.0 with AI notifications",
    "50MP triple camera system with OIS",
    "Nothing OS 3.0 based on Android 15",
    "5000mAh battery with 65W fast charging",
    "Advanced transparent design with enhanced LEDs",
    "45W wireless charging and reverse charging",
    "Glyph AI for smart light patterns",
    "ChatGPT and Gemini integration",
    "4 years of OS updates and 5 years of security patches",
    "Essential Mode for digital wellbeing",
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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-gray-500/10">
                <Image
                  src={images[selectedImage]}
                  alt="Nothing Phone (3)"
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
                      alt={`Nothing Phone (3) view ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-accent font-semibold mb-2">Nothing</p>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  Nothing Phone (3)
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(4.7/5)</span>
                </div>
                <p className="text-muted-foreground text-lg">
                  The Nothing Phone (3) takes the iconic Glyph Interface to the next level with AI 
                  integration. Featuring flagship performance, clean Nothing OS, and the most advanced 
                  transparent design yet.
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
                  <p><strong>Display:</strong> 6.7-inch LTPO AMOLED, 120Hz, up to 1600 nits</p>
                  <p><strong>Processor:</strong> Snapdragon 8s Gen 3</p>
                  <p><strong>RAM:</strong> 12GB/16GB</p>
                  <p><strong>Storage:</strong> 256GB, 512GB</p>
                  <p><strong>Camera:</strong> 50MP Main (OIS), 50MP Ultra Wide, 50MP Telephoto</p>
                  <p><strong>Battery:</strong> 5000mAh with 65W wired, 45W wireless</p>
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
