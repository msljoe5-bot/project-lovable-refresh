import { FileCheck, Award, ClipboardCheck, CheckCircle, Users, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const reasons = [
  {
    icon: FileCheck,
    title: "Accompagnement Administratif",
    description: "On s'occupe de vos dossiers MaPrimeRénov' et CEE. Zéro paperasse pour vous.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
  },
  {
    icon: Award,
    title: "Installation Certifiée RGE",
    description: "Nos poseurs sont des experts locaux qualifiés et certifiés par l'État.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
  },
  {
    icon: ClipboardCheck,
    title: "Étude Gratuite",
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Notre Engagement</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Pourquoi nous{" "}
            <span className="text-primary">choisir ?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Un accompagnement humain à chaque étape de votre projet de rénovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 bg-card">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={reason.image} 
                  alt={reason.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                    <reason.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
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
              className="flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-sm border border-border"
            >
              <benefit.icon className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
