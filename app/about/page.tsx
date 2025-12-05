"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Target, Eye, CheckCircle, Users, Zap, Headphones } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-accent">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Welcome to AiTechCare, British Columbia's trusted source for AI gadgets, smart accessories, 
              and reliable after-sale support. We combine innovation, convenience, and customer care — 
              helping you confidently step into the world of modern AI technology.
            </p>
          </div>

          {/* Who We Are */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              AiTechCare was created to make advanced technology easier to understand and easier to use. 
              With experience in retail, sales, and consumer electronics, we built a space where people 
              can explore the latest AI products, get expert recommendations, and receive ongoing support 
              long after their purchase.
            </p>
          </section>

          {/* What We Do */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">What We Do</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              AiTechCare specializes in AI-powered gadgets and smart lifestyle technology, offering a curated 
              selection of useful, high-quality products for home, work, and everyday life.
            </p>
            
            <div className="bg-secondary/30 rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our offerings include:</h3>
              <ul className="space-y-3">
                {[
                  "AI gadgets (voice assistants, smart pens, translators, cameras, etc.)",
                  "Smart accessories (chargers, earbuds, mounts, cases, and more)",
                  "Smart home devices (plugs, speakers, lighting systems, etc.)",
                  "Full after-sale customer support and guidance",
                  "Online shopping and convenient delivery",
                  "Product setup help and usage tutorials"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg mt-6">
              We focus on verified, high-quality brands and transparent service so every customer gets 
              technology they can trust.
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-8 border border-accent/20">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To make AI technology simple, accessible, and genuinely helpful — empowering people to 
                  improve their daily lives with smart, reliable gadgets.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-8 border border-accent/20">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become British Columbia's leading AI technology hub, known for trust, expertise, 
                  and exceptional customer experience.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose AiTechCare</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "AI-Focused Expertise",
                  description: "We specialize solely in AI gadgets and smart tech — giving you accurate information and honest recommendations."
                },
                {
                  icon: Users,
                  title: "Hands-On Product Experience",
                  description: "Explore devices in person, test their features, and understand how they can improve productivity and convenience."
                },
                {
                  icon: Headphones,
                  title: "Reliable After-Sale Support",
                  description: "From setup to troubleshooting, we stay connected with you even after you've purchased the product."
                },
                {
                  icon: Users,
                  title: "Local Presence With Personal Attention",
                  description: "Talk to real people who care about helping you choose the right device for your needs."
                },
                {
                  icon: CheckCircle,
                  title: "Quality-Checked Products",
                  description: "Every item is handpicked from trusted, reputable brands to ensure performance and reliability."
                },
                {
                  icon: Target,
                  title: "Customer-First Approach",
                  description: "Your satisfaction and success with our products is our top priority."
                }
              ].map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Our Promise */}
          <section className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 md:p-12 border border-accent/20 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Promise</h2>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
              AiTechCare is committed to providing a smooth and supportive customer experience. Whether 
              you're buying your first AI gadget or expanding your smart home setup, we're here to guide 
              you, support you, and help you get the most out of your technology.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
