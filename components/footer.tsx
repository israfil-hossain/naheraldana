import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact Us", href: "#contact" },
]

const serviceLinks = [
  { name: "Event Management", href: "#services" },
  { name: "IT Products Supply", href: "#services" },
  { name: "Electronics Supply", href: "#services" },
  { name: "Corporate Events", href: "#services" },
  { name: "Technical Setup", href: "#services" },
]

const PHONE_NUMBER = "+971554470608"
const PHONE_DISPLAY = "+971 55 447 0608"
const EMAIL_ADDRESS = "naherproject@gmail.com"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info - Increased Logo Size */}
          <div className="space-y-4 sm:space-y-6 col-span-2 lg:col-span-1">
            <div className="bg-background/10 rounded-lg p-4 inline-block">
              <Image
                src="/images/logo.png"
                alt="Naher Aldana Project Management Services"
                width={240}
                height={80}
                className="h-16 sm:h-20 w-auto"
              />
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              A Dubai-based company offering professional event management services along with IT and electronics product supply.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Office No. 101, King Hamad Mohammed Abdulrahman, Al-Bahr - Al-Khabisi - 155, Dubai, U.A.E
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <Link href={`tel:${PHONE_NUMBER}`} className="text-background/70 hover:text-accent transition-colors text-sm font-medium">
                  {PHONE_DISPLAY}
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <Link href={`mailto:${EMAIL_ADDRESS}`} className="text-background/70 hover:text-accent transition-colors text-sm">
                  {EMAIL_ADDRESS}
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span className="text-background/70 text-sm">
                  Sun - Thu: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>&copy; {new Date().getFullYear()} Naher Aldana Project Management Services. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-background transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-background transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
