"use client"

import { services } from "../data"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    redirect("/services")
    return null
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className={`mb-6 flex h-24 w-24 items-center justify-center rounded-xl bg-gray-50 ${service.color}`}>
              <service.icon className="h-10 w-10" />
            </div>
            <h1 className="text-5xl font-bold text-gray-800">{service.title}</h1>
            <div className="mx-auto h-1 w-24 bg-primary"></div>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Overview</h2>
              <p className="text-gray-600">{service.longDescription}</p>
              {service?.features && service.features.length > 0 ? (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Key Features</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-primary" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="pt-6">
                <Button
                  className="bg-primary text-white transition-all duration-300 hover:bg-primary/90"
                  onClick={() => router.push("/contact")}
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="rounded-lg border border-primary/20 bg-gray-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-800">Why Choose Our {service.title}?</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Expert Team",
                    description:
                      "Our team of experienced professionals ensures the highest quality of service delivery.",
                  },
                  {
                    title: "Proven Track Record",
                    description: "Successfully delivered numerous projects with excellent client satisfaction.",
                  },
                  {
                    title: "Custom Solutions",
                    description: "Tailored solutions designed to meet your specific business needs.",
                  },
                  {
                    title: "Ongoing Support",
                    description: "Comprehensive support and maintenance services after project completion.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <h4 className="mb-2 text-lg font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Other Services</h2>
            <p className="mt-4 text-gray-600">Explore our full range of services</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.slug !== params.slug)
              .map((otherService) => (
                <div
                  key={otherService.slug}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${otherService.color}`}>
                    <otherService.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">{otherService.title}</h3>
                  <p className="mb-4 text-gray-600">{otherService.description}</p>
                  <Link
                    href={`/services/${otherService.slug}`}
                    className="text-primary hover:text-primary/90"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

