import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/6d1de98b-908c-4b4d-ae12-26eadffa6557.png" 
              alt="Belio AI Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-semibold">Belio AI</span>
          </div>
          
          <Button variant="default">
            Start Trial
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;