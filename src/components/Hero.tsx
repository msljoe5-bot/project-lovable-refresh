import { ArrowRight, Building2, CheckCircle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                RGE
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                QualiPV
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                QualiPAC
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Qualibat
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Spécialiste en{" "}
              <span className="text-primary">éclairage LED Pro</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Remplacement de vos LED intérieurs pour{" "}
              <strong className="text-foreground">grandes surfaces</strong>,{" "}
              entrepôts et bâtiments professionnels.{" "}
              <strong className="text-primary">100% pris en charge</strong> grâce aux CEE 
              (Certificats d'Économie d'Énergie).
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Building2 className="h-5 w-5" />
                Estimer mes aides (Gratuit)
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Nos solutions pro
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                Certifié RGE
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                Garantie 5-10 ans
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-5 w-5 text-primary" />
                Entreprise française
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=800&h=600&fit=crop"
                alt="Installation LED professionnelle"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="grid grid-cols-3 gap-4 text-white">
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">-60%</div>
                    <div className="text-xs lg:text-sm opacity-80">sur vos factures</div>
                  </div>
                  <div className="text-center border-x border-white/20">
                    <div className="text-2xl lg:text-3xl font-bold">500+</div>
                    <div className="text-xs lg:text-sm opacity-80">projets réalisés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">100%</div>
                    <div className="text-xs lg:text-sm opacity-80">pris en charge</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              🇫🇷 Fabriqué en France
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
