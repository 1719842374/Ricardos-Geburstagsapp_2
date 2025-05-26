
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
import ChatSection from "@/components/ChatSection";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState("start");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['start', 'event-details', 'hotel-tips', 'rsvp', 'playlist', 'photo-gallery', 'guestbook', 'wishlist', 'chat'];
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
    <div className="min-h-screen bg-gradient-to-br from-festival-night via-festival-palm to-black relative overflow-hidden">
      {/* Festival Floating Elements */}
      <div className="floating-elements absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] left-[5%] text-4xl animate-float">🎪</div>
        <div className="absolute top-[15%] right-[10%] text-3xl animate-float" style={{animationDelay: '1s'}}>🏝️</div>
        <div className="absolute top-[25%] left-[15%] text-2xl animate-float" style={{animationDelay: '2s'}}>🌊</div>
        <div className="absolute top-[35%] right-[20%] text-3xl animate-float" style={{animationDelay: '0.5s'}}>🎵</div>
        <div className="absolute top-[45%] left-[8%] text-2xl animate-float" style={{animationDelay: '1.5s'}}>🎧</div>
        <div className="absolute top-[55%] right-[5%] text-4xl animate-float" style={{animationDelay: '2.5s'}}>🌅</div>
        <div className="absolute top-[65%] left-[12%] text-2xl animate-float" style={{animationDelay: '0.8s'}}>🍸</div>
        <div className="absolute top-[75%] right-[15%] text-3xl animate-float" style={{animationDelay: '3s'}}>🎭</div>
        <div className="absolute top-[85%] left-[20%] text-2xl animate-float" style={{animationDelay: '1.2s'}}>⭐</div>
      </div>

      <NavigationMenu activeSection={activeSection} />
      
      <main className="relative z-10">
        <HeroBanner />
        
        <section id="start" className="py-20 px-4 bg-gradient-to-b from-festival-night/80 to-festival-palm/60">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-black/80 backdrop-blur-sm border border-festival-coral/30 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-5xl font-dancing text-festival-sand mb-4">
                  You're invited! 🥂
                </CardTitle>
                <CardDescription className="text-xl text-festival-warm font-poppins">
                  <i className="fas fa-glass-cheers text-festival-coral mr-2"></i>
                  Join us for an unforgettable House Music Festival at the Finca!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-3xl font-playfair text-festival-coral italic">
                  "Life is a Festival - Dance to your own Beat"
                </p>
                
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src="https://player.vimeo.com/video/1082618091?h=a35bbd7944&badge=0&autopause=0" 
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture" 
                    title="Festival Invitation" 
                    allowFullScreen
                  ></iframe>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-festival-sunset to-festival-coral hover:from-festival-coral hover:to-festival-glow text-white font-bebas text-lg py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg tracking-wider"
                  onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <i className="fas fa-ticket-alt mr-2"></i>
                  GET YOUR SPOT
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
        <ChatSection />
      </main>

      <footer className="bg-festival-night/90 text-festival-sand py-8 text-center relative z-10 border-t border-festival-coral/30">
        <p className="font-poppins">© 2025 Finca Festival. All beats reserved. 🎵</p>
      </footer>
    </div>
  );
};

export default Index;
