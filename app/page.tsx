"use client"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AIProducts from "@/components/ai-products"
import Smartphones from "@/components/smartphones"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AIProducts />
      <Smartphones />
      <Footer />
    </main>
  )
}
