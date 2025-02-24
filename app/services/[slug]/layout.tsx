import type React from "react"
import type { Metadata } from "next"
import { services } from "../data"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Select the weights you need
  variable: "--font-poppins",
});
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "MCODEV Bytes",
      url: "https://www.mcodevbytes.in"
    },
    url: `https://www.mcodevbytes.in/services/${service.slug}`,
    image: service.icon
  }

  return {
    title: `${service.title} - MCODEV Bytes Services`,
    description: service.description,
    keywords: [`${service.title}`, "MCODEV Bytes", "web services", "digital solutions"],
    openGraph: {
      title: `${service.title} - MCODEV Bytes Services`,
      description: service.description,
      
    },
    alternates: {
      canonical: `https://www.mcodevbytes.in/services/${service.slug}`,
    },
    other: {
      "application/ld+json": JSON.stringify(structuredData),
    },
  }
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
      <div className={`${poppins.className} min-h-screen bg-white`}>
     
      <Navbar />
      <div className="pt-16">
      {children}
      </div>
      <Footer />
    </div>
      
        
    
  )
}

