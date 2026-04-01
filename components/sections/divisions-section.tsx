import Image from "next/image"
import { Calendar, Monitor, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const divisions = [
  {
    icon: Calendar,
    title: "Event Management",
    description: "We plan and execute professional events with precision, creativity, and operational excellence. From corporate gatherings to product launches, we bring your vision to life.",
    features: ["Corporate Events", "Product Launches", "Conferences", "Technical Setup"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
  },
  {
    icon: Monitor,
    title: "IT Products",
    description: "We supply quality IT hardware and business technology solutions tailored to modern organizational needs. Equip your business with reliable technology.",
    features: ["Laptops & Desktops", "Networking Equipment", "Printers", "Office Solutions"],
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
  },
  {
    icon: Cpu,
    title: "Electronics Products",
    description: "We provide dependable electronics products for commercial and business use with a focus on quality and performance. From displays to security systems.",
    features: ["Display Solutions", "Audio Devices", "CCTV Systems", "Commercial Electronics"],
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600&q=80",
  },
]

export function DivisionsSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Business Divisions</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Solutions for Your Business
          </h2>
          <p className="text-muted-foreground">
            Three specialized divisions working together to deliver complete business solutions across event management, IT, and electronics.
          </p>
        </div>
        
        {/* Division Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {divisions.map((division, index) => (
            <Card key={index} className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={division.image}
                  alt={division.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-background rounded-xl flex items-center justify-center shadow-lg">
                  <division.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <CardContent className="p-8 pt-6">
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{division.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{division.description}</p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {division.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
