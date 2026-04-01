"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const categories = ["All", "Events", "IT Setup", "Products", "Projects"]

const galleryItems = [
  { 
    id: 1, 
    title: "Corporate Conference Setup", 
    category: "Events", 
    size: "large",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
  },
  { 
    id: 2, 
    title: "Product Launch Event", 
    category: "Events", 
    size: "small",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80"
  },
  { 
    id: 3, 
    title: "Office IT Infrastructure", 
    category: "IT Setup", 
    size: "small",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
  },
  { 
    id: 4, 
    title: "Exhibition Booth Design", 
    category: "Events", 
    size: "medium",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80"
  },
  { 
    id: 5, 
    title: "Network Installation", 
    category: "IT Setup", 
    size: "small",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80"
  },
  { 
    id: 6, 
    title: "Display Solutions Setup", 
    category: "Products", 
    size: "medium",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80"
  },
  { 
    id: 7, 
    title: "Seminar Technical Support", 
    category: "Events", 
    size: "small",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80"
  },
  { 
    id: 8, 
    title: "Security System Installation", 
    category: "Projects", 
    size: "large",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80"
  },
  { 
    id: 9, 
    title: "Audio Visual Setup", 
    category: "Events", 
    size: "small",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80"
  },
  { 
    id: 10, 
    title: "Hardware Deployment", 
    category: "IT Setup", 
    size: "medium",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },
  { 
    id: 11, 
    title: "Commercial Electronics", 
    category: "Products", 
    size: "small",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80"
  },
  { 
    id: 12, 
    title: "Project Execution", 
    category: "Projects", 
    size: "small",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80"
  },
]

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All")
  
  const filteredItems = galleryItems.filter(item => 
    activeFilter === "All" || item.category === activeFilter
  )
  
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Gallery</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Work in Action
          </h2>
          <p className="text-muted-foreground">
            Explore our portfolio of successful events, IT installations, and project deliveries across Dubai and the UAE.
          </p>
        </div>
        
        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
                activeFilter === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background text-muted-foreground hover:bg-muted border border-border"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                "break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer",
                item.size === "large" && "aspect-[4/5]",
                item.size === "medium" && "aspect-[4/3]",
                item.size === "small" && "aspect-square"
              )}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-primary-foreground">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-80">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
