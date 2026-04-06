import Image from "next/image"
import { Building2, ShoppingBag, Calendar, GraduationCap, Hotel, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const industries = [
  {
    icon: Building2,
    title: "Corporate Offices",
    description: "IT infrastructure, electronics, and event support for corporate environments.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  },
  {
    icon: ShoppingBag,
    title: "Retail Businesses",
    description: "POS systems, display solutions, and commercial electronics for retail operations.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80",
  },
  {
    icon: Calendar,
    title: "Event Organizers",
    description: "Full-service event management, technical setup, and equipment supply.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "IT labs, audio-visual equipment, and educational technology solutions.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description: "Hotel technology, security systems, and corporate event services.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
  },
  {
    icon: Briefcase,
    title: "Small & Medium Businesses",
    description: "Scalable IT solutions and electronics tailored for growing businesses.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80",
  },
]

export function IndustriesSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Industries We Serve</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Solutions for Every Sector
          </h2>
          <p className="text-muted-foreground">
            We provide tailored solutions across various industries, understanding the unique needs of each sector.
          </p>
        </div>
        
        {/* Industries Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-background rounded-xl flex items-center justify-center shadow-lg">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <CardContent className="p-4 sm:p-6 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">{industry.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
