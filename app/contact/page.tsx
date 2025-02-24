"use client"

import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Select the weights you need
  variable: "--font-poppins",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact MCODEV Bytes",
  description: "Get in touch with MCODEV Bytes for your web development and digital solution needs",
  url: "https://www.mcodevbytes.in/contact"
}

const ContactPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading)   return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
    </div>
  );

  return (
    <div  className={`${poppins.className} min-h-screen bg-white`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;