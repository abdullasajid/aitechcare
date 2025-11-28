"use client"

import { Zap, Home, Bluetooth, Clock, Mic, Shield } from "lucide-react"

const products = [
  {
    icon: Zap,
    title: "SmartVac Pro 3000",
    description: "AI-powered robotic vacuum with adaptive navigation",
    price: "$599",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Home,
    title: "EcoMop Elite",
    description: "Intelligent mopping robot with dual-tank system",
    price: "$799",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Bluetooth,
    title: "SmartHub Speaker",
    description: "Voice-controlled smart speaker with AI assistant",
    price: "$299",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: Clock,
    title: "CareBot Monitor",
    description: "Smart home monitoring system with AI detection",
    price: "$449",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Mic,
    title: "VoiceCommand Hub",
    description: "Multi-room audio control with smart automation",
    price: "$399",
    color: "from-emerald-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "SafeGuard Camera",
    description: "AI security camera with intelligent alerts",
    price: "$349",
    color: "from-cyan-500 to-blue-500",
  },
]

export default function AIProducts() {
  return (
    <section id="ai-products" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Smart Home <span className="text-accent">Collection</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge AI-powered smart home devices engineered for convenience and security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-lg p-2.5 mb-4 group-hover:scale-110 transition`}
                >
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{product.description}</p>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-lg font-bold text-accent">{product.price}</span>
                  <button className="px-4 py-2 bg-accent/20 hover:bg-accent text-accent hover:text-primary-foreground rounded-lg transition text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
