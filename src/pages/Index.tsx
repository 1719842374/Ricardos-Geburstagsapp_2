
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LoginModal from "@/components/LoginModal";
import NavigationMenu from "@/components/NavigationMenu";
import HeroBanner from "@/components/HeroBanner";
import EventDetails from "@/components/EventDetails";
import HotelTips from "@/components/HotelTips";
import RSVPSection from "@/components/RSVPSection";
import PlaylistSection from "@/components/PlaylistSection";
import PhotoGallery from "@/components/PhotoGallery";
import Guestbook from "@/components/Guestbook";
import WishlistSection from "@/components/WishlistSection";
import RicardoAttributes from "@/components/RicardoAttributes";
import ChatSection from "@/components/ChatSection";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState("start");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['start', 'event-details', 'hotel-tips', 'rsvp', 'playlist', 'photo-gallery', 'guestbook', 'wishlist', 'ricardo-attributes', 'chat'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isLoggedIn) {
    return <LoginModal onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-mallorca-sea via-mallorca-ocean to-mallorca-pine relative overflow-hidden">
      {/* Mallorca Floating Elements */}
      <div className="floating-elements absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] left-[5%] text-4xl animate-float">🌴</div>
        <div className="absolute top-[15%] right-[10%] text-3xl animate-float" style={{animationDelay: '1s'}}>🏝️</div>
        <div className="absolute top-[25%] left-[15%] text-2xl animate-float" style={{animationDelay: '2s'}}>🌊</div>
        <div className="absolute top-[35%] right-[20%] text-3xl animate-float" style={{animationDelay: '0.5s'}}>🎵</div>
        <div className="absolute top-[45%] left-[8%] text-2xl animate-float" style={{animationDelay: '1.5s'}}>☀️</div>
        <div className="absolute top-[55%] right-[5%] text-4xl animate-float" style={{animationDelay: '2.5s'}}>🌅</div>
        <div className="absolute top-[65%] left-[12%] text-2xl animate-float" style={{animationDelay: '0.8s'}}>🍸</div>
        <div className="absolute top-[75%] right-[15%] text-3xl animate-float" style={{animationDelay: '3s'}}>🏖️</div>
        <div className="absolute top-[85%] left-[20%] text-2xl animate-float" style={{animationDelay: '1.2s'}}>⭐</div>
      </div>

      <NavigationMenu activeSection={activeSection} />
      
      <main className="relative z-10">
        <HeroBanner />
        
        <section id="start" className="py-20 px-4 bg-gradient-to-b from-mallorca-sea/80 to-mallorca-ocean/60">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-mallorca-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-5xl font-dancing text-mallorca-sea mb-4">
                  Wir freuen uns auf Euch! 🥂
                </CardTitle>
                <CardDescription className="text-xl text-mallorca-sea font-poppins">
                  <i className="fas fa-glass-cheers text-mallorca-palm mr-2"></i>
                  Kommt und feiert mit uns einen unvergesslichen Abend auf Mallorca!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-3xl font-poppins text-mallorca-ocean italic font-semibold">
                  "Viva la Vida - Feiert mit uns in Ricardos Geburtstag hinein!"
                </p>
                
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src="https://player.vimeo.com/video/1082618091?h=a35bbd7944&badge=0&autopause=0" 
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture" 
                    title="Party Invitation" 
                    allowFullScreen
                  ></iframe>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-mallorca-palm to-mallorca-pine hover:from-mallorca-pine hover:to-mallorca-palm text-white font-poppins font-bold text-lg py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg tracking-wider"
                  onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <i className="fas fa-ticket-alt mr-2"></i>
                  JETZT ZUSAGEN
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <EventDetails />
        <HotelTips />
        <RSVPSection />
        <PlaylistSection />
        <PhotoGallery />
        <Guestbook />
        <WishlistSection />
        <RicardoAttributes />
        <ChatSection />
      </main>

      <footer className="bg-mallorca-sea/90 text-mallorca-white py-8 text-center relative z-10 border-t border-mallorca-palm/30">
        <p className="font-poppins">© 2025 Mallorca Party. Viva la Vida! 🌴</p>
        <p className="font-poppins text-sm mt-2">
          WhatsApp: <strong>+49 1511 7251511</strong> | E-Mail: <strong>barbara.diaz@gmx.de</strong>
        </p>
      </footer>
    </div>
  );
};

export default Index;
