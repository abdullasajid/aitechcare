"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function GoogleNestCam() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    "/google_cam1.png",
    "/google_cam2.png",
    "/google_cam3.png",
    "/google_cam4.png",
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
              <div className="relative bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="Google Nest Cam"
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
                      alt={`Google Nest Cam view ${index + 1}`}
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
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                  <span className="text-muted-foreground">(5,892 reviews)</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Google Nest Cam</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Keep your home secure with the Google Nest Cam, featuring intelligent AI-powered alerts that distinguish 
                  between people, animals, and vehicles. This weatherproof camera works indoors and outdoors, providing 
                  24/7 monitoring with crystal-clear 1080p HDR video.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With built-in Google Assistant, night vision, and up to 3 hours of backup battery, the Nest Cam ensures 
                  your home is protected at all times. Store up to 3 hours of event video history for free, or upgrade to 
                  Nest Aware for extended recording and additional features.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "1080p HDR video with night vision",
                    "AI-powered intelligent alerts (people, animals, vehicles)",
                    "Built-in Google Assistant speaker",
                    "Weatherproof design for indoor/outdoor use",
                    "3 hours of free event video history",
                    "Up to 3 hours of backup battery power",
                    "Two-way talk with noise cancellation",
                    "Works with Google Home and Nest devices"
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
