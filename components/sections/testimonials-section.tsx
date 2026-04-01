import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    role: "Operations Director",
    company: "Gulf Industries LLC",
    content: "Naher Aldana has been instrumental in managing our corporate events. Their attention to detail and professional execution exceeded our expectations. The team delivered flawlessly on every occasion.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Sarah Mitchell",
    role: "IT Manager",
    company: "Dubai Tech Solutions",
    content: "We have been sourcing our IT equipment from Naher Aldana for over two years. The quality of products and their after-sales support is exceptional. They truly understand business technology needs.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Mohammed Hassan",
    role: "Facilities Manager",
    company: "Al Majid Group",
    content: "From security systems to office electronics, Naher Aldana has been our go-to supplier. Their competitive pricing, reliability, and timely delivery make them stand out in the market.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">
            Trusted by businesses across Dubai and the UAE. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-6" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  &quot;{testimonial.content}&quot;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary">{testimonial.company}</p>
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/5 to-transparent" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
