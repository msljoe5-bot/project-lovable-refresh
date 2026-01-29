import { Phone, ClipboardCheck, FileText, Wrench, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Prise de contact",
    description: "Appelez-nous ou remplissez le formulaire. Nous évaluons votre éligibilité aux aides (MaPrimeRénov', CEE) gratuitement."
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Audit énergétique",
    description: "Un technicien certifié se déplace pour analyser votre bâtiment et dimensionner la solution optimale."
  },
  {
    number: "03",
    icon: FileText,
    title: "Dossier d'aides",
    description: "Nous montons votre dossier MaPrimeRénov' et CEE. Vous n'avez aucune démarche à faire, on gère tout."
  },
  {
    number: "04",
    icon: Wrench,
    title: "Installation RGE",
    description: "Nos équipes certifiées réalisent les travaux dans les règles de l'art avec une garantie décennale."
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold mb-3 uppercase tracking-widest text-sm">Processus</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Comment ça{" "}
            <span className="text-primary">marche ?</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Un accompagnement clé en main de la première prise de contact jusqu'à la fin des travaux.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-8 bg-card rounded-3xl border border-border hover:shadow-xl hover:border-secondary/50 transition-all duration-500 group hover:-translate-y-2"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-5xl font-extrabold text-secondary/20 group-hover:text-secondary/40 transition-colors">{step.number}</span>
              </div>
              <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <step.icon className="h-7 w-7 text-secondary group-hover:text-secondary-foreground transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">Prêt à lancer votre projet de rénovation ?</p>
          <Link to="/audit">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 px-8 py-7 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
              <Zap className="h-5 w-5" />
              Estimer mes aides gratuitement
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Process;
