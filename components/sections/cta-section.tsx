import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

const PHONE_NUMBER = "+971554470608"
const PHONE_DISPLAY = "+971 55 447 0608"

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-primary relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
          alt="Dubai skyline"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Looking for Event Support or IT & Electronics Supply in Dubai?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Talk to Naher Aldana Project Management Services today for trusted solutions and professional support. Let us help you achieve your business goals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="text-base min-w-[200px]">
              <Link href="#contact">
                Contact Us Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-black min-w-[200px] border-primary-foreground/30 hover:bg-primary-foreground/10">
              <Link href={`tel:${PHONE_NUMBER}`}>
                <Phone className="mr-2 w-5 h-5" />
                Call: {PHONE_DISPLAY}
              </Link>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-primary-foreground/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary-foreground">10+</p>
                <p className="text-xs sm:text-sm text-primary-foreground/70">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary-foreground">500+</p>
                <p className="text-xs sm:text-sm text-primary-foreground/70">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary-foreground">200+</p>
                <p className="text-xs sm:text-sm text-primary-foreground/70">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary-foreground">24/7</p>
                <p className="text-xs sm:text-sm text-primary-foreground/70">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
