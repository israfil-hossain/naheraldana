"use client"

import { useState } from "react"
import { Calendar, Monitor, Cpu, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const serviceCategories = [
  {
    id: "events",
    icon: Calendar,
    title: "Event Management Services",
    description: "Professional event planning and execution for corporate and private occasions.",
    services: [
      { name: "Corporate Events", description: "Professional corporate gatherings, meetings, and celebrations" },
      { name: "Product Launches", description: "Impactful product reveal events that create lasting impressions" },
      { name: "Conferences & Seminars", description: "Full-scale conference management from planning to execution" },
      { name: "Exhibition Support", description: "Complete exhibition booth setup and management services" },
      { name: "Private Events", description: "Elegant private celebrations and exclusive gatherings" },
      { name: "Event Planning & Coordination", description: "End-to-end event planning and seamless coordination" },
      { name: "Stage, Sound, Lighting & Technical Setup", description: "Professional AV and technical infrastructure" },
    ],
  },
  {
    id: "it",
    icon: Monitor,
    title: "IT Products Supply",
    description: "Quality IT hardware and technology solutions for modern businesses.",
    services: [
      { name: "Laptops", description: "Business and enterprise-grade laptops from leading brands" },
      { name: "Desktops", description: "Workstations and desktop computers for every business need" },
      { name: "Printers", description: "Office printers, MFPs, and document management solutions" },
      { name: "Networking Equipment", description: "Routers, switches, and enterprise networking solutions" },
      { name: "Accessories", description: "Peripherals, cables, and essential IT accessories" },
      { name: "Office IT Solutions", description: "Complete office technology infrastructure packages" },
      { name: "Business Hardware Supply", description: "Bulk hardware procurement for organizations" },
    ],
  },
  {
    id: "electronics",
    icon: Cpu,
    title: "Electronics Products Supply",
    description: "Reliable electronics for commercial and business applications.",
    services: [
      { name: "Consumer Electronics", description: "Quality consumer electronics for business environments" },
      { name: "Office Electronics", description: "Essential office electronics and equipment" },
      { name: "Display Solutions", description: "Monitors, digital signage, and display systems" },
      { name: "Audio Devices", description: "Professional audio equipment and sound systems" },
      { name: "CCTV / Security Devices", description: "Surveillance and security system solutions" },
      { name: "Commercial Electronics Supply", description: "Bulk electronics for commercial operations" },
    ],
  },
]

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("events")
  
  const currentCategory = serviceCategories.find(cat => cat.id === activeCategory)
  
  return (
    <section id="services" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Services</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Business Solutions
          </h2>
          <p className="text-muted-foreground">
            From event management to IT and electronics supply, we provide end-to-end solutions tailored to your business requirements.
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border transition-all duration-300 text-sm sm:text-base",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg"
                  : "bg-background text-foreground border-border hover:border-primary/50"
              )}
            >
              <category.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">{category.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>
        
        {/* Services Grid */}
        {currentCategory && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">{currentCategory.title}</h3>
              <p className="text-muted-foreground">{currentCategory.description}</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {currentCategory.services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.name}
                      </h4>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center pt-8">
              <Button asChild size="lg">
                <Link href="#contact">
                  Request Service Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
