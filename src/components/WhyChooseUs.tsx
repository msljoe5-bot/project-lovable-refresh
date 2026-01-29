import { FileCheck, Award, ClipboardCheck, CheckCircle, Users, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const reasons = [
  {
    icon: FileCheck,
    title: "Accompagnement Administratif",
    label: "ZÉRO PAPERASSE",
    description: "On s'occupe de vos dossiers MaPrimeRénov' et CEE. Zéro paperasse pour vous.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
  },
  {
    icon: Award,
    title: "Installation Certifiée RGE",
    label: "EXPERTISE",
    description: "Nos poseurs sont des experts locaux qualifiés et certifiés par l'État.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
  },
  {
    icon: ClipboardCheck,
    title: "Étude Gratuite",
    label: "SANS ENGAGEMENT",
    description: "Un audit énergétique complet avant chaque projet, sans engagement.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
  },
];

const benefits = [
  { icon: CheckCircle, text: "Garantie décennale" },
  { icon: Users, text: "Interlocuteur unique" },
  { icon: Clock, text: "Délais respectés" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold mb-3 uppercase tracking-widest text-sm">Notre Engagement</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Pourquoi nous{" "}
            <span className="text-primary">choisir ?</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Un accompagnement humain à chaque étape de votre projet de rénovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-card border-border/50 hover:-translate-y-2">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={reason.image} 
                  alt={reason.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <reason.icon className="h-7 w-7 text-secondary-foreground" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <p className="text-secondary font-semibold text-xs uppercase tracking-wider mb-1">
                  {reason.label}
                </p>
                <CardTitle className="text-foreground text-xl">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 px-8 py-4 bg-muted/50 rounded-full border border-border hover:border-secondary hover:bg-secondary/10 transition-all duration-300"
            >
              <benefit.icon className="h-5 w-5 text-secondary" />
              <span className="text-foreground font-semibold">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
