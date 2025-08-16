import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/6d1de98b-908c-4b4d-ae12-26eadffa6557.png" alt="Belio AI Logo" className="h-6 w-auto brightness-0 invert" />
            <span className="text-lg font-bold">Belio AI</span>
          </div>
          
          <p className="text-background/60 text-sm">© 2025 Belio AI. All rights reserved.</p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;