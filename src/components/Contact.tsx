import { Mail, Phone, MapPin, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold mb-3 uppercase tracking-widest text-sm">Contact</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Demandez votre{" "}
            <span className="text-secondary">devis gratuit</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Installation 100% financée par les CEE. Réponse sous 24h.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-card border-border/50 shadow-xl">
            <CardContent className="p-8 lg:p-10">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Prénom *</label>
                    <Input placeholder="Votre prénom" className="bg-background h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Nom *</label>
                    <Input placeholder="Votre nom" className="bg-background h-12" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Email professionnel *</label>
                  <Input type="email" placeholder="email@entreprise.fr" className="bg-background h-12" />
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Téléphone</label>
                  <Input type="tel" placeholder="06 00 00 00 00" className="bg-background h-12" />
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Entreprise *</label>
                  <Input placeholder="Nom de votre entreprise" className="bg-background h-12" />
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Type de bâtiment</label>
                  <Select>
                    <SelectTrigger className="bg-background h-12">
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
                  <label className="text-sm font-semibold text-foreground mb-2 block">Surface approximative (m²)</label>
                  <Input placeholder="Ex: 5000" className="bg-background h-12" />
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Décrivez votre projet..." 
                    className="bg-background min-h-[120px] resize-none"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-14 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <Zap className="h-5 w-5 mr-2" />
                  Envoyer ma demande
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Pourquoi nous contacter ?</h3>
              <ul className="space-y-4">
                {[
                  "Audit gratuit et sans engagement",
                  "Installation 100% financée par les CEE",
                  "Réponse sous 24h garantie",
                  "Économies jusqu'à 60% sur vos factures",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="bg-primary text-primary-foreground overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <h4 className="text-xl font-bold">Contactez-nous directement</h4>
                <a href="mailto:contact@greenodia.fr" className="flex items-center gap-4 hover:text-secondary transition-colors">
                  <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Email</div>
                    <div className="font-semibold">contact@greenodia.fr</div>
                  </div>
                </a>
                
                <a href="tel:0695413064" className="flex items-center gap-4 hover:text-secondary transition-colors">
                  <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Téléphone</div>
                    <div className="font-semibold">06 95 41 30 64</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Zone d'intervention</div>
                    <div className="font-semibold">France métropolitaine & DOM-TOM</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex items-center gap-4 p-6 bg-secondary/10 rounded-2xl border border-secondary/30">
              <span className="text-3xl">✅</span>
              <div>
                <div className="font-bold text-foreground text-lg">Certifié RGE</div>
                <div className="text-muted-foreground">Éligible à toutes les aides de l'État</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
