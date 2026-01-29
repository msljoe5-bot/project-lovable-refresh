import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Shield, Clock, Phone, Mail, MapPin, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const activityTypes = [
  "Grande distribution / Supermarché",
  "Entrepôt / Logistique",
  "Site industriel / Usine",
  "Centre commercial",
  "Bureau / Tertiaire",
  "Parking / Extérieur",
  "Autre"
];

const AuditPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    surface: "",
    activityType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, activityType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Demande envoyée avec succès !",
        description: "Un expert Greenodia vous recontactera sous 24h.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        surface: "",
        activityType: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-3xl shadow-2xl p-8 lg:p-10 border border-border">
                <div className="mb-8">
                  <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">
                    Audit gratuit
                  </p>
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Réservez votre audit énergétique
                  </h1>
                  <p className="text-muted-foreground mt-4">
                    <span className="inline-flex items-center gap-2 text-secondary font-medium">
                      <Shield className="h-4 w-4" />
                      Audit sans engagement réalisé par nos experts certifiés
                    </span>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        required
                        className="h-12 bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground font-medium">
                        Entreprise *
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nom de votre entreprise"
                        required
                        className="h-12 bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email professionnel *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contact@entreprise.fr"
                        required
                        className="h-12 bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-medium">
                        Téléphone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="06 12 34 56 78"
                        required
                        className="h-12 bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="surface" className="text-foreground font-medium">
                        Surface en m² *
                      </Label>
                      <Input
                        id="surface"
                        name="surface"
                        value={formData.surface}
                        onChange={handleChange}
                        placeholder="ex: 5000"
                        required
                        className="h-12 bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="activityType" className="text-foreground font-medium">
                        Type d'activité *
                      </Label>
                      <Select onValueChange={handleSelectChange} value={formData.activityType}>
                        <SelectTrigger className="h-12 bg-background border-border">
                          <SelectValue placeholder="Sélectionnez..." />
                        </SelectTrigger>
                        <SelectContent>
                          {activityTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message (optionnel)
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet ou posez vos questions..."
                      rows={4}
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-14 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Zap className="h-5 w-5 mr-2" />
                        Réserver mon audit gratuit
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  Un expert Greenodia vous recontacte sous 24h pour analyser vos plans et optimiser vos économies.
                </p>
              </div>
            </div>

            {/* Right: Info */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">
                  Pourquoi nous choisir ?
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Votre transition LED{" "}
                  <span className="text-secondary">100% prise en charge</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Grâce aux Certificats d'Économie d'Énergie (CEE), bénéficiez d'un remplacement complet 
                  de votre éclairage sans aucun investissement initial.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: "Audit gratuit et sans engagement" },
                  { icon: Clock, text: "Réponse sous 24h garantie" },
                  { icon: Shield, text: "Experts certifiés RGE" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Nous contacter directement</h3>
                <div className="space-y-4">
                  <a href="tel:0695413064" className="flex items-center gap-3 hover:text-secondary transition-colors">
                    <Phone className="h-5 w-5 text-secondary" />
                    <span className="font-medium">06 95 41 30 64</span>
                  </a>
                  <a href="mailto:contact@greenodia.fr" className="flex items-center gap-3 hover:text-secondary transition-colors">
                    <Mail className="h-5 w-5 text-secondary" />
                    <span className="font-medium">contact@greenodia.fr</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <span>Paris, Île-de-France</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AuditPage;
