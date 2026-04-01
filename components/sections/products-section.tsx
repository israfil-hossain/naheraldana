"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const categories = ["All", "IT Products", "Electronics", "Featured"]

const products = [
  {
    id: 1,
    name: "Business Laptop Pro",
    category: "IT Products",
    description: "High-performance laptop for business professionals with enterprise-grade security.",
    featured: true,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
  },
  {
    id: 2,
    name: "Enterprise Desktop Workstation",
    category: "IT Products",
    description: "Powerful desktop workstation for demanding business applications.",
    featured: false,
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=500&q=80",
  },
  {
    id: 3,
    name: "Network Router Pro",
    category: "IT Products",
    description: "Enterprise-grade router with advanced security features and high throughput.",
    featured: true,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80",
  },
  {
    id: 4,
    name: "Multifunction Printer",
    category: "IT Products",
    description: "Office printer with scanning, copying, and wireless connectivity.",
    featured: false,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&q=80",
  },
  {
    id: 5,
    name: "4K Display Monitor",
    category: "Electronics",
    description: "Professional 4K display with accurate color reproduction for business use.",
    featured: true,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
  },
  {
    id: 6,
    name: "Conference Audio System",
    category: "Electronics",
    description: "Professional audio system for meeting rooms and conference halls.",
    featured: false,
    image: "https://images.unsplash.com/photo-1558537348-c0f8e733989d?w=500&q=80",
  },
  {
    id: 7,
    name: "HD Security Camera System",
    category: "Electronics",
    description: "Complete CCTV solution with HD cameras and cloud storage integration.",
    featured: true,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=80",
  },
  {
    id: 8,
    name: "Digital Signage Display",
    category: "Electronics",
    description: "Commercial-grade digital signage for advertising and information display.",
    featured: false,
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&q=80",
  },
]

export function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  
  const filteredProducts = products.filter(product => {
    if (activeFilter === "All") return true
    if (activeFilter === "Featured") return product.featured
    return product.category === activeFilter
  })
  
  return (
    <section id="products" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Product Catalog</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Quality Products for Your Business
          </h2>
          <p className="text-muted-foreground">
            Browse our selection of IT and electronics products. Request a quote for detailed pricing and availability.
          </p>
        </div>
        
        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Product Image */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button asChild variant="secondary" size="sm">
                    <Link href="#contact">Request Quote</Link>
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-5">
                <div className="text-xs text-primary font-medium mb-2">{product.category}</div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Looking for specific products or bulk orders?
          </p>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Contact Us for Custom Quotes</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
