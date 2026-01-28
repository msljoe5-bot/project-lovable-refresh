import { Phone, ClipboardCheck, FileText, Wrench } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Prise de contact",
    description: "Appelez-nous ou remplissez le formulaire. Nous évaluons votre éligibilité aux aides (MaPrimeRénov', CEE) gratuitement et rapidement."
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
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Processus</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Comment ça{" "}
            <span className="text-primary">marche ?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Un accompagnement clé en main de la première prise de contact jusqu'à la fin des travaux.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Prêt à lancer votre projet de rénovation ?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <span>🏠</span>
            Estimer mes aides gratuitement
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
