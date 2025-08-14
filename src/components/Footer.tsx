const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/6d1de98b-908c-4b4d-ae12-26eadffa6557.png" 
              alt="Belio AI Logo" 
              className="h-6 w-auto"
            />
            <span className="font-semibold">Belio AI</span>
          </div>
          
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-8 border-t text-sm text-muted-foreground">
          © 2024 Belio AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;