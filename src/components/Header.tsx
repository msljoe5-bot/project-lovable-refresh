import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoGreenodia from "@/assets/logo-greenodia.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={logoGreenodia} 
            alt="Greenodia" 
            className="h-14 md:h-16 lg:h-20 w-auto"
            style={{ minHeight: '50px' }}
          />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#solutions" className="text-foreground/80 hover:text-secondary transition-colors font-medium text-sm uppercase tracking-wide">
            Nos Solutions
          </a>
          <a href="#process" className="text-foreground/80 hover:text-secondary transition-colors font-medium text-sm uppercase tracking-wide">
            Comment ça marche
          </a>
          <a href="#testimonials" className="text-foreground/80 hover:text-secondary transition-colors font-medium text-sm uppercase tracking-wide">
            Témoignages
          </a>
          <a href="#faq" className="text-foreground/80 hover:text-secondary transition-colors font-medium text-sm uppercase tracking-wide">
            FAQ
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="tel:0695413064" className="hidden md:flex items-center gap-2 text-foreground font-semibold">
            <Phone className="h-4 w-4 text-secondary" />
            06 95 41 30 64
          </a>
          <Link to="/audit">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 px-6">
              Devis gratuit
            </Button>
          </Link>
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#solutions" 
              className="text-foreground/80 hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nos Solutions
            </a>
            <a 
              href="#process" 
              className="text-foreground/80 hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Comment ça marche
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground/80 hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Témoignages
            </a>
            <a 
              href="#faq" 
              className="text-foreground/80 hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a href="tel:0695413064" className="flex items-center gap-2 text-foreground font-semibold py-2">
              <Phone className="h-4 w-4 text-secondary" />
              06 95 41 30 64
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
