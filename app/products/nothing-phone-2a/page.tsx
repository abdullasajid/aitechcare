"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NothingPhone2aPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/nothing-phone.jpg",
    "/nothing-phone-2.jpg",
    "/nothing-phone-3.jpg",
    "/nothing-phone-4.jpg",
  ]

  const features = [
    "6.7-inch AMOLED display with 120Hz refresh rate",
    "MediaTek Dimensity 7200 Pro chipset",
    "Glyph Interface for unique notifications",
    "50MP dual camera system",
    "Nothing OS 2.5 based on Android 14",
    "5000mAh battery with 45W fast charging",
    "Transparent design with iconic LED patterns",
    "Wireless charging and reverse wireless charging",
    "Premium aluminum frame",
    "3 years of OS updates and 4 years of security patches",
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
                  alt="Nothing Phone (2a)"
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
                      alt={`Nothing Phone (2a) view ${index + 1}`}
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
                  Nothing Phone (2a)
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
                  <span className="text-muted-foreground">(4.6/5)</span>
                </div>
                <p className="text-muted-foreground text-lg">
                  The Nothing Phone (2a) brings the iconic Glyph Interface and Nothing's design 
                  philosophy to a more accessible price point. Experience unique LED notifications, 
                  clean Nothing OS, and solid performance.
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
                  <p><strong>Display:</strong> 6.7-inch AMOLED, 120Hz, up to 1300 nits</p>
                  <p><strong>Processor:</strong> MediaTek Dimensity 7200 Pro</p>
                  <p><strong>RAM:</strong> 8GB/12GB</p>
                  <p><strong>Storage:</strong> 128GB, 256GB</p>
                  <p><strong>Camera:</strong> 50MP Main, 50MP Ultra Wide</p>
                  <p><strong>Battery:</strong> 5000mAh with 45W fast charging</p>
                  <p><strong>Water Resistance:</strong> IP54</p>
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
