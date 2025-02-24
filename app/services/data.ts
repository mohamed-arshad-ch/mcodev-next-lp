import React from 'react'
import { LucideIcon } from "lucide-react"
import {
  Globe,
  Smartphone,
  Megaphone,
  Paintbrush,
  ShoppingCart,
  BarChart,
  Search,
  Cloud,
} from "lucide-react"

export interface Service {
  title: string
  description: string
  longDescription: string
  slug: string
  icon: LucideIcon
  color: string
  features: string[]
}

export const services: Service[] = [
  {
    icon: Globe ,
    title: "Web Development",
    slug: "web-development",
    description: "Custom websites and web applications built with Next.js, React, and modern technologies for optimal performance",
    color: "text-blue-500",
    longDescription: "Our web development services focus on creating modern, responsive, and high-performance websites. We use cutting-edge technologies like React, Next.js, and Node.js to build scalable solutions.",
    features: ["Custom Web Applications", "Responsive Design", "Performance Optimization", "SEO-friendly Development"]
  },
  {
    icon: Smartphone ,
    title: "App Development",
    slug: "app-development",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences",
    color: "text-green-500",
    longDescription: "We develop native and cross-platform mobile applications that provide seamless user experiences across all devices. Our team specializes in React Native and Flutter development.",
    features: ["iOS & Android Apps", "Cross-platform Solutions", "UI/UX Design", "App Maintenance"]
  },
  {
    icon: Megaphone ,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Strategic digital marketing solutions to increase your online presence and reach",
    color: "text-orange-500",
    longDescription: "Our digital marketing services help businesses grow their online presence through strategic campaigns, social media management, and content marketing.",
    features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "PPC Advertising"]
  },
  {
    icon: Paintbrush ,
    title: "Branding",
    slug: "branding",
    description: "Comprehensive branding services to establish and strengthen your market identity",
    color: "text-purple-500",
    longDescription: "We create compelling brand identities that help businesses stand out in their market. Our branding services include logo design, brand guidelines, and visual identity development.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
  },
  {
    icon: ShoppingCart ,
    title: "E-Commerce Solutions",
    slug: "ecommerce-solutions",
    description: "Custom e-commerce platforms with secure payment gateways and inventory management",
    color: "text-pink-500",
    longDescription: "We build custom e-commerce solutions that help businesses sell online effectively. Our platforms include secure payment processing, inventory management, and customer analytics.",
    features: ["Custom E-commerce Platforms", "Payment Integration", "Inventory Management", "Analytics Dashboard"]
  },
  {
    icon: Search ,
    title: "SEO Services",
    slug: "seo-services",
    description: "Search engine optimization to improve your visibility and organic traffic",
    color: "text-yellow-500",
    longDescription: "Our SEO services help improve your website's visibility in search results through technical optimization, content strategy, and link building.",
    features: ["Technical SEO", "Content Optimization", "Link Building", "SEO Analytics"]
  },
  {
    icon: Cloud ,
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Scalable cloud infrastructure and deployment services for your applications",
    color: "text-cyan-500",
    longDescription: "We provide cloud infrastructure solutions that ensure your applications are scalable, secure, and highly available. Our team manages deployment and maintenance.",
    features: ["Cloud Infrastructure", "DevOps", "Security", "Maintenance"]
  },
  {
    icon: BarChart ,
    title: "Analytics & Reporting",
    slug: "analytics-reporting",
    description: "Data-driven insights and comprehensive reporting for informed decision making",
    color: "text-red-500",
    longDescription: "Our analytics services provide actionable insights through comprehensive data analysis and reporting, helping businesses make informed decisions.",
    features: ["Data Analysis", "Custom Reports", "Performance Tracking", "Business Intelligence"]
  }
]