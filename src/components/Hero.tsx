import { ArrowRight, Building2, CheckCircle, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-background py-20 lg:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div className="space-y-8 text-left">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-4 py-1.5 bg-secondary/20 text-secondary border border-secondary/30 text-sm font-semibold rounded-full uppercase tracking-wide">
                RGE Certifié
              </span>
              <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 text-sm font-semibold rounded-full uppercase tracking-wide">
                Qualibat
              </span>
            </div>
            
            <div className="space-y-4">
              <p className="text-secondary font-semibold uppercase tracking-widest text-sm">
                Solution Éclairage Professionnel
              </p>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-[1.1]">
                LED Pro{" "}
                <span className="text-secondary">100% financé</span>
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed">
              Remplacement de vos éclairages LED pour{" "}
              <strong className="text-foreground">grandes surfaces</strong> et entrepôts.{" "}
              <strong className="text-secondary">Zéro investissement</strong> grâce aux CEE.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/audit">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-3 text-lg px-8 py-7 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Zap className="h-5 w-5" />
                  Réserver mon audit gratuit
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="#solutions">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-7 rounded-xl font-semibold transition-all duration-300"
                >
                  Nos solutions pro
                </Button>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle className="h-6 w-6 text-secondary" />
                <span className="font-medium">Certifié RGE</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle className="h-6 w-6 text-secondary" />
                <span className="font-medium">Garantie 5-10 ans</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Award className="h-6 w-6 text-secondary" />
                <span className="font-medium">Entreprise française</span>
              </div>
            </div>
          </div>
          
          {/* Right: Image with stats overlay */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=800&h=600&fit=crop"
                alt="Installation LED professionnelle"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-transparent p-8">
                <div className="grid grid-cols-3 gap-6 text-white">
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-extrabold text-secondary">-60%</div>
                    <div className="text-sm opacity-90">sur vos factures</div>
                  </div>
                  <div className="text-center border-x border-white/20">
                    <div className="text-3xl lg:text-4xl font-extrabold">500+</div>
                    <div className="text-sm opacity-90">projets réalisés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-extrabold text-secondary">100%</div>
                    <div className="text-sm opacity-90">pris en charge</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-5 py-3 rounded-full text-sm font-bold shadow-xl flex items-center gap-2">
              🇫🇷 Fabriqué en France
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
