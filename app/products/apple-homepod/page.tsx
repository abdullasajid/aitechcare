"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function AppleHomePod() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    "/homepod1.png",
    "/homepod2.jpg",
    "/homepod3.jpg",
    "/homepod4.jpg",
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
              <div className="relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-border aspect-square overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt="Apple HomePod"
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
                      alt={`Apple HomePod view ${index + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Apple HomePod</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Experience room-filling audio with the Apple HomePod. Powered by the S7 chip and advanced computational 
                  audio, HomePod delivers rich, detailed sound that adapts to its environment. Siri intelligence makes 
                  controlling your music, smart home, and more completely effortless.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With spatial audio support, voice recognition for up to six family members, and seamless integration 
                  with your Apple devices, HomePod is the perfect smart speaker for Apple users. Control your HomeKit 
                  accessories, get news and weather updates, or simply enjoy your favorite Apple Music playlists in 
                  stunning quality.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "High-fidelity audio with 5 tweeters and woofer",
                    "Spatial Audio with Dolby Atmos support",
                    "Room sensing technology adapts sound",
                    "Built-in Siri with voice recognition",
                    "Works as HomeKit smart home hub",
                    "Seamless handoff from iPhone",
                    "Multi-room audio with AirPlay 2",
                    "Privacy with on-device processing"
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
