"use client"

import { services } from "./data"
import { useState, useEffect } from "react"
import {
  Globe,
  Smartphone,
  Megaphone,
  Paintbrush,
  ShoppingCart,
  BarChart,
  Search,
  Cloud,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import React from "react"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Select the weights you need
  variable: "--font-poppins",
});
export default function ServicesPage() {
  const [loading, setLoading] = useState(true)
  const [serviceData, setServiceData] = useState([])

  useEffect(() => {
    try {
      // Safely load services data
      setServiceData(services || [])
      const timer = setTimeout(() => {
        setLoading(false)
      }, 1000)

      return () => clearTimeout(timer)
    } catch (error) {
      console.error("Error loading services:", error)
      setLoading(false)
      setServiceData([])
    }
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className={`${poppins.className} min-h-screen bg-white`}>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl font-bold text-gray-800">Our Services</h1>
            <div className="mx-auto h-1 w-24 bg-primary"></div>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Explore our comprehensive range of digital services designed to help your business grow
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceData.length > 0 ? (
              serviceData.map((service, index) => (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="group animate-fade-up rounded-lg border border-primary/20 bg-white p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`mb-6 flex h-20 w-20 items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-primary/5 ${service.color}`}
                  >
                    {/* Render the icon component dynamically */}
                    {React.createElement(service.icon, {
                      className: "h-8 w-8"
                    })}
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-800 transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-gray-600">{service.description}</p>
                  <div className="flex items-center font-medium text-primary">
                    Learn More{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-600">
                No services available at the moment.
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

