"use client"

import { Check } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/919847274569`, "_blank")
  }

  return (
    <div className="relative overflow-hidden bg-white pb-16 pt-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-4xl font-bold leading-tight text-gray-800 sm:text-5xl lg:text-6xl">
              Build Your Digital Presence with
              <br />
              <span className="text-primary">MCODEV Bytes</span>
            </h1>
            <p className="max-w-2xl text-lg text-gray-600">
              Modern websites tailored to your business needs with cutting-edge technology
            </p>
            <ul className="space-y-4">
              {[
                "Next.js and TailwindCSS for Seamless Development",
                "SEO Optimization for Better Visibility",
                "Responsive Design for All Devices",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <div className="mr-2 rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <a href="#services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="relative w-full bg-primary text-lg text-white transition-all duration-300 hover:bg-primary/90 sm:w-auto sm:px-8"
                >
                  Explore Services
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full text-lg sm:w-auto sm:px-8"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative lg:ml-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-section-ObegmkNvhjC0GaaDHnrWPm652y8vao.png"
                  alt="Interactive digital interface visualization"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

