"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function MagSafeChargerPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = ["/magsafe.png", "/magsafe-2.jpg"];

  const features = [
    "15W fast wireless charging for iPhone",
    "Perfect magnetic alignment every time",
    "Compatible with MagSafe cases",
    "Qi2 certified for universal compatibility",
    "1-meter integrated USB-C cable",
    "Premium aluminum and silicone design",
    "Works with iPhone 12 and later",
    "Foreign object detection for safety",
    "Charges through most lightweight cases",
    "Official Apple MagSafe technology",
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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <Image
                  src={images[selectedImage]}
                  alt="MagSafe Charger"
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
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
                      alt={`MagSafe Charger view ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-accent font-semibold mb-2">Apple</p>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  MagSafe Charger
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  The MagSafe Charger makes wireless charging a snap. The
                  perfectly aligned magnets attach to your iPhone 12 or later to
                  provide faster wireless charging up to 15W.
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
                      Power Output
                    </dt>
                    <dd className="text-foreground font-medium">Up to 15W</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Cable Length
                    </dt>
                    <dd className="text-foreground font-medium">
                      1 meter (3.3 feet)
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Connector</dt>
                    <dd className="text-foreground font-medium">USB-C</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Compatibility
                    </dt>
                    <dd className="text-foreground font-medium">
                      iPhone 12 and later
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
