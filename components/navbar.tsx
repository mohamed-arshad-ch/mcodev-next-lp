"use client"

import { useState } from "react"
import { ChevronDown, Menu, X, ShoppingCart, FileText, Palette } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const products = [
  {
    name: "Ezzy Cartz",
    slug: "ezzy-cartz",
    url: "/products/ezzy-cartz",
    icon: <ShoppingCart className="h-4 w-4 mr-2" />,
  },
  {
    name: "Host My CV",
    slug: "host-my-cv",
    url: "/products/host-my-cv",
    icon: <FileText className="h-4 w-4 mr-2" />,
  },
  {
    name: "Creator Mind",
    slug: "creator-mind",
    url: "/products/creator-mind",
    icon: <Palette className="h-4 w-4 mr-2" />,
  },
]

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100/20 bg-white/80 backdrop-blur-md dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800 transition-colors hover:text-primary dark:text-white dark:hover:text-primary"
            >
              MCODEV
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                pathname === "/"
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors ${
                pathname === "/about"
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`font-medium transition-colors ${
                pathname === "/services"
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              }`}
            >
              Services
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              >
                Products
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 animate-fade-down rounded-md border border-gray-100/20 bg-white/90 py-2 shadow-lg backdrop-blur-lg dark:bg-gray-900/90">
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      href={product.url}
                      className="flex items-center px-4 py-2 text-gray-600 transition-colors hover:bg-gray-50/50 dark:text-gray-300 dark:hover:bg-gray-800/50"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {product.icon}
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className={`font-medium transition-colors ${
                pathname === "/contact"
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="animate-fade-down py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`px-4 py-2 font-medium transition-colors ${
                  pathname === "/"
                    ? "bg-gray-50 text-primary dark:bg-gray-800"
                    : "text-gray-600 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-4 py-2 font-medium transition-colors ${
                  pathname === "/about"
                    ? "bg-gray-50 text-primary dark:bg-gray-800"
                    : "text-gray-600 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`px-4 py-2 font-medium transition-colors ${
                  pathname === "/services"
                    ? "bg-gray-50 text-primary dark:bg-gray-800"
                    : "text-gray-600 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              {/* Mobile Products Dropdown */}
              <div className="px-4 py-2">
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="flex w-full items-center justify-between font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                >
                  Products
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${isMobileProductsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isMobileProductsOpen && (
                  <div className="mt-2 space-y-2 border-l-2 border-primary/20 pl-4">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={product.url}
                        className="flex items-center py-2 text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                        onClick={() => {
                          setIsMobileProductsOpen(false)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        {product.icon}
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/contact"
                className={`px-4 py-2 font-medium transition-colors ${
                  pathname === "/contact"
                    ? "bg-gray-50 text-primary dark:bg-gray-800"
                    : "text-gray-600 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

