"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check, Star } from "lucide-react"
import Link from "next/link"

export default function MetaQuest3() {
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
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-12 border border-border aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-6xl">🥽</span>
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
                  <span className="text-muted-foreground">(2,847 reviews)</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meta Quest 3</h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Product Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Experience the future of virtual and mixed reality with the Meta Quest 3. This cutting-edge VR headset 
                  combines powerful performance with stunning visuals, delivering an immersive experience like never before.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With advanced AI-powered features, the Quest 3 adapts to your environment, offering seamless transitions 
                  between virtual reality and mixed reality modes. Whether you're gaming, working, or connecting with others, 
                  the Quest 3 provides unparalleled clarity and comfort.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Next-generation Snapdragon XR2 Gen 2 processor",
                    "4K+ Infinite Display with 2064 x 2208 per eye",
                    "Mixed reality with full-color passthrough",
                    "TruTouch haptic feedback controllers",
                    "Up to 2.2 hours of battery life",
                    "128GB or 512GB storage options",
                    "Spatial audio with 3D positional sound",
                    "Hand tracking and eye tracking support"
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
