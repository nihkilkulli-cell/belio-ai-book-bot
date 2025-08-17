import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    business: "Lotus Spa & Wellness",
    location: "Vancouver, BC",
    rating: 5,
    testimonial: "I was losing at least 5-10 bookings every week from after-hours calls. Since getting Belio, I'm capturing 100% of inquiries and my revenue has increased by 40%. It's like having a full-time receptionist for a fraction of the cost.",
    result: "40% revenue increase",
    avatar: "🧘‍♀️"
  },
  {
    name: "Mike Rodriguez",
    business: "Rodriguez Plumbing",
    location: "Austin, TX",
    rating: 5,
    testimonial: "Emergency calls come in all hours, and I can't always answer while I'm under a sink! Belio captures every lead, schedules estimates, and even explains our pricing. My wife says it's the best business investment we've ever made.",
    result: "60% more estimates booked",
    avatar: "🔧"
  },
  {
    name: "Jennifer Kim",
    business: "Bella Hair Studio",
    location: "Toronto, ON",
    rating: 5,
    testimonial: "My clients love that they can book appointments anytime, and I love that I don't have to stop mid-haircut to answer the phone. Belio even handles my complicated color appointment scheduling perfectly.",
    result: "85% fewer interruptions",
    avatar: "✂️"
  },
  {
    name: "David Thompson",
    business: "Summit Dental Care",
    location: "Denver, CO",
    rating: 5,
    testimonial: "Patient satisfaction has improved dramatically since we can answer calls 24/7. Belio even helps patients understand their insurance coverage before they come in. It's reduced our admin workload by hours every day.",
    result: "90% patient satisfaction",
    avatar: "🦷"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/10 via-background to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Real Results from Real Small Businesses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how business owners like you are growing their revenue with Belio AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-primary transition-all duration-300 border border-border/50 relative"
            >
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.testimonial}"
                </blockquote>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary/10 rounded-full border border-primary/20">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-primary">{testimonial.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-subtle rounded-full border border-border/50">
            <span className="text-sm font-medium text-muted-foreground">
              Join 500+ small businesses already growing with Belio AI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;