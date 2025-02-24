import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white pb-8 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 pb-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">MCODEV</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Kerala, India</p>
              <p className="text-gray-600">
                <span className="font-semibold">Phone:</span> +91-98472-74569
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> mcodevbiz@gmail.com
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Useful Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Terms of service", href: "/terms" },
                { name: "Privacy policy", href: "/privacy" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 transition-colors duration-200 hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Web Design", href: "/services/web-design" },
                { name: "Web Development", href: "/services/web-development" },
                { name: "Product Management", href: "/services/product-management" },
                { name: "Marketing", href: "/services/marketing" },
                { name: "Graphic Design", href: "/services/graphic-design" },
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-600 transition-colors duration-200 hover:text-primary">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex space-x-4">
              {[
                { Icon: Twitter, href: "https://x.com/MCODEVBYTES" },
                { Icon: Facebook, href: "https://www.facebook.com/mcodevbytes" },
                { Icon: Instagram, href: "https://www.instagram.com/mcodev_bytes/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/mcodev-bytes" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors duration-200 hover:border-primary hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="text-center text-gray-600 md:text-right">
              <p>
                © Copyright <span className="font-semibold">MCODEV</span>. All Rights Reserved
              </p>
              <p>
                Designed by{" "}
                <Link
                  href="/"
                  className="text-primary transition-colors duration-200 hover:text-primary/80 hover:underline"
                >
                  MCODEV Bytes
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

