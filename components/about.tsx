import { Building2, Command, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="font-medium text-primary">Why MCODEV Bytes?</h2>
          <h3 className="text-4xl font-bold text-gray-800">Modern Web Solutions for Growing Businesses</h3>
          <p className="mx-auto max-w-3xl text-gray-600">
            At MCODEV Bytes, we specialize in crafting cutting-edge web solutions using Next.js, TailwindCSS, and
            seamless business automation technologies. Our expertise allows us to deliver cost-effective, scalable, and
            modern designs that drive your business forward.
          </p>
          <Button variant="link" className="text-primary hover:text-primary/80">
            Learn More →
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Building2 className="h-12 w-12 text-primary" />,
              title: "Modern Tech Stack",
              description: "Next.js, TailwindCSS, and React for top-tier websites and applications",
            },
            {
              icon: <Command className="h-12 w-12 text-primary" />,
              title: "SEO Optimized",
              description: "Built-in SEO optimization for enhanced visibility and better search rankings",
            },
            {
              icon: <LineChart className="h-12 w-12 text-primary" />,
              title: "Scalable Solutions",
              description: "Future-proof your business with scalable and maintainable web applications",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="animate-fade-up rounded-lg border border-primary/20 bg-white p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-lg bg-primary/5">{card.icon}</div>
              <h4 className="mb-3 text-xl font-semibold text-gray-800">{card.title}</h4>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

