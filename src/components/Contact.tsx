import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Demandez votre{" "}
            <span className="text-primary">devis gratuit</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Installation 100% financée par les CEE. Réponse sous 24h.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <Card className="bg-card">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Prénom *</label>
                    <Input placeholder="Votre prénom" className="bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Nom *</label>
                    <Input placeholder="Votre nom" className="bg-background" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email professionnel *</label>
                  <Input type="email" placeholder="email@entreprise.fr" className="bg-background" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Téléphone</label>
                  <Input type="tel" placeholder="06 00 00 00 00" className="bg-background" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Entreprise *</label>
                  <Input placeholder="Nom de votre entreprise" className="bg-background" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Type de bâtiment</label>
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Sélectionnez..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entrepot">Entrepôt / Logistique</SelectItem>
                      <SelectItem value="grande-surface">Grande surface</SelectItem>
                      <SelectItem value="bureau">Bureaux</SelectItem>
                      <SelectItem value="industriel">Site industriel</SelectItem>
                      <SelectItem value="commerce">Commerce</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Surface approximative (m²)</label>
                  <Input placeholder="Ex: 5000" className="bg-background" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Décrivez votre projet..." 
                    className="bg-background min-h-[100px]"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Envoyer ma demande
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Pourquoi nous contacter ?</h3>
              <ul className="space-y-4">
                {[
                  "Audit gratuit et sans engagement",
                  "Installation 100% financée par les CEE",
                  "Réponse sous 24h garantie",
                  "Économies jusqu'à 60% sur vos factures",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <div>
                    <div className="text-sm opacity-80">Email</div>
                    <div className="font-medium">contact@greenodia.fr</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="text-sm opacity-80">Téléphone</div>
                    <div className="font-medium">06 95 41 30 64</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <div>
                    <div className="text-sm opacity-80">Zone d'intervention</div>
                    <div className="font-medium">France métropolitaine & DOM-TOM</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
              <span className="text-2xl">✅</span>
              <div>
                <div className="font-bold text-foreground">Certifié RGE</div>
                <div className="text-sm text-muted-foreground">Éligible à toutes les aides de l'État</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
