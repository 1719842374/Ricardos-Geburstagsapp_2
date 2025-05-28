
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WishlistSection = () => {
  return (
    <section id="wishlist" className="py-20 px-4 bg-gradient-to-b from-mallorca-palm/10 to-mallorca-pine/20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Geschenke Sektion */}
        <Card className="bg-mallorca-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-5xl font-poppins font-bold text-mallorca-sea mb-4 tracking-wider">
              GESCHENKE 🎁
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="text-7xl animate-float">🎁</div>
            <p className="text-3xl text-mallorca-sea font-poppins font-semibold italic">
              Keine Geschenke, bitte!
            </p>
            <div className="bg-gradient-to-r from-mallorca-palm/10 to-mallorca-pine/10 rounded-2xl p-8">
              <p className="text-xl text-mallorca-sea font-poppins leading-relaxed">
                Euer Kommen und ein fröhlicher Abend mit euch sind das größte Geschenk.
              </p>
            </div>
            <div className="flex justify-center space-x-4 text-4xl">
              <span className="animate-wave">🌴</span>
              <span className="animate-wave" style={{animationDelay: '0.5s'}}>🏝️</span>
              <span className="animate-wave" style={{animationDelay: '1s'}}>🌊</span>
            </div>
          </CardContent>
        </Card>

        {/* Der Morgen Danach Sektion */}
        <Card className="bg-mallorca-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-5xl font-poppins font-bold text-mallorca-sea mb-4 tracking-wider">
              DER MORGEN DANACH ☀️
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="text-7xl animate-float">☀️</div>
            <p className="text-3xl text-mallorca-sea font-poppins font-semibold italic">
              24. August 2025
            </p>
            <div className="bg-gradient-to-r from-mallorca-ocean/10 to-mallorca-sea/10 rounded-2xl p-8">
              <p className="text-xl text-mallorca-sea font-poppins leading-relaxed mb-4">
                <strong>Am Geburtstag, 24.08., könnt ihr gerne ab 11:00 Uhr zu einem kleinen Frühstück und einem entspannten Ausklang vorbeischauen.</strong>
              </p>
            </div>
            <div className="flex justify-center space-x-4 text-4xl">
              <span className="animate-wave">🥐</span>
              <span className="animate-wave" style={{animationDelay: '0.5s'}}>☕</span>
              <span className="animate-wave" style={{animationDelay: '1s'}}>🍳</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WishlistSection;
