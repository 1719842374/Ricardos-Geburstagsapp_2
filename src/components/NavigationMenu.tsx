
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface NavigationMenuProps {
  activeSection: string;
}

const NavigationMenu = ({ activeSection }: NavigationMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "start", label: "Festival", icon: "fas fa-home" },
    { id: "event-details", label: "Event", icon: "fas fa-map-marker-alt" },
    { id: "hotel-tips", label: "Hotels", icon: "fas fa-bed" },
    { id: "rsvp", label: "RSVP", icon: "fas fa-check-circle" },
    { id: "playlist", label: "Tracks", icon: "fas fa-music" },
    { id: "photo-gallery", label: "Gallery", icon: "fas fa-images" },
    { id: "guestbook", label: "Guestbook", icon: "fas fa-book" },
    { id: "wishlist", label: "Vibes", icon: "fas fa-heart" },
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
        className="fixed top-4 right-4 z-50 md:hidden bg-festival-night/90 text-festival-sand hover:bg-festival-night rounded-full p-3 shadow-lg backdrop-blur-sm border border-festival-coral/30"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </Button>

      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-festival-night/95 backdrop-blur-md border-b border-festival-coral/20 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-4">
            {/* Mar des Teix Logo */}
            <div className="flex items-center mr-8">
              <img 
                src="https://i.imgur.com/uTmX35f.jpg" 
                alt="Mar des Teix" 
                className="w-12 h-12 rounded-full object-cover shadow-lg border-2 border-festival-coral/50"
              />
            </div>
            
            {/* Navigation Items zentriert */}
            <div className="flex-1 flex justify-center">
              <ul className="flex space-x-1">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 font-bebas text-sm tracking-wider ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-festival-sunset to-festival-coral text-white shadow-lg'
                          : 'text-festival-sand/80 hover:bg-festival-coral/20 hover:text-festival-sand'
                      }`}
                    >
                      <i className={`${item.icon} text-sm`}></i>
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
        <nav className="fixed inset-0 z-40 bg-festival-night/98 backdrop-blur-md md:hidden">
          <div className="absolute top-4 left-4">
            <img 
              src="https://i.imgur.com/uTmX35f.jpg" 
              alt="Mar des Teix" 
              className="w-12 h-12 rounded-full object-cover shadow-lg border-2 border-festival-coral/50"
            />
          </div>
          
          <div className="flex flex-col items-center justify-center h-full space-y-6 pt-20">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-8 py-4 rounded-xl transition-all duration-300 flex items-center space-x-3 text-lg font-bebas tracking-wider ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-festival-sunset to-festival-coral text-white shadow-lg'
                    : 'text-festival-sand/80 hover:bg-festival-coral/20 hover:text-festival-sand'
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
