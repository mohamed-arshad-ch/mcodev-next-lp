import { Users, FileText, Headphones, BadgeCheck } from "lucide-react"

export function WhyUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Why Choose Us</h2>
          <div className="mx-auto h-1 w-24 bg-primary"></div>
          <p className="mx-auto max-w-2xl text-gray-600">
            Partner with MCODEV Bytes for innovative web solutions that drive business growth
          </p>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "Expert Development Team",
              description:
                "Our skilled developers specialize in Next.js, React, and modern web technologies to deliver high-performance applications",
            },
            {
              number: "02",
              title: "Rapid Development",
              description:
                "Streamlined development process with quick turnaround times without compromising on quality or functionality",
            },
            {
              number: "03",
              title: "Customer-Centric Approach",
              description:
                "We prioritize your business needs and provide tailored solutions with ongoing support and maintenance",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="animate-fade-up rounded-lg border border-primary/10 bg-white p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 bg-gradient-to-r from-primary to-primary bg-clip-text text-4xl font-bold text-transparent">
                {item.number}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <BadgeCheck className="h-8 w-8 text-primary" />,
              number: "100+",
              label: "Satisfied Clients",
            },
            {
              icon: <FileText className="h-8 w-8 text-primary" />,
              number: "150+",
              label: "Projects Completed",
            },
            {
              icon: <Headphones className="h-8 w-8 text-primary" />,
              number: "24/7",
              label: "Support Available",
            },
            {
              icon: <Users className="h-8 w-8 text-primary" />,
              number: "15+",
              label: "Expert Developers",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="animate-fade-up rounded-lg border border-primary/10 bg-white p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/5">
                {stat.icon}
              </div>
              <div className="mb-2 text-4xl font-bold text-gray-800">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

