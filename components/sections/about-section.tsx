import Image from "next/image"
import { Award, Users, Target, Handshake } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in all our services and products.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our priority. We tailor solutions to meet your needs.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes for every project.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnership",
    description: "Building long-term relationships through reliability and trust.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Us</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
                Your Trusted Partner for Business Solutions in Dubai
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Naher Aldana Project Management Services is a Dubai-based company offering professional event management services along with IT and electronics product supply.
              </p>
              <p>
                We help businesses and clients with reliable service, quality products, and smooth project execution. Our commitment to excellence has made us a trusted partner for organizations across the UAE.
              </p>
              <p>
                From corporate events to technology solutions, we deliver comprehensive services that help your business thrive in today&apos;s competitive market.
              </p>
            </div>
            
            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80"
                    alt="Professional business meeting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&q=80"
                    alt="Corporate event setup"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                    alt="Modern office space"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
