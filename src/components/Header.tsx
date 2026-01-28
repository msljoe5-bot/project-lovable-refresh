import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoGreenodia from "@/assets/logo-greenodia.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src={logoGreenodia} 
            alt="Greenodia" 
            className="h-16 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#solutions" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Nos Solutions
          </a>
          <a href="#process" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Comment ça marche
          </a>
          <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Témoignages
          </a>
          <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            FAQ
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="tel:0695413064" className="hidden sm:flex items-center gap-2 text-foreground font-medium">
            <Phone className="h-4 w-4 text-primary" />
            06 95 41 30 64
          </a>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Devis gratuit
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
