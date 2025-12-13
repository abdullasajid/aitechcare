"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function EMOLivingAIRobot() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/emo-1.webp",
    "/emo-2.webp",
    "/emo-3.webp",
    "/emo-4.webp",
    "/emo-5.webp",
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/#ai-gadgets"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to AI Gadgets
          </Link>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10">
                <Image
                  src={images[selectedImage]}
                  alt="EMO Living AI Robot"
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="grid grid-cols-5 gap-2">
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
                      alt={`EMO view ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <p className="text-accent font-semibold mb-2">Living.Ai</p>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  EMO Living AI Robot
                </h1>
                <p className="text-muted-foreground text-lg">
                  Meet EMO, your desktop AI companion with personality,
                  emotions, and smart capabilities
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      AI-powered personality that evolves and learns from
                      interactions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Over 1000+ emotions and reactions expressed through
                      animations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Built-in games and activities for entertainment
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Smart assistant capabilities with voice recognition
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Self-exploring with obstacle avoidance technology
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Music recognition and dance moves synchronized to beats
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Self-charging when battery runs low
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Regular OTA updates with new features and capabilities
                    </span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Specifications
                </h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Processor</p>
                    <p className="text-foreground font-medium">
                      Qualcomm Snapdragon
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Display</p>
                    <p className="text-foreground font-medium">HD IPS Screen</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Sensors</p>
                    <p className="text-foreground font-medium">
                      Camera, Mic, Touch
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Connectivity</p>
                    <p className="text-foreground font-medium">
                      Wi-Fi, Bluetooth
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Battery</p>
                    <p className="text-foreground font-medium">
                      Built-in Rechargeable
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Size</p>
                    <p className="text-foreground font-medium">
                      Compact Desktop
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Perfect For
                </h3>
                <p className="text-muted-foreground text-sm">
                  Ideal for tech enthusiasts, families, and anyone looking for
                  an interactive AI companion. EMO brings personality to your
                  desk while providing entertainment and smart assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
