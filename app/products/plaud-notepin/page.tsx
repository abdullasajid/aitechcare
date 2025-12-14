"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function PlaudNotePinPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/plaudpin-1.webp",
    "/plaudpin-2.webp",
    "/plaudpin-3.webp",
    "/plaudpin-4.webp",
    "/plaudpin-5.webp",
    "/plaudpin-6.webp",
    "/plaudpin-7.webp",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/#ai-gadgets" className="inline-flex items-center gap-2 text-accent hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="Plaud NotePin"
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
                      alt={`Plaud NotePin view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Plaud NotePin</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Plaud NotePin is a revolutionary wearable AI voice recorder that clips onto your clothing, 
                  allowing you to capture conversations and meetings hands-free. With advanced AI-powered 
                  transcription and summarization, it's the perfect tool for professionals and students.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The elegant pin design is both functional and stylish, featuring premium materials and a 
                  minimalist aesthetic. Simply pin it on and let AI handle the rest - from recording to 
                  transcription to intelligent summarization.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Wearable pin-on design with premium materials",
                    "AI-powered transcription and smart summarization",
                    "20-hour battery life with 64GB storage",
                    "Real-time transcription in 60+ languages",
                    "Secure cloud backup and cross-device sync",
                    "One-touch recording with LED indicator",
                    "Water-resistant design (IPX4 rating)",
                    "Companion app for iOS and Android"
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
