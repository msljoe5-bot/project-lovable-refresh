const partners = [
  { name: "MAPRIMERENOV'", placeholder: true },
  { name: "CEE", placeholder: true },
  { name: "EFFY", placeholder: true },
  { name: "QUALIBAT", placeholder: true },
  { name: "RGE", placeholder: true },
];

const Partners = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground mb-8">
          🏆 Nos partenaires et certifications
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="px-6 py-3 bg-muted rounded-full text-foreground font-medium text-sm hover:bg-muted/80 transition-colors"
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
