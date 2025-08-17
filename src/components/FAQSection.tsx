import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I get Belio AI up and running?",
    answer: "Most businesses are live within 48 hours. After your onboarding call, our team configures everything for you - call scripts, booking workflows, calendar integration. You don't need any technical skills."
  },
  {
    question: "What if my customers don't like talking to AI?",
    answer: "Our AI is designed to sound natural and helpful. Most customers don't even realize they're talking to AI! Plus, complex issues can always be transferred to you or escalated to voicemail with a callback promise."
  },
  {
    question: "Will it work with my existing booking system?",
    answer: "Yes! Belio integrates with 50+ platforms including Google Calendar, Outlook, Square, Calendly, Acuity, and most industry-specific software. If you use something unique, our team can usually create a custom integration."
  },
  {
    question: "What happens if I get more calls than my plan includes?",
    answer: "You'll never miss a call! We just charge the overage rate per minute. Most small businesses stay well within their plan limits, and we'll alert you if you're approaching your limit."
  },
  {
    question: "Can Belio handle industry-specific questions?",
    answer: "Absolutely! During setup, we customize your AI with your specific services, pricing, policies, and common questions. Whether you're a dentist explaining procedures or a contractor discussing project timelines, Belio learns your business."
  },
  {
    question: "What if I'm not tech-savvy?",
    answer: "Perfect! Belio is designed for busy business owners, not tech experts. Our team handles all the setup, and managing it is as simple as updating your voicemail message. No apps to download or complicated dashboards."
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer: "No long-term contracts required. You can cancel anytime with 30 days notice. We believe in earning your business every month through results."
  },
  {
    question: "How much revenue could I actually gain?",
    answer: "Most clients see 30-60% more bookings within the first month. If you're currently missing even 10 calls per month worth $100 each, that's $1,000+ in lost revenue. Belio typically pays for itself with just 2-3 additional bookings."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions Small Business Owners Ask
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common concerns about AI receptionists for small businesses
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/50 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-subtle rounded-full border border-border/50">
            <span className="text-sm font-medium text-muted-foreground">
              Still have questions? Our team is here to help during your onboarding call.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;