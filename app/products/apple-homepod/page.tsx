"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check, Star } from "lucide-react"
import Link from "next/link"

export default function AppleHomePod() {
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
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-12 border border-border aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-6xl">🔊</span>
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
                  <span className="text-muted-foreground">(4,123 reviews)</span>
                </div>
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
