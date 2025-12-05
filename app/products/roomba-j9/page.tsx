"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check, Star } from "lucide-react"
import Link from "next/link"

export default function RoombaJ9() {
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
            {/* Product Image */}
            <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl p-12 border border-border aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-3xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-6xl">🤖</span>
                </div>
                <p className="text-muted-foreground">Product Image</p>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                  <span className="text-muted-foreground">(4,521 reviews)</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Roomba j9+</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Meet iRobot's smartest robot vacuum yet. The Roomba j9+ combines powerful cleaning performance with 
                  advanced AI to navigate your home intelligently, avoiding obstacles and ensuring every corner is spotless.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Featuring PrecisionVision Navigation and automatic dirt disposal, the j9+ learns your home's layout and 
                  cleaning preferences over time. With the Clean Base® Automatic Dirt Disposal, you can forget about vacuuming 
                  for months at a time.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "PrecisionVision Navigation with AI obstacle avoidance",
                    "Clean Base® Automatic Dirt Disposal (60 days)",
                    "4-Stage Cleaning System with 100% stronger suction",
                    "Dual Multi-Surface Rubber Brushes",
                    "Smart Mapping with room-specific cleaning",
                    "Pet Owner Official Promise (P.O.O.P.) guarantee",
                    "Works with Alexa, Google Assistant, and Siri",
                    "Scheduled cleaning and zone control via app"
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
