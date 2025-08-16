import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface TierSignupFormProps {
  tier: "starter" | "pro" | "premium";
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const tierInfo = {
  starter: {
    name: "Starter",
    tagline: "Essentials",
    price: "$199/mo",
    features: "150 minutes included, 24/7 Call Answering & Booking"
  },
  pro: {
    name: "Pro", 
    tagline: "Growth Tools",
    price: "$399/mo",
    features: "300 minutes included, Custom Dashboard, SMS/Email Reminders"
  },
  premium: {
    name: "Premium",
    tagline: "All-in-One Solution", 
    price: "$799/mo",
    features: "Unlimited minutes, CRM Integrations, Dedicated Account Manager"
  }
};

const TierSignupForm = ({ tier, open, onOpenChange }: TierSignupFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    website: "",
    email: "",
    phone: "",
    bookingSystem: ""
  });

  const selectedTier = tierInfo[tier];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.businessName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      console.log("Sending data to webhook:", { ...formData, selectedTier: tier });
      
      const response = await fetch("https://voxwarelabs.app.n8n.cloud/webhook/ed9807bc-aae1-4b23-bd25-8c48795e6855", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          selectedTier: tier,
          tierName: selectedTier.name,
          tierPrice: selectedTier.price,
          timestamp: new Date().toISOString(),
          source: `belio-ai-${tier}-signup`
        }),
      });

      console.log("Webhook response status:", response.status);
      
      if (!response.ok) {
        throw new Error(`Webhook request failed with status: ${response.status}`);
      }
      
      console.log("Webhook request successful");
      
      toast({
        title: `${selectedTier.name} Plan Selected!`,
        description: "We'll contact you within 24 hours to get you started.",
      });

      // Reset form and close modal
      setFormData({
        name: "",
        businessName: "",
        website: "",
        email: "",
        phone: "",
        bookingSystem: ""
      });
      onOpenChange(false);
    } catch (error) {
      console.error("Webhook error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Get Started with {selectedTier.name}
            </span>
          </DialogTitle>
          <DialogDescription className="space-y-2">
            <span className="text-lg font-medium text-foreground block">
              {selectedTier.tagline} • {selectedTier.price}
            </span>
            <span className="text-muted-foreground block">
              {selectedTier.features}
            </span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name *</Label>
              <Input
                id="businessName"
                type="text"
                value={formData.businessName}
                onChange={(e) => handleInputChange("businessName", e.target.value)}
                placeholder="Your Business Name"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Business Website</Label>
            <Input
              id="website"
              type="text"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
              placeholder="https://yourbusiness.com"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="john@business.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bookingSystem">Current Booking System</Label>
            <Select value={formData.bookingSystem} onValueChange={(value) => handleInputChange("bookingSystem", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your current booking system" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="google-calendar">Google Calendar</SelectItem>
                <SelectItem value="outlook">Outlook Calendar</SelectItem>
                <SelectItem value="calendly">Calendly</SelectItem>
                <SelectItem value="acuity">Acuity Scheduling</SelectItem>
                <SelectItem value="square">Square Appointments</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="none">No current system</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full" 
            disabled={isLoading}
            variant="cta"
          >
            {isLoading ? "Processing..." : `Get Started with ${selectedTier.name}`}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            We'll contact you within 24 hours to set up your account and get you started.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TierSignupForm;