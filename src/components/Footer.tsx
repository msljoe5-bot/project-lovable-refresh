import { Facebook, Instagram, Linkedin } from "lucide-react";
import logoGreenodia from "@/assets/logo-greenodia.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          <div className="lg:col-span-2">
            <img 
              src={logoGreenodia} 
              alt="Greenodia" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/70 text-sm max-w-sm mb-4">
              Expert en rénovation énergétique : Éclairage LED Pro, 
              Panneaux Solaires, Isolation. Solutions financées jusqu'à 100% pour pros et particuliers.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-background/10 px-2 py-1 rounded">RGE</span>
              <span className="text-xs bg-background/10 px-2 py-1 rounded">QualiPV</span>
              <span className="text-xs bg-background/10 px-2 py-1 rounded">QualiPAC</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Nos Solutions</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">Éclairage LED Pro</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Panneaux Photovoltaïques</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pompe à Chaleur</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Isolation Thermique</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">VMC Double Flux</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Informations</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">À Propos</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors">Comment ça marche</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Témoignages</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <span>📧</span>
                contact@greenodia.fr
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                06 95 41 30 64
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                France métropolitaine & DOM-TOM
              </li>
            </ul>
            
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © 2026 Greenodia. Tous droits réservés.
          </p>
          <div className="flex gap-4 text-sm text-background/50">
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
