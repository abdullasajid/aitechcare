"use client";

import Link from "next/link";
import Image from "next/image";

const wearables = [
  {
    name: "Meta AI Glasses",
    brand: "Meta",
    description: "AI Assistant | 12MP Camera | Voice Commands",
    image: "/meta_glasses1.webp",
    link: "/products/meta-ai-glasses",
  },
  {
    name: "Apple Watch Ultra 3",
    brand: "Apple",
    description: "AI Health Tracking | S9 SiP | 36h Battery",
    image: "/watch1.png",
    link: "/products/apple-watch-ultra-3",
  },
  {
    name: "AirPods Pro 3",
    brand: "Apple",
    description: "AI Noise Cancellation | Health Sensors | Siri AI",
    image: "/airpodspro3.png",
    link: "/products/airpods-pro-3",
  },
  {
    name: "Galaxy Buds 3 Ultra",
    brand: "Samsung",
    description: "Galaxy AI Translation | ANC | Real-time Audio",
    image: "/galaxybuds3-1.png",
    link: "/products/galaxy-buds-3-ultra",
  },
  {
    name: "Galaxy Ring",
    brand: "Samsung",
    description: "AI Health Tracking | Heart Rate | Sleep Monitoring",
    image: "/galaxy_ring.png",
    link: "/products/galaxy-ring",
  },
  {
    name: "Oura Ring Gen 4",
    brand: "Oura",
    description: "AI Health Tracking | Sleep Analysis | Fitness",
    image: "/ouraring-1.png",
    link: "/products/oura-ring-gen-4",
  },
];

export default function AIWearables() {
  return (
    <section
      id="ai-wearables"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            AI-Powered <span className="text-accent">Wearables</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Next-generation AI-powered wearable technology for your daily life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wearables.map((wearable, index) => {
            return (
              <Link
                key={index}
                href={wearable.link}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition duration-300 hover:shadow-lg hover:shadow-accent/20 block"
              >
                {/* Product Image */}
                <div className="relative w-full h-48 bg-gradient-to-br from-accent/5 to-accent/10">
                  <Image
                    src={wearable.image}
                    alt={wearable.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {wearable.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {wearable.description}
                  </p>

                  {/* CTA */}
                  <div className="flex justify-end pt-4 border-t border-border">
                    <span className="px-4 py-2 bg-accent/20 group-hover:bg-accent text-accent group-hover:text-primary-foreground rounded-lg transition text-sm font-medium">
                      Check It Out
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
