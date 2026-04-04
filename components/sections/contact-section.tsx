"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const PHONE_NUMBER = "+971554470608"
const PHONE_DISPLAY = "+971 55 447 0608"
const EMAIL_ADDRESS = "naherproject@gmail.com"

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    content: "Office No. 101, King Hamad Mohammed Abdulrahman, Al-Bahr - Al-Khabisi - 155, Dubai, U.A.E",
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: PHONE_DISPLAY,
    href: `tel:${PHONE_NUMBER}`,
  },
  {
    icon: Mail,
    title: "Email Address",
    content: EMAIL_ADDRESS,
    href: `mailto:${EMAIL_ADDRESS}`,
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Sunday - Thursday: 9:00 AM - 6:00 PM",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We will get back to you soon!")
    setFormData({ fullName: "", phone: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Contact Us</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Get in Touch With Us
          </h2>
          <p className="text-muted-foreground">
            Have a question or ready to start a project? Reach out to us and our team will respond promptly.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+971 XX XXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{info.content}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="w-12 h-12 text-primary/50 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Google Maps Embed</p>
                  <p className="text-xs text-muted-foreground">Dubai, UAE</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
