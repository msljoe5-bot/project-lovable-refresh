import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.webp";
import avatar3 from "@/assets/avatar-3.jpg";

const testimonials = [
  {
    quote: "Relamping complet de notre entrepôt de 3000m². Financement CEE à 100%, aucun reste à charge. L'éclairage est bien meilleur et on économise 60% sur l'électricité.",
    author: "Marc Lefebvre",
    role: "Directeur Logistique",
    location: "Marseille (13)",
    type: "LED Industriel",
    rating: 5,
    avatar: avatar2
  },
  {
    quote: "Remplacement de 450 luminaires dans notre hypermarché en une semaine seulement. Aucune perturbation pour nos clients. L'équipe Greenodia est très professionnelle.",
    author: "Camille Bernard",
    role: "Directrice de Magasin",
    location: "Bordeaux (33)",
    type: "Grande Surface",
    rating: 5,
    avatar: avatar1
  },
  {
    quote: "Notre usine de 8000m² est passée en LED haute performance. Réduction de 65% sur notre facture énergétique et un éclairage adapté à nos lignes de production.",
    author: "Laurent Moreau",
    role: "Directeur Technique",
    location: "Lyon (69)",
    type: "Site Industriel",
    rating: 5,
    avatar: null
  },
  {
    quote: "Isolation thermique complète de notre bâtiment industriel de 4500m². Plus de déperditions énergétiques, nos équipes travaillent dans de meilleures conditions.",
    author: "Philippe Durand",
    role: "Chef d'Entreprise",
    location: "Nantes (44)",
    type: "Isolation Industrielle",
    rating: 5,
    avatar: avatar3
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold mb-3 uppercase tracking-widest text-sm">Témoignages</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Ils nous font{" "}
            <span className="text-primary">confiance</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Directeurs techniques et chefs d'entreprise témoignent de leur expérience avec Greenodia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-2xl transition-all duration-500 border-border/50 hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Quote className="h-10 w-10 text-secondary/30 group-hover:text-secondary/50 transition-colors" />
                </div>
                
                <p className="text-foreground mb-8 text-lg leading-relaxed">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 ring-2 ring-secondary/20">
                      {testimonial.avatar ? (
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} className="object-cover" />
                      ) : null}
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-secondary font-medium">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">📍 {testimonial.location}</div>
                    </div>
                  </div>
                  <span className="text-xs bg-secondary/20 text-secondary font-semibold px-4 py-2 rounded-full">
                    {testimonial.type}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-8 py-4 rounded-full">
            <span className="text-2xl">🏭🏢🏪</span>
            <span className="font-bold text-foreground">500+ entreprises accompagnées</span>
            <span className="text-muted-foreground">dans toute la France</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;