"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check, Star } from "lucide-react"
import Link from "next/link"

export default function AmazonEchoHub() {
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
            <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl p-12 border border-border aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-3xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-6xl">🖥️</span>
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
                  <span className="text-muted-foreground">(2,347 reviews)</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Amazon Echo Hub</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Transform your smart home control with the Amazon Echo Hub. This dedicated 8-inch touchscreen display 
                  puts all your connected devices at your fingertips, providing a central command center for your entire 
                  smart home ecosystem powered by Alexa AI.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a sleek, wall-mountable design and intuitive interface, the Echo Hub makes managing lights, 
                  thermostats, cameras, and more effortless. View multiple camera feeds simultaneously, control scenes 
                  with a tap, and get personalized smart home suggestions based on your routines.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "8-inch HD touchscreen display",
                    "Control 200+ compatible smart home brands",
                    "View multiple camera feeds at once",
                    "Built-in Alexa for voice control",
                    "Customizable dashboard with widgets",
                    "Matter and Zigbee smart home hub built-in",
                    "Wall-mountable or tabletop stand",
                    "Privacy controls with mute button"
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
