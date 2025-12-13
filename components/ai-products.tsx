"use client";

import { Glasses, Zap, Watch, Camera, Brain, Speaker, Bot } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    icon: Camera,
    title: "Google Nest Cam",
    description: "AI-powered security camera with intelligent alerts",
    price: "$179",
    color: "from-green-500 to-emerald-500",
    link: "/products/google-nest-cam",
    image: "/google_cam1.png",
  },
  {
    icon: Brain,
    title: "Amazon Echo Hub",
    description: "Smart home display with Alexa AI assistant",
    price: "$179",
    color: "from-emerald-500 to-cyan-500",
    link: "/products/amazon-echo-hub",
    image: "/amazon1.png",
  },
  {
    icon: Speaker,
    title: "Apple HomePod",
    description: "High-fidelity speaker with Siri intelligence",
    price: "$299",
    color: "from-cyan-500 to-blue-500",
    link: "/products/apple-homepod",
    image: "/homepod1.png",
  },
  {
    icon: Bot,
    title: "Roomba J9+",
    description: "AI-powered robot vacuum with smart mapping",
    price: "$899",
    color: "from-purple-500 to-pink-500",
    link: "/products/roomba-j9",
    image: "/roomba1.webp",
  },
  {
    icon: Bot,
    title: "Roborock S8",
    description: "Advanced AI cleaning with sonic mopping",
    price: "$799",
    color: "from-orange-500 to-red-500",
    link: "/products/roborock-s8",
    image: "/roborock1.png",
  },
];

export default function AIProducts() {
  return (
    <section
      id="ai-products"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            AI-Powered <span className="text-accent">Smart Home</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your home with cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Link
                key={index}
                href={product.link}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition duration-300 hover:shadow-lg hover:shadow-accent/20 block"
              >
                {/* Product Image or Icon */}
                {product.image ? (
                  <div className="relative w-full h-48 bg-gradient-to-br from-accent/5 to-accent/10">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition duration-300"
                    />
                  </div>
                ) : (
                  <div className="p-6 pb-0">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-lg p-2.5 mb-4 group-hover:scale-110 transition`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {product.description}
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
