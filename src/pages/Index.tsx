
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
import RicardoAttributesSection from "@/components/RicardoAttributesSection";
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
      
      {/* Hero Section with Finca Background and Ricardos 60s Geburtstagsfeier over countdown */}
      <main className="relative z-10">
        <section 
          className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('https://i.imgur.com/uTmX35f.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            {/* Ricardos 60s Geburtstagsfeier text */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-dancing text-white mb-8 drop-shadow-2xl">
              Ricardos 60s Geburtstagsfeier
            </h1>
            
            {/* VIVA LA VIDA */}
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-wider drop-shadow-2xl">
              VIVA LA VIDA
            </h2>
            
            {/* Date */}
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-8 tracking-wider">
              23. AUGUST 2025
            </div>
            
            {/* Countdown Timer */}
            <div className="bg-black/60 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-4xl md:text-6xl font-bold text-white">87</div>
                  <div className="text-green-400 font-semibold">TAGE</div>
                </div>
                <div>
                  <div className="text-4xl md:text-6xl font-bold text-white">6</div>
                  <div className="text-green-400 font-semibold">STUNDEN</div>
                </div>
                <div>
                  <div className="text-4xl md:text-6xl font-bold text-white">32</div>
                  <div className="text-green-400 font-semibold">MIN</div>
                </div>
                <div>
                  <div className="text-4xl md:text-6xl font-bold text-white">37</div>
                  <div className="text-green-400 font-semibold">SEK</div>
                </div>
              </div>
            </div>
            
            {/* Bottom text */}
            <div className="text-3xl md:text-4xl text-white font-semibold flex items-center justify-center gap-3">
              Wir freuen uns auf Euch! 🌴 🏊‍♂️
            </div>
          </div>
        </section>
        
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
                  Viva la Vida - Feiert mit uns in Ricardos Geburtstag hinein!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
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
                  DABEI SEIN
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
        <RicardoAttributesSection />
        <ChatSection />
      </main>

      <footer className="bg-mallorca-sea/90 text-mallorca-white py-8 text-center relative z-10 border-t border-mallorca-palm/30">
        <p className="font-poppins">© 2025 Mallorca Party. Viva la Vida! 🌴</p>
        <p className="font-poppins mt-2">WhatsApp: +49 1511 7251511</p>
      </footer>
    </div>
  );
};

export default Index;
