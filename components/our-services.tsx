import { Globe, Smartphone, Megaphone, Paintbrush, ShoppingCart, BarChart, Search, Cloud } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function OurServices() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <div className="mx-auto h-1 w-24 bg-primary"></div>
          <p className="mx-auto max-w-2xl text-gray-600">Comprehensive digital solutions to help your business grow</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Globe className="h-10 w-10" />,
              title: "Web Development",
              description:
                "Custom websites and web applications built with Next.js, React, and modern technologies for optimal performance",
              color: "text-blue-500",
              slug: "web-development",
            },
            {
              icon: <Smartphone className="h-10 w-10" />,
              title: "App Development",
              description: "Native and cross-platform mobile applications that deliver seamless user experiences",
              color: "text-green-500",
              slug: "app-development",
            },
            {
              icon: <Megaphone className="h-10 w-10" />,
              title: "Digital Marketing",
              description: "Strategic digital marketing solutions to increase your online presence and reach",
              color: "text-orange-500",
              slug: "digital-marketing",
            },
            {
              icon: <Paintbrush className="h-10 w-10" />,
              title: "Branding",
              description: "Comprehensive branding services to establish and strengthen your market identity",
              color: "text-purple-500",
              slug: "branding",
            },
            {
              icon: <ShoppingCart className="h-10 w-10" />,
              title: "E-Commerce Solutions",
              description: "Custom e-commerce platforms with secure payment gateways and inventory management",
              color: "text-pink-500",
              slug: "ecommerce-solutions",
            },
            {
              icon: <Search className="h-10 w-10" />,
              title: "SEO Services",
              description: "Search engine optimization to improve your visibility and organic traffic",
              color: "text-yellow-500",
              slug: "seo-services",
            },
            {
              icon: <Cloud className="h-10 w-10" />,
              title: "Cloud Solutions",
              description: "Scalable cloud infrastructure and deployment services for your applications",
              color: "text-cyan-500",
              slug: "cloud-solutions",
            },
            {
              icon: <BarChart className="h-10 w-10" />,
              title: "Analytics & Reporting",
              description: "Data-driven insights and comprehensive reporting for informed decision making",
              color: "text-red-500",
              slug: "analytics-reporting",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group animate-fade-up rounded-lg border border-primary/20 bg-white p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`mb-6 flex h-20 w-20 items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-primary/5 ${service.color}`}
              >
                {service.icon}
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mb-6 text-gray-600">{service.description}</p>
              <Link href={`/services/${service.slug}`} className="block">
                <Button
                  variant="outline"
                  className="w-full transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

