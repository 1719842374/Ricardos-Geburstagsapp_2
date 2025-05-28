
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
      {/* Finca Background ohne blauen Filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.imgur.com/tCF1m0g.png')",
        }}
      ></div>
      
      {/* Grün-blaues Mallorca Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mallorca-palm/20 via-mallorca-ocean/30 to-mallorca-sea/40"></div>
      
      {/* Floating Palm Trees */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] text-6xl animate-wave">🌴</div>
        <div className="absolute top-[20%] right-[8%] text-5xl animate-wave" style={{animationDelay: '1s'}}>🌴</div>
        <div className="absolute bottom-[20%] left-[10%] text-4xl animate-wave" style={{animationDelay: '2s'}}>🌴</div>
        <div className="absolute bottom-[15%] right-[15%] text-5xl animate-wave" style={{animationDelay: '0.5s'}}>🌴</div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-7xl md:text-9xl font-poppins font-bold mb-6 tracking-wider text-mallorca-white drop-shadow-2xl">
          VIVA LA VIDA
        </h1>
        
        <div className="text-3xl md:text-4xl mb-4 font-poppins font-light tracking-wide">
          <span className="text-mallorca-palm">23. AUGUST 2025</span>
        </div>
        
        <div className="text-xl md:text-2xl mb-8 font-poppins font-light opacity-90">
          Feier mit uns einen unvergesslichen Abend auf Mallorca!
        </div>
        
        {/* Countdown */}
        <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-8 border border-mallorca-palm/30 animate-pulse-glow">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-mallorca-white">{timeLeft.days}</div>
              <div className="text-sm md:text-base font-poppins text-mallorca-palm">TAGE</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-mallorca-white">{timeLeft.hours}</div>
              <div className="text-sm md:text-base font-poppins text-mallorca-palm">STUNDEN</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-mallorca-white">{timeLeft.minutes}</div>
              <div className="text-sm md:text-base font-poppins text-mallorca-palm">MIN</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-mallorca-white">{timeLeft.seconds}</div>
              <div className="text-sm md:text-base font-poppins text-mallorca-palm">SEK</div>
            </div>
          </div>
        </div>

        <div className="text-2xl md:text-3xl font-poppins text-mallorca-white">
          Wir freuen uns auf Euch! 🏝️🌊
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
