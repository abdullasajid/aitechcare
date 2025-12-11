"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MetaAIGlassesPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/meta_glasses1.webp",
    "/meta_glasses2.webp",
    "/meta_glasses3.webp",
    "/meta_glasses4.webp",
    "/meta_glasses5.webp",
  ]

  const features = [
    "Built-in AI assistant with voice commands",
    "12MP camera for photos and 1080p video recording",
    "Open-ear speakers for immersive audio",
    "Live streaming to social media platforms",
    "Hands-free calling and messaging",
    "Up to 4 hours of battery life",
    "Iconic Ray-Ban Wayfarer design",
    "Prescription lens compatible",
    "Water-resistant IPX4 rating",
    "Voice control for hands-free operation",
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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/10 to-teal-500/10">
                <Image
                  src={images[selectedImage]}
                  alt="Meta AI Glasses"
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="grid grid-cols-5 gap-2">
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
                      alt={`Meta AI Glasses view ${index + 1}`}
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
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  Meta AI Glasses
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
                  <span className="text-muted-foreground">(4.5/5)</span>
                </div>
                <p className="text-muted-foreground text-lg">
                  Ray-Ban Meta smart glasses combine iconic style with cutting-edge AI technology. 
                  Experience hands-free photography, music, calls, and AI assistance while keeping 
                  your natural field of view clear.
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
                  <p><strong>Camera:</strong> 12MP ultra-wide with auto HDR</p>
                  <p><strong>Audio:</strong> Custom open-ear speakers</p>
                  <p><strong>Battery:</strong> Up to 4 hours of use, portable charging case included</p>
                  <p><strong>Connectivity:</strong> Bluetooth 5.2, Wi-Fi</p>
                  <p><strong>Weight:</strong> Approximately 50g</p>
                  <p><strong>Compatibility:</strong> iOS and Android via Meta View app</p>
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
