"use client"

import { useState, useEffect } from "react"
import { Building2, Users, Trophy, Target, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { jsonLd } from "./metadata"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Select the weights you need
  variable: "--font-poppins",
});
export default function AboutPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl font-bold text-gray-800">About MCODEV</h1>
            <div className="mx-auto h-1 w-24 bg-primary"></div>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Building Digital Excellence Through Innovation and Expertise
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2020, MCODEV has emerged as a leading web development and digital solutions company based in
                Kerala, India. We specialize in creating innovative digital solutions that help businesses thrive in the
                modern digital landscape.
              </p>
              <p className="text-gray-600">
                Our team of experienced developers, designers, and digital strategists work together to deliver
                exceptional results for our clients. We pride ourselves on staying ahead of technological trends and
                implementing cutting-edge solutions.
              </p>
              <Button className="group">
                Learn More{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "150+", label: "Projects Completed" },
                { number: "100+", label: "Happy Clients" },
                { number: "15+", label: "Expert Team Members" },
                { number: "4+", label: "Years of Experience" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="animate-fade-up rounded-lg border border-primary/20 bg-white p-6 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-2 text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-primary/20 bg-white p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and
                create meaningful user experiences. We strive to deliver excellence through cutting-edge technology and
                exceptional service.
              </p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-white p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading digital transformation partner for businesses worldwide, recognized for our
                innovation, expertise, and commitment to delivering exceptional value to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Building2 className="h-6 w-6" />,
                title: "Innovation",
                description: "Constantly pushing boundaries with cutting-edge solutions",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Collaboration",
                description: "Working together to achieve exceptional results",
              },
              {
                icon: <Trophy className="h-6 w-6" />,
                title: "Excellence",
                description: "Delivering the highest quality in everything we do",
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: "Client Focus",
                description: "Putting our clients' success at the heart of our work",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="animate-fade-up rounded-lg border border-primary/20 bg-white p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <div className="text-primary">{value.icon}</div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

