"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MagSafeWalletPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/magsafe-wallet.jpg",
  ]

  const features = [
    "Strong built-in magnets",
    "Premium European leather",
    "Holds up to 3 cards securely",
    "RFID shielding for card protection",
    "Find My support - track with iPhone",
    "Wireless charging compatible",
    "Shielded card slots protect data",
    "Easy card access with thumb notch",
    "Slim profile adds minimal bulk",
    "Available in multiple colors",
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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-amber-500/10 to-orange-500/10">
                <Image
                  src={images[selectedImage]}
                  alt="MagSafe Wallet"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-accent font-semibold mb-2">Apple</p>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  MagSafe Wallet
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Keep your cards close with the MagSafe Wallet. It snaps magnetically to your iPhone and supports Find My, so you can receive notifications if you leave it behind.
                </p>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-foreground">$59</span>
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
                    <dt className="text-sm text-muted-foreground">Material</dt>
                    <dd className="text-foreground font-medium">European Leather</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Card Capacity</dt>
                    <dd className="text-foreground font-medium">Up to 3 cards</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Find My</dt>
                    <dd className="text-foreground font-medium">Supported with notifications</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Compatibility</dt>
                    <dd className="text-foreground font-medium">iPhone 12 and later with MagSafe</dd>
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
