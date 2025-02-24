import type React from "react"
import type { Metadata } from "next"
import { products } from "../data"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Select the weights you need
  variable: "--font-poppins",
});
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 4,
        bestRating: 5,
      },
      author: {
        "@type": "Company",
        name: "MCODEV Bytes",
      },
    },
    image: product.image,
    url: `https://www.mcodevbytes.in/products/${product.slug}`,
  }

  return {
    title: `${product.name} - MCODEV Bytes Products`,
    description: product.description,
    keywords: [`${product.name}`, "MCODEV Bytes", "web application", "digital solution"],
    openGraph: {
      title: `${product.name} - MCODEV Bytes Products`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    alternates: {
      canonical: `https://www.mcodevbytes.in/products/${product.slug}`,
    },
    other: {
      "application/ld+json": JSON.stringify(structuredData),
    },
  }
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
       
      </head>
      <body className={poppins.className}>
      <div className="min-h-screen bg-white">
     
      <Navbar />
      <div className="pt-16">
      {children}
      </div>
      <Footer />
    </div>
      
        
        </body>
    </html>
  )
}

