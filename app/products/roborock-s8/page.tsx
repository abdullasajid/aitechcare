"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function RoborockS8() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    "/roborock1.png",
    "/roborock2.jpg",
    "/roborock3.jpg",
    "/roborock4.jpg",
    "/roborock5.jpg",
    "/roborock6.jpg",
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
              <div className="relative bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="Roborock S8 Pro Ultra"
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
                      alt={`Roborock S8 Pro Ultra view ${index + 1}`}
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
                  <span className="text-muted-foreground">(3,156 reviews)</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Roborock S8 Pro Ultra</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Experience the ultimate in automated cleaning with the Roborock S8 Pro Ultra. This premium robot vacuum 
                  and mop system features an advanced all-in-one dock that washes, dries, and refills automatically, 
                  delivering a truly hands-free cleaning experience.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Equipped with ReactiveAI 2.0 obstacle avoidance and powerful 6000Pa suction, the S8 Pro Ultra handles 
                  everything from pet hair to deep carpet cleaning. The VibraRise 2.0 mopping system ensures spotless 
                  hard floors while automatically lifting when carpets are detected.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "6000Pa HyperForce suction power",
                    "RockDock Ultra with self-washing, drying & refilling",
                    "ReactiveAI 2.0 obstacle avoidance",
                    "VibraRise 2.0 sonic mopping (3000 vibrations/min)",
                    "DuoRoller brush system for carpets",
                    "PreciSense LiDAR navigation",
                    "10-week dustbin capacity",
                    "Multi-level mapping and zone cleaning"
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
