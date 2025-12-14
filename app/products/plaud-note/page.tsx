"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function PlaudNotePage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/plaud.webp",
    "/plaud-1.webp",
    "/plaud-2.webp",
    "/plaud-3.webp",
    "/plaud-4.webp",
    "/plaud-5.webp",
    "/plaud-6.webp",
    "/plaud-7.webp",
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
              <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="Plaud Note"
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
                      alt={`Plaud Note view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Plaud Note</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Plaud Note is the world's first AI voice recorder with ChatGPT integration. This ultra-thin 
                  device attaches magnetically to your phone and captures crystal-clear audio with intelligent 
                  transcription and summarization powered by advanced AI.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Perfect for meetings, interviews, lectures, and everyday note-taking, the Plaud Note transforms 
                  your voice recordings into searchable, organized text with key insights automatically extracted.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "ChatGPT-powered AI transcription and summarization",
                    "Ultra-thin design (2.5mm) with MagSafe compatibility",
                    "30-hour battery life with 64GB storage",
                    "Real-time transcription in 50+ languages",
                    "Secure cloud backup and sync",
                    "One-touch recording with vibration feedback",
                    "Crystal clear audio with noise cancellation",
                    "Bluetooth 5.3 connectivity"
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
