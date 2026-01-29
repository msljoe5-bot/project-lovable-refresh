import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logoGreenodia from "@/assets/logo-greenodia.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 inline-block mb-6">
              <img 
                src={logoGreenodia} 
                alt="Greenodia" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 text-base max-w-sm mb-6 leading-relaxed">
              Expert en rénovation énergétique : Éclairage LED Pro, 
              Panneaux Solaires, Isolation. Solutions financées jusqu'à 100% pour pros et particuliers.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="text-sm bg-secondary/20 text-secondary font-semibold px-4 py-2 rounded-full">RGE</span>
              <span className="text-sm bg-secondary/20 text-secondary font-semibold px-4 py-2 rounded-full">QualiPV</span>
              <span className="text-sm bg-secondary/20 text-secondary font-semibold px-4 py-2 rounded-full">QualiPAC</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Nos Solutions</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><Link to="/service/led-pro" className="hover:text-secondary transition-colors">Éclairage LED Pro</Link></li>
              <li><Link to="/service/grandes-surfaces" className="hover:text-secondary transition-colors">Grandes Surfaces</Link></li>
              <li><Link to="/service/entrepots" className="hover:text-secondary transition-colors">Entrepôts & Logistique</Link></li>
              <li><Link to="/service/industriel" className="hover:text-secondary transition-colors">Sites Industriels</Link></li>
              <li><Link to="/service/solaire" className="hover:text-secondary transition-colors">Panneaux Solaires</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Informations</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-secondary transition-colors">À Propos</a></li>
              <li><a href="#process" className="hover:text-secondary transition-colors">Comment ça marche</a></li>
              <li><a href="#testimonials" className="hover:text-secondary transition-colors">Témoignages</a></li>
              <li><a href="#faq" className="hover:text-secondary transition-colors">FAQ</a></li>
              <li><Link to="/audit" className="hover:text-secondary transition-colors">Demander un audit</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-3">
                <span className="text-secondary">📧</span>
                contact@greenodia.fr
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">📞</span>
                06 95 41 30 64
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">📍</span>
                France métropolitaine & DOM-TOM
              </li>
            </ul>
            
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-11 h-11 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2026 Greenodia. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-secondary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-secondary transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
