
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
      {/* Fixed Mar des Teix Logo - Top Left */}
      <div className="fixed top-4 left-4 z-50">
        <img 
          src="https://i.imgur.com/uTmX35f.jpg" 
          alt="Mar des Teix" 
          className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-white/50"
        />
      </div>

      {/* Mobile Menu Button */}
      <Button
        className="fixed top-4 right-4 z-50 md:hidden bg-black/80 text-white hover:bg-black rounded-full p-3 shadow-lg backdrop-blur-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </Button>

      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-4 pl-20">
            <ul className="flex space-x-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 font-medium ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <i className={`${item.icon} text-sm`}></i>
                    <span className="text-sm">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-6 pt-20">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-3 text-lg font-medium ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
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
