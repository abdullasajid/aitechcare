"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AnkerPowerCorePage() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = ["/ankerpowercore.png"];

  const features = [
    "20,000mAh high capacity for multiple charges",
    "30W Power Delivery fast charging",
    "Charges iPhone 17 Pro Max 2.5 times",
    "Dual USB-C ports for simultaneous charging",
    "Smart LED display shows remaining power",
    "MultiProtect safety system",
    "Premium durable design",
    "Pass-through charging support",
    "Low-current mode for small devices",
    "Airline approved for travel",
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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-green-500/10 to-blue-500/10">
                <Image
                  src={images[selectedImage]}
                  alt="Anker PowerCore 20K"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-accent font-semibold mb-2">Anker</p>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  PowerCore 20K
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  The PowerCore 20K is Anker's most powerful portable charger,
                  providing up to 20,000mAh of charging power with 30W Power
                  Delivery for fast charging on the go.
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
                    <dt className="text-sm text-muted-foreground">Capacity</dt>
                    <dd className="text-foreground font-medium">
                      20,000mAh / 72Wh
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Input</dt>
                    <dd className="text-foreground font-medium">
                      USB-C: 30W max
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Output</dt>
                    <dd className="text-foreground font-medium">
                      USB-C: 30W max (each port)
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Weight</dt>
                    <dd className="text-foreground font-medium">
                      355g (12.5 oz)
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
