"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function iPhone16ProMaxPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/iphone16.jpg",
    "/iphone16-2.jpg",
    "/iphone16-3.jpg",
    "/iphone16-4.jpg",
  ]

  const features = [
    "6.9-inch Super Retina XDR display with ProMotion",
    "A18 Pro chip with 6-core Neural Engine",
    "Pro camera system with 48MP Main, Ultra Wide, and Telephoto",
    "Apple Intelligence for enhanced AI features",
    "Advanced video recording up to 4K120 ProRes",
    "Titanium design with Action button",
    "Up to 33 hours video playback",
    "5G connectivity",
    "Ceramic Shield front cover",
    "iOS 18 with latest AI capabilities",
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
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <Image
                  src={images[selectedImage]}
                  alt="iPhone 16 Pro Max"
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
                      alt={`iPhone 16 Pro Max view ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-accent font-semibold mb-2">Apple</p>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  iPhone 16 Pro Max
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
                  <span className="text-muted-foreground">(4.9/5)</span>
                </div>
                <p className="text-muted-foreground text-lg">
                  The ultimate iPhone with the largest Super Retina XDR display, A18 Pro chip, 
                  and advanced camera system. Experience Apple Intelligence with powerful AI features 
                  that enhance everything you do.
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
                  <p><strong>Display:</strong> 6.9-inch Super Retina XDR with ProMotion 120Hz</p>
                  <p><strong>Chip:</strong> A18 Pro with 6-core Neural Engine</p>
                  <p><strong>Storage:</strong> 256GB, 512GB, 1TB</p>
                  <p><strong>Camera:</strong> 48MP Main, 48MP Ultra Wide, 12MP 5x Telephoto</p>
                  <p><strong>Battery:</strong> Up to 33 hours video playback</p>
                  <p><strong>Materials:</strong> Titanium design with textured matte glass back</p>
                  <p><strong>Water Resistance:</strong> IP68 (maximum depth of 6 meters up to 30 minutes)</p>
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
