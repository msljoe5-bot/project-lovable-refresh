import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, Clock, Shield, TrendingDown, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const comparisonData = [
  {
    feature: "Consommation",
    classic: "400W par point lumineux",
    lumina: "120W - 150W"
  },
  {
    feature: "Maintenance",
    classic: "Remplacement tous les 2 ans",
    lumina: "Zéro maintenance (70 000h)"
  },
  {
    feature: "Coût d'installation",
    classic: "Frais variables",
    lumina: "0€ (Financement CEE)"
  },
  {
    feature: "Allumage",
    classic: "Préchauffage requis",
    lumina: "Instantané & Intelligent"
  },
  {
    feature: "Durée de vie",
    classic: "8 000 - 15 000 heures",
    lumina: "70 000+ heures"
  },
  {
    feature: "Qualité lumineuse",
    classic: "Dégradation rapide",
    lumina: "IRC >90, lumière constante"
  },
];

const benefits = [
  {
    icon: TrendingDown,
    title: "Réduction de 65% de la facture",
    description: "Économisez immédiatement sur vos coûts énergétiques avec notre solution LED haute performance."
  },
  {
    icon: Shield,
    title: "Financement CEE 100%",
    description: "Aucun investissement initial grâce aux Certificats d'Économie d'Énergie."
  },
  {
    icon: Clock,
    title: "Installation rapide",
    description: "Nos équipes certifiées interviennent sans interrompre votre activité."
  },
];

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              Solution Éclairage Professionnel
            </p>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground mb-6">
              LED EQ 127 pour{" "}
              <span className="text-secondary">Grandes Surfaces</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Transformez l'éclairage de votre espace commercial avec notre solution LED haute performance, 
              financée à 100% par les CEE.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/audit">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 px-8 py-7 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all">
                  <Zap className="h-5 w-5" />
                  Réserver mon audit gratuit
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:0695413064">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-7 text-lg font-semibold rounded-xl transition-all">
                  <Phone className="h-5 w-5 mr-2" />
                  Appeler maintenant
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">
              Comparatif
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Pourquoi passer au <span className="text-secondary">LED EQ 127</span> ?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-xl">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-5 text-left font-semibold">Caractéristique</th>
                  <th className="px-6 py-5 text-center font-semibold">Éclairage Classique</th>
                  <th className="px-6 py-5 text-center font-semibold bg-secondary text-secondary-foreground">
                    Solution LUMINA (EQ 127)
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-muted/30" : "bg-card"}>
                    <td className="px-6 py-5 font-medium text-foreground">{row.feature}</td>
                    <td className="px-6 py-5 text-center text-muted-foreground">{row.classic}</td>
                    <td className="px-6 py-5 text-center font-semibold text-secondary bg-secondary/10">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary" />
                        {row.lumina}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Act Now Section */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">
              Agissez maintenant
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Pourquoi <span className="text-secondary">agir maintenant</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-primary-foreground/15 transition-colors">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-primary-foreground/80">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/audit">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 px-10 py-7 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all">
                <Zap className="h-5 w-5" />
                Réserver mon audit énergétique gratuit
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicePage;
