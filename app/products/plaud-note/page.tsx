"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mic, Brain, Languages, Cloud } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PlaudNotePage() {
  const features = [
    {
      icon: Mic,
      title: "Professional Recording",
      description:
        "Crystal clear audio capture with advanced noise cancellation",
    },
    {
      icon: Brain,
      title: "AI Transcription",
      description: "Powered by ChatGPT for accurate real-time transcription",
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description: "Transcribe and translate in over 50 languages",
    },
    {
      icon: Cloud,
      title: "Cloud Sync",
      description: "Access your recordings and transcripts anywhere",
    },
  ];

  const images = [
    "/plaud.webp",
    "/plaud-1.webp",
    "/plaud-2.webp",
    "/plaud-3.webp",
    "/plaud-4.webp",
    "/plaud-5.webp",
    "/plaud-6.webp",
    "/plaud-7.webp",
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-accent transition mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                <Image
                  src={images[0]}
                  alt="Plaud Note"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {images.slice(1).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/5 to-pink-500/5"
                  >
                    <Image
                      src={img}
                      alt={`Plaud Note ${idx + 2}`}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-accent font-semibold mb-2">Plaud</p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Plaud Note
                </h1>
                <p className="text-xl text-muted-foreground">
                  AI-powered voice recorder with ChatGPT integration
                </p>
              </div>

              <div className="prose prose-gray max-w-none">
                <p className="text-foreground/80">
                  Plaud Note is the world's first AI voice recorder with ChatGPT
                  integration. This ultra-thin device attaches magnetically to
                  your phone and captures crystal-clear audio with intelligent
                  transcription and summarization powered by advanced AI.
                </p>
                <p className="text-foreground/80">
                  Perfect for meetings, interviews, lectures, and everyday
                  note-taking. The Plaud Note transforms your voice recordings
                  into searchable, organized text with key insights
                  automatically extracted.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  Key Features
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    ChatGPT-powered AI transcription and summarization
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Ultra-thin design (2.5mm) with MagSafe compatibility
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    30-hour battery life with 64GB storage
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Real-time transcription in 50+ languages
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Secure cloud backup and sync
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    One-touch recording with vibration feedback
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Intelligent Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition"
                >
                  <feature.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-20 bg-card border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Technical Specifications
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Dimensions</span>
                <span className="text-foreground font-medium">
                  115 x 70 x 2.5mm
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Weight</span>
                <span className="text-foreground font-medium">30g</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Battery Life</span>
                <span className="text-foreground font-medium">
                  Up to 30 hours
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Storage</span>
                <span className="text-foreground font-medium">64GB</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Connectivity</span>
                <span className="text-foreground font-medium">
                  Bluetooth 5.3
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">AI Integration</span>
                <span className="text-foreground font-medium">ChatGPT</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Languages</span>
                <span className="text-foreground font-medium">50+</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Charging</span>
                <span className="text-foreground font-medium">USB-C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
