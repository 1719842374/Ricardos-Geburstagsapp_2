
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WishlistSection = () => {
  return (
    <section id="wishlist" className="py-20 px-4 bg-gradient-to-b from-festival-sand/10 to-festival-warm/20">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-5xl font-bebas text-festival-night mb-4 tracking-wider">
              FESTIVAL VIBES 🌺
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="text-7xl animate-float">🌺</div>
            <p className="text-3xl text-festival-night font-playfair italic">
              Your presence is the perfect gift!
            </p>
            <div className="bg-gradient-to-r from-festival-coral/10 to-festival-sunset/10 rounded-2xl p-8">
              <p className="text-xl text-festival-night font-poppins leading-relaxed">
                Just bring your dancing shoes and festival spirit. 
                Let's create unforgettable memories under the Mallorca stars! 🌟
              </p>
            </div>
            <div className="flex justify-center space-x-4 text-4xl">
              <span className="animate-wave">🎪</span>
              <span className="animate-wave" style={{animationDelay: '0.5s'}}>🎭</span>
              <span className="animate-wave" style={{animationDelay: '1s'}}>🎨</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WishlistSection;
