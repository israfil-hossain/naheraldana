"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I book an event management service?",
    answer: "You can book our event management services by contacting us through the contact form on our website, calling our office directly, or sending us a message on WhatsApp. Our team will discuss your requirements and provide a detailed proposal and quotation.",
  },
  {
    question: "What is the process for requesting a product quote?",
    answer: "Simply fill out our contact form with your product requirements, or reach out to us via phone or email. Provide details about the products you need, quantities, and any specific requirements. We will respond with a detailed quotation within 24-48 business hours.",
  },
  {
    question: "Do you provide delivery services for products?",
    answer: "Yes, we provide delivery services across Dubai and the UAE. Delivery timeframes depend on product availability and order size. We also offer express delivery options for urgent requirements at additional cost.",
  },
  {
    question: "What support do you offer after product delivery?",
    answer: "We provide comprehensive after-sales support including installation assistance, warranty coordination, technical support, and replacement services for defective items. Our support team is available during business hours to address any concerns.",
  },
  {
    question: "Can you handle large corporate orders or bulk purchases?",
    answer: "Absolutely. We specialize in corporate and bulk orders for both IT and electronics products. We offer competitive pricing for large orders and can customize packages to meet your organization's specific needs.",
  },
  {
    question: "What types of events do you manage?",
    answer: "We manage a wide range of events including corporate conferences, product launches, seminars, exhibitions, private events, and gala dinners. Our services cover event planning, coordination, technical setup, and on-ground execution.",
  },
  {
    question: "How far in advance should I book for event services?",
    answer: "We recommend booking at least 4-6 weeks in advance for standard events and 2-3 months for large-scale corporate events or exhibitions. However, we can accommodate shorter timelines based on availability and event complexity.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, credit cards, and cheques for business clients. For large orders and corporate accounts, we offer flexible payment terms upon credit approval.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our services, products, and processes.
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-muted/30 rounded-xl border border-border px-4 sm:px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4 sm:py-5 text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 leading-relaxed text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
