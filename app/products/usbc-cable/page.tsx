"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function USBCCablePage() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = ["/usbc-cable.jpg"];

  const features = [
    "100W Power Delivery support",
    "2-meter extra-long cable",
    "Durable braided design",
    "480Mbps data transfer speed",
    "Bend tested over 10,000 times",
    "Premium aluminum connectors",
    "Universal USB-C compatibility",
    "Perfect for MacBook and iPad charging",
    "Tangle-free cable management",
    "Lifetime warranty included",
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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                <Image
                  src={images[selectedImage]}
                  alt="USB-C Cable 2M"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-accent font-semibold mb-2">Belkin</p>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  USB-C Cable 2M
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Premium braided USB-C cable with 100W Power Delivery support.
                  Perfect for charging and syncing your USB-C devices with
                  superior durability and performance.
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
                      Power Delivery
                    </dt>
                    <dd className="text-foreground font-medium">Up to 100W</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Cable Length
                    </dt>
                    <dd className="text-foreground font-medium">
                      2 meters (6.6 feet)
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Data Transfer
                    </dt>
                    <dd className="text-foreground font-medium">
                      USB 2.0 - 480Mbps
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Connector Type
                    </dt>
                    <dd className="text-foreground font-medium">
                      USB-C to USB-C
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
