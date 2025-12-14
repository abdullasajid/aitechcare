"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AirTagPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/airtag.jpg",
  ]

  const features = [
    "Precision Finding with Ultra Wideband",
    "Find My network with billions of devices",
    "Privacy-focused tracking design",
    "IP67 water and dust resistant",
    "Replaceable CR2032 battery (1 year)",
    "Built-in speaker for audible alerts",
    "Tap to pair with iPhone instantly",
    "Personalized engraving available",
    "Works with iOS and accessories",
    "Lost Mode with contact information",
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-500/10 to-slate-500/10">
                <Image
                  src={images[selectedImage]}
                  alt="AirTag 4 Pack"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-accent font-semibold mb-2">Apple</p>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  AirTag 4 Pack
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Keep track of your keys, wallet, luggage, backpack, and more with AirTag. Play a sound, use Precision Finding, or tap into the Find My network to locate your items.
                </p>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-foreground">$99</span>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Features
                </h2>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Specifications
                </h2>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm text-muted-foreground">Dimensions</dt>
                    <dd className="text-foreground font-medium">31.9mm diameter x 8mm height</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Battery</dt>
                    <dd className="text-foreground font-medium">CR2032 replaceable (1+ year)</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Connectivity</dt>
                    <dd className="text-foreground font-medium">Bluetooth 5.0, Ultra Wideband</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Water Resistance</dt>
                    <dd className="text-foreground font-medium">IP67 rated</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
