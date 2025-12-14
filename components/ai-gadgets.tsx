"use client";

import Link from "next/link";
import Image from "next/image";

const gadgets = [
  {
    name: "Meta Quest 3",
    brand: "Meta",
    description:
      "Next-gen VR headset with mixed reality and AI-powered features",
    image: "/meta_quest1.webp",
    link: "/products/meta-quest-3",
  },
  {
    name: "EMO Living AI Robot",
    brand: "Living.Ai",
    description: "Desktop AI pet with personality, games, and smart features",
    image: "/emo.png",
    link: "/products/emo-living-ai-robot",
  },
  {
    name: "Rabbit R1",
    brand: "Rabbit",
    description: "AI Assistant Device | Touchscreen | Voice Commands",
    image: "/r1-4.png",
    link: "/products/rabbit-r1",
  },
  {
    name: "Plaud Note",
    brand: "Plaud",
    description:
      "AI Voice Recorder | ChatGPT Integration | Smart Transcription",
    image: "/plaud.webp",
    link: "/products/plaud-note",
  },
  {
    name: "Plaud NotePin",
    brand: "Plaud",
    description:
      "Wearable AI Voice Recorder | Pin-On Design | Advanced Transcription",
    image: "/plaudpin-1.webp",
    link: "/products/plaud-notepin",
  },
  {
    name: "Limitless Pendant",
    brand: "Limitless",
    description:
      "AI Wearable | Real-Time Transcription | Automated Meeting Notes",
    image: "/limitless.png",
    link: "/products/limitless-pendant",
  },
];

export default function AIGadgets() {
  return (
    <section
      id="ai-gadgets"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            AI-Powered <span className="text-accent">Devices</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative AI companions and smart gadgets for everyday life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gadgets.map((gadget, index) => {
            return (
              <Link
                key={index}
                href={gadget.link}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition duration-300 hover:shadow-lg hover:shadow-accent/20 block"
              >
                {/* Product Image */}
                <div className="relative w-full h-48 bg-gradient-to-br from-accent/5 to-accent/10">
                  <Image
                    src={gadget.image}
                    alt={gadget.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {gadget.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {gadget.description}
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
