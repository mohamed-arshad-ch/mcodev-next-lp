"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { products } from "../data"

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const product = products.find((p) => p.slug === params.slug)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!product) {
    router.push("/")
    return null
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pb-16 pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8 animate-fade-up">
              <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">{product.name}</h1>
              <p className="text-lg text-gray-600">{product.description}</p>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">Key Features</h2>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">Benefits</h2>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  className="bg-primary text-white transition-all duration-300 hover:bg-primary/90"
                  onClick={() => window.open(product.demoUrl, "_blank")}
                >
                  View Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary transition-all duration-300 hover:bg-primary/5"
                  onClick={() => router.push("/contact")}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
            <div className="relative lg:ml-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

