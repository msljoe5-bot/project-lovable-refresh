const stats = [
  { value: "500+", label: "Installations réalisées", color: "text-primary" },
  { value: "100%", label: "Financement possible", color: "text-primary" },
  { value: "-60%", label: "Sur la facture énergie", color: "text-primary" },
  { value: "10 ans", label: "Garantie fabricant", color: "text-primary" },
];

const Stats = () => {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl lg:text-4xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
