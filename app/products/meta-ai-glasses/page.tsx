"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function MetaAIGlassesPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    "/meta_glasses1.webp",
    "/meta_glasses2.webp",
    "/meta_glasses3.webp",
    "/meta_glasses4.webp",
    "/meta_glasses5.webp",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/#ai-wearables" className="inline-flex items-center gap-2 text-accent hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="Meta AI Glasses"
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
                      alt={`Meta AI Glasses view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meta AI Glasses</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ray-Ban Meta smart glasses combine iconic style with cutting-edge AI technology. 
                  Experience hands-free photography, music, calls, and AI assistance while keeping 
                  your natural field of view clear.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Built with Meta AI integration, these smart glasses let you capture moments, stream 
                  to social media, and get answers to questions without reaching for your phone. The 
                  classic Ray-Ban design means you look good while staying connected.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Built-in AI assistant with voice commands",
                    "12MP camera for photos and 1080p video recording",
                    "Open-ear speakers for immersive audio",
                    "Live streaming to social media platforms",
                    "Hands-free calling and messaging",
                    "Up to 4 hours of battery life",
                    "Iconic Ray-Ban Wayfarer design",
                    "Prescription lens compatible"
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
