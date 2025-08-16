import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface TrialSignUpFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TrialSignUpForm = ({ open, onOpenChange }: TrialSignUpFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessWebsite: "",
    email: "",
    phoneNumber: "",
    bookingSystem: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (!formData.name || !formData.businessName || !formData.email || !formData.phoneNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Trial Started!",
        description: "Welcome to Belio AI! Check your email for next steps.",
      });
      
      onOpenChange(false);
      // Reset form
      setFormData({
        name: "",
        businessName: "",
        businessWebsite: "",
        email: "",
        phoneNumber: "",
        bookingSystem: ""
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gradient-card border-border/50 shadow-elegant">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Start Your Free Trial
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Get started with Belio AI in just a few minutes. No payment info required.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessName" className="text-sm font-medium">
                Business Name *
              </Label>
              <Input
                id="businessName"
                value={formData.businessName}
                onChange={(e) => handleInputChange("businessName", e.target.value)}
                placeholder="Your business name"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessWebsite" className="text-sm font-medium">
              Business Website
            </Label>
            <Input
              id="businessWebsite"
              type="url"
              value={formData.businessWebsite}
              onChange={(e) => handleInputChange("businessWebsite", e.target.value)}
              placeholder="https://yourbusiness.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="you@business.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm font-medium">
                Phone Number *
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bookingSystem" className="text-sm font-medium">
              Current Booking System
            </Label>
            <Select value={formData.bookingSystem} onValueChange={(value) => handleInputChange("bookingSystem", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your booking system" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="google-calendar">Google Calendar</SelectItem>
                <SelectItem value="outlook">Outlook</SelectItem>
                <SelectItem value="calendly">Calendly</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 mt-6">
            <p className="text-sm text-muted-foreground">
              💡 <strong>No payment info required.</strong> You'll only provide billing details if you choose to continue after your trial.
            </p>
          </div>

          <Button
            type="submit"
            variant="cta"
            size="lg"
            className="w-full mt-6"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Starting Your Trial...
              </>
            ) : (
              "Start My 14-Day Free Trial"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};