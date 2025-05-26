
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
      {/* Festival Background mit Finca */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.imgur.com/tCF1m0g.png')",
        }}
      ></div>
      
      {/* Festival Sunset Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-festival-sunset/30 via-festival-coral/20 to-festival-night/60"></div>
      
      {/* Floating Palm Trees */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] text-6xl animate-wave">🌴</div>
        <div className="absolute top-[20%] right-[8%] text-5xl animate-wave" style={{animationDelay: '1s'}}>🌴</div>
        <div className="absolute bottom-[20%] left-[10%] text-4xl animate-wave" style={{animationDelay: '2s'}}>🌴</div>
        <div className="absolute bottom-[15%] right-[15%] text-5xl animate-wave" style={{animationDelay: '0.5s'}}>🌴</div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-7xl md:text-9xl font-bebas mb-6 tracking-wider text-festival-sand drop-shadow-2xl">
          FINCA FESTIVAL
        </h1>
        
        <div className="text-3xl md:text-4xl mb-4 font-poppins font-light tracking-wide">
          <span className="text-festival-coral">23. AUGUST 2025</span>
        </div>
        
        <div className="text-xl md:text-2xl mb-8 font-roboto font-light opacity-90">
          House Music • Sunset • Mallorca Vibes
        </div>
        
        {/* Festival Countdown */}
        <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-8 border border-festival-coral/30 animate-pulse-glow">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bebas text-festival-sand">{timeLeft.days}</div>
              <div className="text-sm md:text-base font-poppins text-festival-coral">DAYS</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bebas text-festival-sand">{timeLeft.hours}</div>
              <div className="text-sm md:text-base font-poppins text-festival-coral">HOURS</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bebas text-festival-sand">{timeLeft.minutes}</div>
              <div className="text-sm md:text-base font-poppins text-festival-coral">MINS</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bebas text-festival-sand">{timeLeft.seconds}</div>
              <div className="text-sm md:text-base font-poppins text-festival-coral">SECS</div>
            </div>
          </div>
        </div>

        <div className="text-2xl md:text-3xl font-dancing text-festival-warm">
          Get ready for the beat! 🎵🌅
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
