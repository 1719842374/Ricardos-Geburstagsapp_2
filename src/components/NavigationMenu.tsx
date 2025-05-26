
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
    { id: "rsvp", label: "RSVP", icon: "fas fa-check-circle" },
    { id: "playlist", label: "Playlist", icon: "fas fa-music" },
    { id: "photo-gallery", label: "Fotogalerie", icon: "fas fa-images" },
    { id: "guestbook", label: "Gästebuch", icon: "fas fa-book" },
    { id: "wishlist", label: "Wunschliste", icon: "fas fa-gift" },
    { id: "chat", label: "Chat", icon: "fas fa-comments" },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        className="fixed top-4 right-4 z-50 md:hidden bg-white/90 text-party-navy hover:bg-party-navy hover:text-white rounded-full p-3 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </Button>

      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-lg hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.imgur.com/uTmX35f.jpg" 
                alt="Logo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="font-dancing text-xl text-party-navy leading-tight">Viva la Vida</span>
                <span className="text-xs text-party-slate">Finca Mar d'es Teix</span>
              </div>
            </div>
            
            <ul className="flex space-x-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-party-orange to-party-red text-white shadow-lg'
                        : 'text-gray-700 hover:bg-party-navy/10 hover:text-party-navy'
                    }`}
                  >
                    <i className={`${item.icon} text-sm`}></i>
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-3 text-lg ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-party-orange to-party-red text-white shadow-lg'
                    : 'text-gray-700 hover:bg-party-navy/10 hover:text-party-navy'
                }`}
              >
                <i className={`${item.icon} text-xl`}></i>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

export default NavigationMenu;
