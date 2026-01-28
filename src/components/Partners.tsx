import logoMaPrimeRenov from "@/assets/logo-maprimerenov.png";
import logoCee from "@/assets/logo-cee.png";
import logoQualibat from "@/assets/logo-qualibat.png";
import logoRge from "@/assets/logo-rge.png";
import logoEffy from "@/assets/logo-effy.png";
import logoEdf from "@/assets/logo-edf.png";

const partners = [
  { name: "MaPrimeRénov'", logo: logoMaPrimeRenov },
  { name: "CEE", logo: logoCee },
  { name: "Qualibat RGE", logo: logoQualibat },
  { name: "RGE", logo: logoRge },
  { name: "Effy", logo: logoEffy },
  { name: "EDF", logo: logoEdf },
];

const Partners = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground mb-8">
          🏆 Nos partenaires et certifications
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="h-12 md:h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-full w-auto object-contain max-w-[120px] md:max-w-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
