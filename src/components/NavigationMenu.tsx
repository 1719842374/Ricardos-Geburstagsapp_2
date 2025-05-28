
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface NavigationMenuProps {
  activeSection: string;
}

const NavigationMenu = ({ activeSection }: NavigationMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "start", label: "Start", icon: "fas fa-home" },
    { id: "event-details", label: "Event", icon: "fas fa-map-marker-alt" },
    { id: "hotel-tips", label: "Hotels", icon: "fas fa-bed" },
    { id: "rsvp", label: "Kontakt", icon: "fas fa-address-book" },
    { id: "playlist", label: "Musik", icon: "fas fa-music" },
    { id: "photo-gallery", label: "Fotos", icon: "fas fa-images" },
    { id: "guestbook", label: "Impressionen", icon: "fas fa-comments" },
    { id: "wishlist", label: "Geschenke", icon: "fas fa-gift" },
    { id: "ricardo-attributes", label: "Attribute", icon: "fas fa-heart" },
    { id: "morgen-danach", label: "Morgen Danach", icon: "fas fa-sun" },
    { id: "chat", label: "Chat", icon: "fas fa-comments" },
  ];

  const scrollToSection = (sectionId: string) => {
    // Handle special case for "Der Morgen Danach" which is part of wishlist section
    if (sectionId === "morgen-danach") {
      document.getElementById('wishlist')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        className="fixed top-4 right-4 z-50 md:hidden bg-mallorca-sea/90 text-mallorca-white hover:bg-mallorca-sea rounded-full p-3 shadow-lg backdrop-blur-sm border border-mallorca-palm/30"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </Button>

      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-mallorca-sea/95 backdrop-blur-md border-b border-mallorca-palm/20 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-4">
            {/* Mar des Teix Logo oben links */}
            <div className="flex items-center mr-8">
              <img 
                src="https://i.imgur.com/uTmX35f.jpg" 
                alt="Mar des Teix" 
                className="w-12 h-12 rounded-full object-cover shadow-lg border-2 border-mallorca-palm/50"
              />
            </div>
            
            {/* Navigation Items zentriert */}
            <div className="flex-1 flex justify-center">
              <ul className="flex space-x-1 flex-wrap">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 font-poppins text-xs tracking-wider ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-mallorca-pine to-mallorca-palm text-white shadow-lg'
                          : 'text-mallorca-white/80 hover:bg-mallorca-palm/20 hover:text-mallorca-white'
                      }`}
                    >
                      <i className={`${item.icon} text-xs`}></i>
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="fixed inset-0 z-40 bg-mallorca-sea/98 backdrop-blur-md md:hidden">
          <div className="absolute top-4 left-4">
            <img 
              src="https://i.imgur.com/uTmX35f.jpg" 
              alt="Mar des Teix" 
              className="w-12 h-12 rounded-full object-cover shadow-lg border-2 border-mallorca-palm/50"
            />
          </div>
          
          <div className="flex flex-col items-center justify-center h-full space-y-6 pt-20">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-8 py-4 rounded-xl transition-all duration-300 flex items-center space-x-3 text-lg font-poppins tracking-wider ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-mallorca-pine to-mallorca-palm text-white shadow-lg'
                    : 'text-mallorca-white/80 hover:bg-mallorca-palm/20 hover:text-mallorca-white'
                }`}
              >
                <i className={`${item.icon} text-xl`}></i>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

export default NavigationMenu;
