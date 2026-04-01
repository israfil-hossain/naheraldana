import { Shield, MapPin, Package, ClipboardList, MessageCircle, Clock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Professional & Reliable Service",
    description: "Count on us for consistent, high-quality service delivery across all projects and engagements.",
  },
  {
    icon: MapPin,
    title: "Dubai-Based Business Support",
    description: "Local presence means faster response times, better understanding of market needs, and personalized support.",
  },
  {
    icon: Package,
    title: "Quality-Focused Product Sourcing",
    description: "We partner with trusted manufacturers to ensure every product meets stringent quality standards.",
  },
  {
    icon: ClipboardList,
    title: "End-to-End Project Coordination",
    description: "From planning to execution, we manage every aspect of your project with meticulous attention to detail.",
  },
  {
    icon: MessageCircle,
    title: "Client-First Communication",
    description: "Clear, transparent communication keeps you informed and in control throughout every engagement.",
  },
  {
    icon: Clock,
    title: "Timely Delivery & Execution",
    description: "We respect deadlines and deliver on time, ensuring your business operations run smoothly.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Why Choose Us</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-balance">
            The Naher Aldana Difference
          </h2>
          <p className="opacity-80">
            Experience excellence in every interaction. Here&apos;s what sets us apart from the competition.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 border border-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-foreground/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
