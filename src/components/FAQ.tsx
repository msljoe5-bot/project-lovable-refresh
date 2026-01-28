import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quelles sont les aides disponibles pour la rénovation énergétique ?",
    answer: "Plusieurs dispositifs existent : MaPrimeRénov' (jusqu'à 90% du montant des travaux selon revenus), les CEE (Certificats d'Économies d'Énergie), l'Éco-PTZ (prêt à taux zéro jusqu'à 50 000€), et la TVA à taux réduit (5,5%). Nous vous aidons à cumuler ces aides pour réduire au maximum votre reste à charge."
  },
  {
    question: "Pourquoi choisir un artisan RGE ?",
    answer: "La certification RGE (Reconnu Garant de l'Environnement) est obligatoire pour bénéficier des aides de l'État. Elle garantit que nos techniciens sont formés et qualifiés pour réaliser des travaux de qualité dans le respect des normes en vigueur."
  },
  {
    question: "Combien de temps durent les travaux ?",
    answer: "La durée varie selon le type de projet : 1-2 jours pour un relamping LED, 2-3 jours pour des panneaux solaires, 1-2 jours pour une pompe à chaleur, et 2-4 semaines pour une isolation extérieure. Nous vous communiquons un planning précis avant le démarrage."
  },
  {
    question: "Quelles économies puis-je espérer ?",
    answer: "Les économies dépendent de votre situation actuelle : jusqu'à 60% sur l'éclairage avec le LED, jusqu'à 70% sur le chauffage avec une pompe à chaleur, et jusqu'à 30% de réduction globale avec l'isolation. Nous réalisons une étude personnalisée pour estimer vos économies."
  },
  {
    question: "Proposez-vous des solutions pour les professionnels ?",
    answer: "Oui, nous sommes spécialisés dans les solutions pour professionnels : relamping LED pour grandes surfaces, entrepôts, bureaux et sites industriels. Le financement CEE permet souvent une prise en charge à 100% sans reste à charge pour l'entreprise."
  },
  {
    question: "Quelles garanties offrez-vous ?",
    answer: "Tous nos équipements sont garantis par le fabricant (5 à 25 ans selon les produits). En plus, nous offrons une garantie décennale sur tous nos travaux et une assurance responsabilité civile professionnelle."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Questions{" "}
            <span className="text-primary">fréquentes</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur la rénovation énergétique et les aides disponibles.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-muted-foreground">Vous avez d'autres questions ?</p>
          <a href="#contact" className="text-primary font-medium hover:underline">
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
