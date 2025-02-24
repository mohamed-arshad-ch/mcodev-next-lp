"use client"

import type React from "react"

import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
          <div className="mx-auto h-1 w-24 bg-primary"></div>
          <p className="mx-auto max-w-2xl text-gray-600">Get in touch with us for your web development needs</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="animate-fade-up rounded-lg border border-primary/20 bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">Kerala, India</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div
                className="animate-fade-up rounded-lg border border-primary/20 bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">+91-98472-74569</p>
                </div>
              </div>

              <div
                className="animate-fade-up rounded-lg border border-primary/20 bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">Email Us</h3>
                  <p className="text-gray-600">mcodevbiz@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="animate-fade-up rounded-lg border border-primary/20 bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            style={{ animationDelay: "0.3s" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input type="text" placeholder="Your Name" className="border-gray-200" required />
                <Input type="email" placeholder="Your Email" className="border-gray-200" required />
              </div>
              <Input type="text" placeholder="Subject" className="border-gray-200" required />
              <Textarea placeholder="Message" rows={6} className="resize-none border-gray-200" required />
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="px-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

