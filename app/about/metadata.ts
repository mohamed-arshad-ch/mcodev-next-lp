import { Metadata } from "next"

export const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.mcodevbytes.in/#organization",
    "name": "MCODEV",
    "url": "https://www.mcodevbytes.in/about",
    "logo": "https://www.mcodevbytes.in/images/logo.png",
    "foundingDate": "2020",
    "description": "Building Digital Excellence Through Innovation and Expertise",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kerala",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXX-XXX-XXXX",
      "contactType": "customer service",
      "email": "contact@mcodevbytes.in"
    },
    "sameAs": [
      "https://www.linkedin.com/company/mcodev",
      "https://twitter.com/mcodev"
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 15
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "10.8505",
        "longitude": "76.2711"
      }
    },
    "award": [
      "Best Web Development Company in Kerala 2023",
      "Top Mobile App Development Company 2022"
    ],
    "knowsAbout": [
      "Web Development",
      "Mobile App Development",
      "Cloud Computing",
      "Digital Transformation",
      "UI/UX Design",
      "Software Development"
    ]
  }
  
  export const metadata:Metadata = {
    metadataBase: new URL("https://www.mcodevbytes.in"),
    title: "About Us - Mcodev Bytes | Web & App Development Experts",
    description:
      "Learn more about Mcodev Bytes, a leading provider of web development, mobile app solutions, cloud services, and digital transformation. Discover our mission, values, and expertise.",
    
    keywords: [
      "About Mcodev Bytes",
      "Mcodev Bytes company",
      "Web development team",
      "Mobile app development experts",
      "IT solutions company",
      "Digital transformation services",
      "Cloud computing solutions",
      "Software development",
      "Tech company in India",
      "Best IT services"
    ],
  
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.mcodevbytes.in/about",
      title: "About Us - Mcodev Bytes | Web & App Development Experts",
      description:
        "Mcodev Bytes is dedicated to providing cutting-edge web and app development services. Learn more about our journey, values, and expertise.",
      siteName: "Mcodev Bytes",
      images: [
        {
          url: "https://www.mcodevbytes.in/images/about-us-banner.jpg",
          width: 1200,
          height: 630,
          alt: "About Mcodev Bytes Team",
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      site: "@mcodevbytes",
      title: "About Us - Mcodev Bytes | Web & App Development Experts",
      description:
        "Mcodev Bytes specializes in expert web and app development. Get to know our team, values, and mission.",
      images: ["https://www.mcodevbytes.in/images/about-us-banner.jpg"],
    },
  
    icons: {
      icon: "https://www.mcodevbytes.in/favicon.ico",
      apple: "https://www.mcodevbytes.in/apple-touch-icon.png",
    },
  
    robots: "index, follow",
  };
  