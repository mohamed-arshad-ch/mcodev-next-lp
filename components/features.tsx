import { Eye, Infinity, Star, Grid, Activity, Shield, Globe, Users, Database, Cloud, Code, Zap } from "lucide-react"

export function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Comprehensive SaaS Features</h2>
          <div className="mx-auto h-1 w-24 bg-primary"></div>
          <p className="mx-auto max-w-2xl text-gray-600">
            Explore our extensive range of features designed to enhance your web application
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Shield className="h-6 w-6" />,
              title: "Security Features",
              color: "text-amber-500",
            },
            {
              icon: <Cloud className="h-6 w-6" />,
              title: "Cloud Integration",
              color: "text-blue-500",
            },
            {
              icon: <Database className="h-6 w-6" />,
              title: "Data Management",
              color: "text-pink-500",
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: "User Management",
              color: "text-purple-500",
            },
            {
              icon: <Globe className="h-6 w-6" />,
              title: "Multi-tenant Architecture",
              color: "text-sky-500",
            },
            {
              icon: <Activity className="h-6 w-6" />,
              title: "Analytics Dashboard",
              color: "text-orange-500",
            },
            {
              icon: <Code className="h-6 w-6" />,
              title: "API Integration",
              color: "text-teal-500",
            },
            {
              icon: <Zap className="h-6 w-6" />,
              title: "Real-time Updates",
              color: "text-indigo-500",
            },
            {
              icon: <Star className="h-6 w-6" />,
              title: "Custom Workflows",
              color: "text-amber-700",
            },
            {
              icon: <Grid className="h-6 w-6" />,
              title: "Scalable Infrastructure",
              color: "text-rose-500",
            },
            {
              icon: <Eye className="h-6 w-6" />,
              title: "Access Control",
              color: "text-red-500",
            },
            {
              icon: <Infinity className="h-6 w-6" />,
              title: "Automated Backups",
              color: "text-green-500",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group animate-fade-up rounded-lg border border-primary/20 bg-white p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`flex items-center space-x-3 ${feature.color}`}>
                <div className="rounded-lg bg-gray-50 p-2 transition-all duration-300 group-hover:bg-white group-hover:shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

