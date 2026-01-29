import { Lightbulb, Building, Warehouse, Factory, Store, Sun } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import hangarImage from "@/assets/hangar-grande-surface.jpg";

const solutions = [
  {
    icon: Lightbulb,
    title: "Éclairage LED Pro",
    label: "SOLUTION PREMIUM",
    description: "Optimisez vos entrepôts et bureaux à 0€ d'investissement grâce aux CEE.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop",
    link: "/service/led-pro"
  },
  {
    icon: Building,
    title: "Grandes Surfaces",
    label: "SOLUTION ÉCLAIRAGE",
    description: "Remplacement complet de l'éclairage pour supermarchés et centres commerciaux.",
    image: hangarImage,
    link: "/service/grandes-surfaces"
  },
  {
    icon: Warehouse,
    title: "Entrepôts & Logistique",
    label: "HAUTE PERFORMANCE",
    description: "Solutions d'éclairage haute performance pour espaces de stockage.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
    link: "/service/entrepots"
  },
  {
    icon: Factory,
    title: "Sites Industriels",
    label: "INDUSTRIEL",
    description: "Éclairage adapté aux environnements industriels exigeants.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    link: "/service/industriel"
  },
  {
    icon: Store,
    title: "Commerces & Bureaux",
    label: "TERTIAIRE",
    description: "Valorisez vos espaces commerciaux avec un éclairage professionnel.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    link: "/service/commerces"
  },
  {
    icon: Sun,
    title: "Panneaux Solaires",
    label: "ÉNERGIE VERTE",
    description: "Complétez vos économies avec une production d'énergie solaire.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
    link: "/service/solaire"
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold mb-3 uppercase tracking-widest text-sm">Nos Solutions</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Solutions pour{" "}
            <span className="text-primary">professionnels</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            De l'audit à l'installation, nous vous accompagnons sur tous vos projets d'économie d'énergie.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Link to={solution.link} key={index}>
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 bg-card h-full cursor-pointer hover:-translate-y-2">
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center shadow-lg">
                      <solution.icon className="h-7 w-7 text-secondary-foreground" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <p className="text-secondary font-semibold text-xs uppercase tracking-wider mb-1">
                    {solution.label}
                  </p>
                  <CardTitle className="text-foreground text-xl group-hover:text-secondary transition-colors">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
