"use client";

import Image from "next/image";
import { Wrench, Shield, Clock, Award } from "lucide-react";

export default function RepairLab() {
  const features = [
    {
      icon: Wrench,
      title: "Expert Repairs",
      description: "Certified technicians with years of experience",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All repairs backed by our warranty",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Most repairs completed within 24-48 hours",
    },
    {
      icon: Award,
      title: "Premium Parts",
      description: "Only genuine and high-quality replacement parts",
    },
  ];

  return (
    <section id="repair-lab" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/repair_lab.webp"
              alt="AI Tech Care Repair Lab"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Professional <span className="text-accent">Repair Lab</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At AI Tech Care, we pride ourselves on our state-of-the-art
                repair lab equipped with the latest diagnostic tools and
                technology. Our team of certified technicians specializes in
                repairing smartphones, tablets, laptops, and all your AI-powered
                devices.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                What We Repair:
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Smartphones & Tablets (iPhone, Samsung, Google Pixel)
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Laptops & Computers (MacBook, Windows, Chromebook)
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Smart Wearables (Apple Watch, Galaxy Watch, Fitness Trackers)
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  AI Devices (Smart Home, VR Headsets, AI Gadgets)
                </li>
              </ul>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 hover:border-accent/50 transition"
                >
                  <feature.icon className="h-8 w-8 text-accent mb-2" />
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Book a Repair
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
