"use client";

import { Smartphone, Battery, Cable, Shield } from "lucide-react";

const accessoryCategories = [
  {
    icon: Shield,
    title: "Phone Cases & Covers",
    description: "Premium protection with style for all devices",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cable,
    title: "Chargers & Cables",
    description: "Fast charging solutions and durable cables",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Battery,
    title: "Power Banks",
    description: "Portable power for all your devices",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Smartphone,
    title: "MagSafe Accessories",
    description: "Magnetic charging and mounting solutions",
    color: "from-orange-500 to-red-500",
  },
];

export default function Accessories() {
  return (
    <section
      id="accessories"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Mobile <span className="text-accent">Accessories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Essential accessories to enhance and protect your devices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessoryCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg p-2.5 mb-4 group-hover:scale-110 transition`}
                >
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
