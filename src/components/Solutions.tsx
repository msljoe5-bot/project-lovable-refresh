import { Lightbulb, Building, Warehouse, Factory, Store, Sun } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: Lightbulb,
    title: "Éclairage LED Pro",
    description: "Optimisez vos entrepôts et bureaux à 0€ d'investissement grâce aux CEE.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop"
  },
  {
    icon: Building,
    title: "Grandes Surfaces",
    description: "Remplacement complet de l'éclairage pour supermarchés et centres commerciaux.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
  },
  {
    icon: Warehouse,
    title: "Entrepôts & Logistique",
    description: "Solutions d'éclairage haute performance pour espaces de stockage.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop"
  },
  {
    icon: Factory,
    title: "Sites Industriels",
    description: "Éclairage adapté aux environnements industriels exigeants.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
  },
  {
    icon: Store,
    title: "Commerces & Bureaux",
    description: "Valorisez vos espaces commerciaux avec un éclairage professionnel.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
  },
  {
    icon: Sun,
    title: "Panneaux Solaires",
    description: "Complétez vos économies avec une production d'énergie solaire.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop"
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Nos Solutions</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Solutions pour{" "}
            <span className="text-primary">professionnels</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            De l'audit à l'installation, nous vous accompagnons sur tous vos projets d'économie d'énergie.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                    <solution.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {solution.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
