"use client";

import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-accent-foreground" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground tracking-tight">AITech</span>
              <span className="text-[10px] text-muted-foreground -mt-1">Smart Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <a
              href="/#ai-gadgets"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
            >
              AI Gadgets
            </a>
            <a
              href="/#ai-products"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
            >
              Smart Home
            </a>
            <a
              href="/#smartphones"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
            >
              Smartphones
            </a>
            <a
              href="/#ai-wearables"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
            >
              Wearables
            </a>
            <a
              href="/#accessories"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
            >
              Accessories
            </a>
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 text-sm font-medium text-accent-foreground bg-accent hover:bg-accent/90 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/40 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              <a
                href="/#ai-gadgets"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                AI Gadgets
              </a>
              <a
                href="/#ai-products"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Smart Home
              </a>
              <a
                href="/#smartphones"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Smartphones
              </a>
              <a
                href="/#ai-wearables"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Wearables
              </a>
              <a
                href="/#accessories"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Accessories
              </a>
              <Link
                href="/about"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="mx-4 mt-2 px-4 py-3 text-sm font-medium text-center text-accent-foreground bg-accent hover:bg-accent/90 rounded-lg transition-all shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
