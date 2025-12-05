"use client"

import { Smartphone, Star } from "lucide-react"

const smartphones = [
  {
    name: "iPhone 16 Pro Max",
    specs: '6.9" OLED | 512GB | A18 Pro | 5G',
    rating: 4.9,
    reviews: 3450,
    price: "$1,399",
    image: "/premium-smartphone.jpg",
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    specs: '6.8" AMOLED | 512GB | Snapdragon 8 Gen 3 | 5G',
    rating: 4.8,
    reviews: 2890,
    price: "$1,299",
    image: "/professional-smartphone.jpg",
  },
  {
    name: "Google Pixel 9 Pro",
    specs: '6.3" OLED | 256GB | Tensor G4 | 5G',
    rating: 4.7,
    reviews: 1950,
    price: "$999",
    image: "/lightweight-smartphone.jpg",
  },
]

export default function Smartphones() {
  return (
    <section id="smartphones" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/40 rounded-full">
            <Smartphone className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Premium Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Flagship <span className="text-accent">Smartphones</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience premium performance with our latest smartphone lineup
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {smartphones.map((phone, index) => (
            <div key={index} className="group">
              {/* Image Container */}
              <div className="relative mb-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl overflow-hidden border border-border aspect-video flex items-center justify-center group-hover:border-accent/50 transition">
                <img
                  src={phone.image || "/placeholder.svg"}
                  alt={phone.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Details */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">{phone.name}</h3>
                <p className="text-sm text-muted-foreground">{phone.specs}</p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({phone.reviews})</span>
                </div>

                {/* Button */}
                <div className="flex justify-end pt-4 border-t border-border">
                  <button className="px-4 py-2 bg-accent text-primary-foreground rounded-lg hover:opacity-90 transition font-medium text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
