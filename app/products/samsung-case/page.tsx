"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function SamsungCasePage() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = ["/samsung-case.jpg"];

  const features = [
    "Military-grade drop protection (MIL-STD-810G)",
    "Crystal clear transparency shows phone design",
    "Anti-yellowing material stays clear",
    "Wireless charging compatible",
    "Shock-absorbing corner bumpers",
    "Raised bezels protect screen and camera",
    "Slim profile adds minimal bulk",
    "Easy grip non-slip design",
    "Precise cutouts for all ports",
    "Scratch-resistant coating",
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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                <Image
                  src={images[selectedImage]}
                  alt="Galaxy S25 Clear Case"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-accent font-semibold mb-2">
                  Samsung
                </p>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  Galaxy S25 Clear Case
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Show off your Galaxy S25's stunning design while keeping it
                  protected with this crystal clear case. Military-grade
                  protection meets minimalist aesthetics.
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
                    <dt className="text-sm text-muted-foreground">Material</dt>
                    <dd className="text-foreground font-medium">
                      TPU + Polycarbonate
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Compatibility
                    </dt>
                    <dd className="text-foreground font-medium">
                      Galaxy S25 Ultra
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Drop Protection
                    </dt>
                    <dd className="text-foreground font-medium">
                      Up to 12 feet
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Weight</dt>
                    <dd className="text-foreground font-medium">
                      28g (Ultra-light)
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
