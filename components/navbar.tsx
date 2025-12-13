"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">AT</span>
            </div>
            <span className="font-bold text-xl text-foreground">AITech</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="/#ai-products" className="text-muted-foreground hover:text-accent transition">
              AI Electronics
            </a>
            <a href="/#smartphones" className="text-muted-foreground hover:text-accent transition">
              Smartphones
            </a>
            <a href="/#ai-accessories" className="text-muted-foreground hover:text-accent transition">
              Accessories
            </a>
            <Link href="/about" className="text-muted-foreground hover:text-accent transition">
              About
            </Link>
            <a href="#" className="text-muted-foreground hover:text-accent transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="/#ai-products" className="block text-muted-foreground hover:text-accent transition">
              AI Electronics
            </a>
            <a href="/#smartphones" className="block text-muted-foreground hover:text-accent transition">
              Smartphones
            </a>
            <a href="/#ai-accessories" className="block text-muted-foreground hover:text-accent transition">
              Accessories
            </a>
            <Link href="/about" className="block text-muted-foreground hover:text-accent transition">
              About
            </Link>
            <a href="#" className="block text-muted-foreground hover:text-accent transition">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
