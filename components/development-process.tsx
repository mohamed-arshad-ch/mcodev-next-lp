import { Activity, Code, Presentation, Frame, Share2, Database } from "lucide-react"

export function DevelopmentProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Development Process</h2>
          <div className="mx-auto h-1 w-24 bg-primary"></div>
          <p className="mx-auto max-w-2xl text-gray-600">
            We follow a streamlined development process to ensure quality and efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Activity className="h-8 w-8 text-sky-400" />,
              title: "Project Planning",
              description:
                "Detailed project scoping, requirements gathering, and timeline planning to ensure project success",
            },
            {
              icon: <Code className="h-8 w-8 text-orange-400" />,
              title: "Design & Development",
              description: "Creating responsive, modern designs and implementing them with clean, efficient code",
            },
            {
              icon: <Presentation className="h-8 w-8 text-emerald-400" />,
              title: "Quality Assurance",
              description:
                "Rigorous testing and optimization to ensure your website performs flawlessly across all devices",
            },
            {
              icon: <Frame className="h-8 w-8 text-red-400" />,
              title: "Deployment",
              description: "Smooth deployment process with continuous monitoring and performance optimization",
            },
            {
              icon: <Share2 className="h-8 w-8 text-purple-400" />,
              title: "SEO Implementation",
              description:
                "Implementation of SEO best practices to improve your website's visibility in search results",
            },
            {
              icon: <Database className="h-8 w-8 text-pink-400" />,
              title: "Maintenance & Support",
              description: "Ongoing maintenance, updates, and technical support to keep your website running smoothly",
            },
          ].map((process, index) => (
            <div
              key={index}
              className="group animate-fade-up rounded-lg border border-primary/20 bg-white p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-lg">
                {process.icon}
              </div>
              <h3 className="mb-4 text-center text-xl font-semibold text-gray-800">{process.title}</h3>
              <p className="text-center text-gray-600">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

