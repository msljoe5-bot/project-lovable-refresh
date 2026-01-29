import { TrendingDown, Shield, Clock, Zap } from "lucide-react";

const stats = [
  { value: "500+", label: "Installations réalisées", icon: Zap },
  { value: "100%", label: "Financement possible", icon: Shield },
  { value: "-60%", label: "Sur la facture énergie", icon: TrendingDown },
  { value: "10 ans", label: "Garantie fabricant", icon: Clock },
];

const Stats = () => {
  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="h-7 w-7 text-secondary" />
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-primary-foreground/80 font-medium">
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
