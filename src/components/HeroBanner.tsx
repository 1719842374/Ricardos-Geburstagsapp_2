
import { useState, useEffect } from "react";

const HeroBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-23T20:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image - Blauen Filter entfernt */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.imgur.com/tCF1m0g.png')",
          filter: 'brightness(0.8)'
        }}
      ></div>
      
      {/* Erwachsenerer Gradient Overlay - Schwarz-blau-weiß */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/40 to-slate-900/60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-dancing mb-6 animate-float">
          Geburtstagsfeier 2025
        </h1>
        
        <p className="text-2xl md:text-3xl mb-8 font-montserrat font-medium">
          23. August 2025, 20:00 Uhr
        </p>
        
        {/* Countdown mit erwachsenerem Design */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8 border border-white/20">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">{timeLeft.days}</div>
              <div className="text-sm md:text-base opacity-80">Tage</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">{timeLeft.hours}</div>
              <div className="text-sm md:text-base opacity-80">Stunden</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">{timeLeft.minutes}</div>
              <div className="text-sm md:text-base opacity-80">Minuten</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">{timeLeft.seconds}</div>
              <div className="text-sm md:text-base opacity-80">Sekunden</div>
            </div>
          </div>
        </div>

        <div className="text-xl md:text-2xl font-dancing opacity-90">
          Bis zur Party des Jahres! 🥂
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
