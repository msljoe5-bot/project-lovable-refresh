import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Relamping complet de notre entrepôt de 3000m². Financement CEE à 100%, aucun reste à charge. L'éclairage est bien meilleur et on économise 60% sur l'électricité.",
    author: "Philippe Martin",
    location: "Marseille (13)",
    type: "LED Industriel",
    rating: 5,
    initials: "PM"
  },
  {
    quote: "Des panneaux solaires posés en 2 jours, équipe professionnelle et très à l'écoute. Je produis maintenant 70% de ma consommation électrique !",
    author: "Marie Leclerc",
    location: "Bordeaux (33)",
    type: "Photovoltaïque 6kWc",
    rating: 5,
    initials: "ML"
  },
  {
    quote: "Installation d'une pompe à chaleur impeccable. L'équipe a géré toutes les démarches administratives pour MaPrimeRénov'. Ma facture de chauffage a été divisée par 3 !",
    author: "Jean-Pierre Durand",
    location: "Lyon (69)",
    type: "PAC Air-Eau",
    rating: 5,
    initials: "JD"
  },
  {
    quote: "Isolation extérieure de ma maison des années 70. Plus de problèmes d'humidité et on a gagné 3°C l'hiver sans augmenter le chauffage. Merci Greenodia !",
    author: "Sophie Dubois",
    location: "Nantes (44)",
    type: "ITE",
    rating: 5,
    initials: "SD"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Témoignages</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Ils nous font{" "}
            <span className="text-primary">confiance</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Particuliers et professionnels témoignent de leur expérience avec Greenodia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 bg-primary">
                      <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">📍 {testimonial.location}</div>
                    </div>
                  </div>
                  <span className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                    {testimonial.type}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <span className="text-xl">🤝😊👍🏻</span>
            <span className="font-medium text-foreground">500+ clients satisfaits</span>
            <span className="text-muted-foreground">dans toute la France</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
