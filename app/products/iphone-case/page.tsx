"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function iPhoneCasePage() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = ["/iphone-case.jpg"];

  const features = [
    "Silky, soft-touch silicone exterior",
    "Built-in MagSafe magnets",
    "Drop protection from 6 feet",
    "Microfiber lining protects iPhone",
    "Wireless charging compatible",
    "Precisely aligned cutouts",
    "Easy to install and remove",
    "Raised edges protect camera and screen",
    "Available in multiple colors",
    "Premium Apple quality",
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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                <Image
                  src={images[selectedImage]}
                  alt="iPhone 17 Pro Case"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-accent font-semibold mb-2">Apple</p>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  iPhone 17 Pro Case
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  The Apple Silicone Case fits snugly over the buttons without
                  adding bulk. The smooth, soft-touch finish of the silicone
                  exterior feels great in your hand, while the microfiber lining
                  provides protection.
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
                      Premium Silicone
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Compatibility
                    </dt>
                    <dd className="text-foreground font-medium">
                      iPhone 17 Pro / Pro Max
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">MagSafe</dt>
                    <dd className="text-foreground font-medium">
                      Fully Compatible
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Protection
                    </dt>
                    <dd className="text-foreground font-medium">
                      Military Grade Drop Test
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
