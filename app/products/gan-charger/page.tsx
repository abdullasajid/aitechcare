"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function GaNChargerPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = ["/gan-charger.jpg"];

  const features = [
    "65W total power output",
    "GaN technology - 50% smaller",
    "3 ports: 2x USB-C + 1x USB-A",
    "Charges laptops, tablets, and phones",
    "Intelligent power distribution",
    "ActiveShield 2.0 temperature monitoring",
    "Foldable plug for portability",
    "Universal compatibility",
    "MultiProtect safety system",
    "Travel-friendly compact design",
  ];

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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                <Image
                  src={images[selectedImage]}
                  alt="65W GaN Charger"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-accent font-semibold mb-2">Anker</p>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  65W GaN Charger
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Harness the power of GaN technology for a noticeably smaller
                  charger that doesn't compromise on power. Fast-charge your
                  phone, tablet, and USB-C notebook from a single charger.
                </p>
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
                    <dt className="text-sm text-muted-foreground">
                      Total Output
                    </dt>
                    <dd className="text-foreground font-medium">65W max</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">USB-C 1</dt>
                    <dd className="text-foreground font-medium">65W max</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">USB-C 2</dt>
                    <dd className="text-foreground font-medium">30W max</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">USB-A</dt>
                    <dd className="text-foreground font-medium">22.5W max</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Dimensions
                    </dt>
                    <dd className="text-foreground font-medium">
                      49 × 41 × 32mm
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
