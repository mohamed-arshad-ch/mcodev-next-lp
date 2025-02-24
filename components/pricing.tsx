import { Box, Rocket, Send, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pricing() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Choose Your Plan</h2>
          <div className="mx-auto h-1 w-24 bg-primary"></div>
          <p className="mx-auto max-w-2xl text-gray-600">Select the perfect plan for your business needs</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Bytes Basic",
              price: "27,999",
              icon: <Box className="h-8 w-8" />,
              features: [
                { text: "One landing page built with Next.js and TailwindCSS", included: true },
                { text: "Basic SEO optimization", included: true },
                { text: "1-year domain registration", included: true },
                { text: "Google Business email setup", included: true },
                { text: "Hosting server for 1 year", included: true },
              ],
            },
            {
              title: "Bytes Pro",
              price: "69,999",
              icon: <Rocket className="h-8 w-8" />,
              features: [
                { text: "Up to 5 pages with Next.js and TailwindCSS", included: true },
                { text: "Advanced SEO optimization", included: true },
                { text: "Premium domain for 1 year", included: true },
                { text: "Business email suite", included: true },
                { text: "Premium hosting with SSL", included: true },
              ],
              featured: true,
            },
            {
              title: "Bytes Enterprise",
              price: "Contact us",
              icon: <Send className="h-8 w-8" />,
              features: [
                { text: "Custom web application development", included: true },
                { text: "Enterprise SEO solutions", included: true },
                { text: "Custom domain setup", included: true },
                { text: "Enterprise email solutions", included: true },
                { text: "Dedicated hosting infrastructure", included: true },
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`relative animate-fade-up rounded-lg border bg-white p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5
                ${
                  plan.featured
                    ? "border-primary/40 shadow-lg shadow-primary/10 scale-105"
                    : "border-primary/20 hover:border-primary/40"
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-medium text-white shadow-lg">
                    Popular
                  </span>
                </div>
              )}
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <div className="text-primary">{plan.icon}</div>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-800">{plan.title}</h3>
                <div className="text-4xl font-bold text-gray-800">
                  {typeof plan.price === "string" && plan.price.includes(",") ? (
                    <>
                      <span className="text-2xl">₹</span>
                      {plan.price}
                    </>
                  ) : (
                    plan.price
                  )}
                </div>
              </div>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                    ) : (
                      <X className="h-5 w-5 flex-shrink-0 text-gray-300" />
                    )}
                    <span className={feature.included ? "text-gray-600" : "text-gray-400 line-through"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Button
                  className={`w-full ${
                    plan.featured
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  {plan.price === "Contact us" ? "Contact Us" : "View Details"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

