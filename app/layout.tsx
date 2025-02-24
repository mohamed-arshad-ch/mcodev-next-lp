import type React from "react"
import type { Metadata } from "next"

import "../styles/globals.css"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Select the weights you need
  variable: "--font-poppins",
});

// const inter = Inter({ subsets: ["latin"] })

export const metadata:Metadata = {
  metadataBase: new URL("https://www.mcodevbytes.in"),
  title: {
    default: "Mcodev Bytes - Professional Web & App Development Services",
    template: "%s | Mcodev Bytes",
  },
  description:
    "Mcodev Bytes provides expert web development, mobile app solutions, cloud computing, and digital transformation services. Elevate your business with our cutting-edge technology solutions.",
    keywords: [
      "web development",
      "mobile app development",
      "software solutions",
      "digital marketing",
      "SEO services",
      "cloud computing",
      "UI/UX design",
      "IT consulting",
      "business automation",
      "e-commerce development",
      "custom software development",
      "React development",
      "Next.js development",
      "technology solutions",
      "Mcodev Bytes",
      "Mcodev",
      "IT solutions in Kerala",
      "AI-powered development",
    ],

  icons: {
    icon: "https://www.mcodevbytes.in/favicon.ico",  // Ensure this file exists in the `public` folder
    apple: "https://www.mcodevbytes.in/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mcodevbytes.in",
    title: "Mcodev Bytes - Professional Web & App Development Services",
    description:
      "Expert web and app development services to accelerate your business growth.",
    siteName: "Mcodev Bytes",
    images: [
      {
        url: "https://www.mcodevbytes.in/mcodev-logo-1.png",
        width: 1200,
        height: 630,
        alt: "Mcodev Bytes Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@McodevBytes",
    creator: "@McodevBytes",
    title: "Mcodev Bytes - Professional Web & App Development Services",
    description:
      "Expert web and mobile app development services to transform your business digitally.",
    images: ["https://www.mcodevbytes.in/mcodev-logo-1.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  alternates: {
    canonical: "https://www.mcodevbytes.in",
    languages: {
      "en-US": "https://www.mcodevbytes.in",
   
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "LocalBusiness"],
                  "@id": "https://www.mcodevbytes.in/#organization",
                  name: "Mcodev Bytes",
                  url: "https://www.mcodevbytes.in",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.mcodevbytes.in/mcodev-logo-1.png",
                    width: 1200,
                    height: 630
                  },
                  image: {
                    "@type": "ImageObject",
                    url: "https://www.mcodevbytes.in/mcodev-logo-1.png",
                    width: 1200,
                    height: 630
                  },
                  description: "Mcodev Bytes provides expert web development, mobile app solutions, cloud computing, and digital transformation services. Elevate your business with our cutting-edge technology solutions.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Malappuram", // Update this
                    addressLocality: "Malappuram", // Update this
                    addressRegion: "Kerala",
                    postalCode: "676519", // Update this
                    addressCountry: "IN"
                  },
                
                  priceRange: "₹₹₹",
                  telephone: "+919847274569", // Update this
                  email: "mcodevbiz@gmail.com", // Update this
                  sameAs: [
                    "https://x.com/MCODEVBYTES",
                    "https://www.facebook.com/mcodevbytes",
                    "https://www.instagram.com/mcodev_bytes/",
                    "https://www.linkedin.com/company/mcodev-bytes"
                   
                  ],
                  openingHours: ["Mo-Fr 09:00-18:00"], // Update as needed
                
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+919847274569", // Update this
                      contactType: "customer service",
                      email: "mcodevbiz@gmail.com", // Update this
                      availableLanguage: ["English", "Malayalam"]
                    },
                    {
                      "@type": "ContactPoint",
                      telephone: "+919847274569", // Update this
                      contactType: "technical support",
                      email: "mcodevbiz@gmail.com", // Update this
                      availableLanguage: ["English", "Malayalam"]
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.mcodevbytes.in/#website",
                  url: "https://www.mcodevbytes.in",
                  name: "Mcodev Bytes",
                  publisher: {
                    "@id": "https://www.mcodevbytes.in/#organization"
                  },
                 
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.mcodevbytes.in/services",
                  name: "Mcodev Bytes",
                  serviceType: [
                    "Web Development",
                    "Mobile App Development",
                    "Cloud Computing",
                    "Digital Transformation",
                    "UI/UX Design",
                    "IT Consulting",
                    "Software Development",
                    "E-commerce Development"
                  ],
                  offers: {
                    "@type": "Offer",
                    description: "Professional Web & App Development Services"
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Development Services",
                    itemListElement: [
                      {
                        "@type": "OfferCatalog",
                        name: "Web Development",
                        description: "Custom web application development using modern technologies"
                      },
                      {
                        "@type": "OfferCatalog",
                        name: "Mobile App Development",
                        description: "Native and cross-platform mobile application development"
                      },
                      {
                        "@type": "OfferCatalog",
                        name: "Cloud Computing",
                        description: "Cloud infrastructure and deployment solutions"
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}


