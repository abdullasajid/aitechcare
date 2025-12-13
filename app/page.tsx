"use client";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AIGadgets from "@/components/ai-gadgets";
import AIProducts from "@/components/ai-products";
import Smartphones from "@/components/smartphones";
import AIWearables from "@/components/ai-wearables";
import Accessories from "@/components/ai-accessories";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AIGadgets />
      <AIProducts />
      <Smartphones />
      <AIWearables />
      <Accessories />
      <Footer />
    </main>
  );
}
