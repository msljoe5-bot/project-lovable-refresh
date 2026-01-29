import logoMaPrimeRenov from "@/assets/logo-maprimerenov.png";
import logoCee from "@/assets/logo-cee.png";
import logoQualibat from "@/assets/logo-qualibat.png";
import logoRge from "@/assets/logo-rge.png";
import logoEffy from "@/assets/logo-effy.png";
import logoEdf from "@/assets/logo-edf.png";
import logoEni from "@/assets/logo-eni.png";
import logoOsram from "@/assets/logo-osram.png";
import logoPhilips from "@/assets/logo-philips.png";

const partners = [
  { name: "MaPrimeRénov'", logo: logoMaPrimeRenov },
  { name: "CEE", logo: logoCee },
  { name: "Qualibat RGE", logo: logoQualibat },
  { name: "RGE", logo: logoRge },
  { name: "Effy", logo: logoEffy },
  { name: "EDF", logo: logoEdf },
  { name: "ENI", logo: logoEni },
  { name: "OSRAM", logo: logoOsram },
  { name: "Philips", logo: logoPhilips },
];

const Partners = () => {
  // Duplicate partners for infinite scroll effect
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-background relative">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground mb-10 font-medium">
          🏆 Nos partenaires et certifications
        </p>
        
        {/* Marquee container with fade edges */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Marquee track */}
          <div className="flex animate-marquee">
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 mx-8 h-16 md:h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-full w-auto object-contain max-w-[140px] md:max-w-[180px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default Partners;
