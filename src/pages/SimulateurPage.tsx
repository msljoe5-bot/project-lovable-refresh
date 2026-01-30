import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, ArrowRight, Zap, Factory, Building, Warehouse, TrendingDown, Clock, Euro, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type Step = 1 | 2 | 3 | 4 | 5;

const buildingTypes = [
  { value: "entrepot", label: "Entrepôt / Logistique", icon: Warehouse },
  { value: "bureaux", label: "Bureaux / Tertiaire", icon: Building },
  { value: "industrie", label: "Site Industriel", icon: Factory },
];

const surfaceRanges = [
  { value: "small", label: "< 500 m²", savings: 3500 },
  { value: "medium", label: "500 - 2000 m²", savings: 12000 },
  { value: "large", label: "> 2000 m²", savings: 35000 },
];

const energyTypes = [
  { value: "electricite", label: "Électricité" },
  { value: "gaz", label: "Gaz" },
  { value: "fioul", label: "Fioul" },
];

const SimulateurPage = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  const [selections, setSelections] = useState({
    buildingType: "",
    surface: "",
    energy: "",
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectionChange = (key: string, value: string) => {
    setSelections(prev => ({ ...prev, [key]: value }));
    if (step < 4) {
      setTimeout(() => setStep((step + 1) as Step), 300);
    }
  };

  const getEstimatedSavings = () => {
    const surfaceData = surfaceRanges.find(s => s.value === selections.surface);
    return surfaceData?.savings || 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const surfaceLabel = surfaceRanges.find(s => s.value === selections.surface)?.label || "";
      const buildingLabel = buildingTypes.find(b => b.value === selections.buildingType)?.label || "";

      const { error } = await supabase.from("leads_greenodia").insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company,
        building_type: buildingLabel,
        surface: surfaceLabel,
        message: `Simulateur Pro - Énergie actuelle: ${selections.energy}`,
        source: "simulateur"
      });

      if (error) throw error;

      setShowResults(true);
      setStep(5);
      
      toast({
        title: "Simulation enregistrée !",
        description: "Un expert vous contactera sous 24h avec une étude personnalisée.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erreur lors de l'envoi",
        description: "Veuillez réessayer ou nous contacter directement.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <span className="text-secondary text-sm font-semibold uppercase tracking-widest">Étape 1/4</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-2">
                Quel type de bâtiment ?
              </h2>
            </div>
            <RadioGroup 
              value={selections.buildingType} 
              onValueChange={(value) => handleSelectionChange("buildingType", value)}
              className="grid gap-4"
            >
              {buildingTypes.map((type) => (
                <Label
                  key={type.value}
                  className={`flex items-center gap-4 p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                    selections.buildingType === type.value
                      ? "border-secondary bg-secondary/10"
                      : "border-border hover:border-secondary/50"
                  }`}
                >
                  <RadioGroupItem value={type.value} className="sr-only" />
                  <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <type.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <span className="text-lg font-semibold text-foreground">{type.label}</span>
                  {selections.buildingType === type.value && (
                    <CheckCircle className="h-6 w-6 text-secondary ml-auto" />
                  )}
                </Label>
              ))}
            </RadioGroup>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <span className="text-secondary text-sm font-semibold uppercase tracking-widest">Étape 2/4</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-2">
                Quelle surface ?
              </h2>
            </div>
            <RadioGroup 
              value={selections.surface} 
              onValueChange={(value) => handleSelectionChange("surface", value)}
              className="grid gap-4"
            >
              {surfaceRanges.map((range) => (
                <Label
                  key={range.value}
                  className={`flex items-center justify-between p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                    selections.surface === range.value
                      ? "border-secondary bg-secondary/10"
                      : "border-border hover:border-secondary/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <RadioGroupItem value={range.value} className="sr-only" />
                    <span className="text-lg font-semibold text-foreground">{range.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary font-bold">~{range.savings.toLocaleString()}€/an</span>
                    <span className="text-muted-foreground text-sm">d'économies</span>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <span className="text-secondary text-sm font-semibold uppercase tracking-widest">Étape 3/4</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-2">
                Énergie actuelle ?
              </h2>
            </div>
            <RadioGroup 
              value={selections.energy} 
              onValueChange={(value) => handleSelectionChange("energy", value)}
              className="grid gap-4"
            >
              {energyTypes.map((energy) => (
                <Label
                  key={energy.value}
                  className={`flex items-center gap-4 p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                    selections.energy === energy.value
                      ? "border-secondary bg-secondary/10"
                      : "border-border hover:border-secondary/50"
                  }`}
                >
                  <RadioGroupItem value={energy.value} className="sr-only" />
                  <span className="text-lg font-semibold text-foreground">{energy.label}</span>
                  {selections.energy === energy.value && (
                    <CheckCircle className="h-6 w-6 text-secondary ml-auto" />
                  )}
                </Label>
              ))}
            </RadioGroup>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <span className="text-secondary text-sm font-semibold uppercase tracking-widest">Étape 4/4</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-2">
                Vos coordonnées
              </h2>
              <p className="text-muted-foreground mt-2">Pour recevoir votre étude personnalisée</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jean"
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Dupont"
                    required
                    className="h-12"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Entreprise *</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nom de votre entreprise"
                  required
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email professionnel *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="contact@entreprise.fr"
                  required
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="06 12 34 56 78"
                  required
                  className="h-12"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-14 text-lg font-bold rounded-xl"
              >
                {isSubmitting ? "Envoi en cours..." : (
                  <>
                    Voir mes résultats
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-secondary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Votre simulation est prête !
              </h2>
              <p className="text-muted-foreground mt-2">
                Un expert Greenodia vous contactera sous 24h avec une étude détaillée.
              </p>
            </div>

            <Card className="border-2 border-secondary/30 bg-secondary/5">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-secondary text-4xl font-bold">
                  ~{getEstimatedSavings().toLocaleString()}€/an
                </CardTitle>
                <p className="text-muted-foreground">d'économies estimées</p>
              </CardHeader>
            </Card>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left font-semibold">Caractéristique</th>
                    <th className="p-4 text-center font-semibold">Éclairage Classique</th>
                    <th className="p-4 text-center font-semibold bg-secondary text-secondary-foreground">Solution LUMINA (EQ 127)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-card">
                    <td className="p-4 font-medium flex items-center gap-2">
                      <Zap className="h-4 w-4 text-muted-foreground" />
                      Consommation
                    </td>
                    <td className="p-4 text-center text-destructive font-medium">400W par point</td>
                    <td className="p-4 text-center text-secondary font-bold bg-secondary/5">120W - 150W</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="p-4 font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      Maintenance
                    </td>
                    <td className="p-4 text-center text-destructive font-medium">Remplacement tous les 2 ans</td>
                    <td className="p-4 text-center text-secondary font-bold bg-secondary/5">Zéro maintenance (70k h)</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="p-4 font-medium flex items-center gap-2">
                      <Euro className="h-4 w-4 text-muted-foreground" />
                      Coût d'installation
                    </td>
                    <td className="p-4 text-center text-destructive font-medium">Frais variables</td>
                    <td className="p-4 text-center text-secondary font-bold bg-secondary/5">0€ (Financement CEE)</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="p-4 font-medium flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-muted-foreground" />
                      Allumage
                    </td>
                    <td className="p-4 text-center text-destructive font-medium">Préchauffage requis</td>
                    <td className="p-4 text-center text-secondary font-bold bg-secondary/5">Instantané & Intelligent</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="p-4 font-medium flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-muted-foreground" />
                      Réduction facture
                    </td>
                    <td className="p-4 text-center text-muted-foreground">—</td>
                    <td className="p-4 text-center text-secondary font-bold bg-secondary/5">Jusqu'à -65%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => window.location.href = "/audit"}
                className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground h-14 text-lg font-bold rounded-xl"
              >
                <Zap className="mr-2 h-5 w-5" />
                Réserver mon audit gratuit
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setStep(1);
                  setShowResults(false);
                  setSelections({ buildingType: "", surface: "", energy: "" });
                  setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "" });
                }}
                className="flex-1 h-14 text-lg font-bold rounded-xl"
              >
                Nouvelle simulation
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {step < 5 && (
              <div className="text-center mb-10">
                <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">
                  Simulateur Pro
                </p>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Estimez vos économies d'énergie
                </h1>
                <p className="text-muted-foreground mt-4">
                  Répondez à quelques questions pour recevoir une estimation personnalisée
                </p>
              </div>
            )}

            {/* Progress bar */}
            {step < 5 && (
              <div className="mb-10">
                <div className="flex justify-between mb-2">
                  {[1, 2, 3, 4].map((s) => (
                    <div
                      key={s}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                        s <= step
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {s < step ? <CheckCircle className="h-5 w-5" /> : s}
                    </div>
                  ))}
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary transition-all duration-500"
                    style={{ width: `${((step - 1) / 3) * 100}%` }}
                  />
                </div>
              </div>
            )}

            <Card className="shadow-2xl border-border/50">
              <CardContent className="p-8 lg:p-10">
                {renderStep()}
              </CardContent>
            </Card>

            {step > 1 && step < 5 && (
              <Button
                variant="ghost"
                onClick={() => setStep((step - 1) as Step)}
                className="mt-6 mx-auto flex"
              >
                ← Retour
              </Button>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SimulateurPage;