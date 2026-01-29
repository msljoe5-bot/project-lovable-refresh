import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "33695413064";
  const message = encodeURIComponent("Bonjour, je souhaite obtenir plus d'informations sur vos solutions d'éclairage LED.");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip bubble */}
      {showTooltip && !isHovered && (
        <div className="animate-fade-in bg-white rounded-xl shadow-xl px-4 py-3 max-w-[200px] relative">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <X className="h-3 w-3 text-gray-600" />
          </button>
          <p className="text-sm text-gray-700 font-medium">
            Besoin d'un conseil ? 💬
          </p>
        </div>
      )}

      {/* WhatsApp button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-whatsapp-pulse"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white" fill="white" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
