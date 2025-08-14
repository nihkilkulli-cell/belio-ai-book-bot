import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/6d1de98b-908c-4b4d-ae12-26eadffa6557.png" 
                alt="Belio AI Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-2xl font-bold">Belio AI</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Never miss a booking again with our 24/7 AI receptionist that grows your business while you sleep.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#features" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#about" className="hover:text-background transition-colors">About</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <p className="text-background/80 mb-4">
              Ready to never miss a booking again?
            </p>
            <Button variant="secondary" size="lg" className="w-full">
              Start Free Trial
            </Button>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 Belio AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;