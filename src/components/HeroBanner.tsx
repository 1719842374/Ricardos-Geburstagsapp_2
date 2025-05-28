
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.imgur.com/uTmX35f.jpg')",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-mallorca-sea/40 via-transparent to-mallorca-ocean/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-dancing text-mallorca-white mb-8 drop-shadow-2xl animate-fade-in">
          Ricardos 60. Geburtstagsfeier
        </h1>
        
        <div className="bg-mallorca-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-mallorca-palm/20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-mallorca-sea mb-6 tracking-wide">
            23. August 2025
          </h2>
          
          <p className="text-xl md:text-2xl text-mallorca-ocean font-poppins mb-8 leading-relaxed">
            <i className="fas fa-map-marker-alt text-mallorca-palm mr-3"></i>
            Finca Mar des Teix, Mallorca
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-mallorca-palm to-mallorca-pine hover:from-mallorca-pine hover:to-mallorca-palm text-white font-poppins font-bold text-lg py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl tracking-wider"
              onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <i className="fas fa-calendar-plus mr-2"></i>
              JETZT ZUSAGEN
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-mallorca-sea text-mallorca-sea hover:bg-mallorca-sea hover:text-white font-poppins font-bold text-lg py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg tracking-wider"
              onClick={() => document.getElementById('event-details')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <i className="fas fa-info-circle mr-2"></i>
              DETAILS
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-3xl text-mallorca-white/80"></i>
      </div>
    </header>
  );
};

export default HeroBanner;
