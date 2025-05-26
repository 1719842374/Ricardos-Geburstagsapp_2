
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WishlistSection = () => {
  return (
    <section id="wishlist" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-dancing text-party-purple mb-4">
              Wunschliste 🎁
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="text-6xl animate-float">🎁</div>
            <p className="text-2xl text-party-purple font-dancing">
              <i className="fas fa-gift text-party-pink mr-3"></i>
              Eure Anwesenheit ist das schönste Geschenk für mich!
            </p>
            <div className="bg-gradient-to-r from-party-pink/10 to-party-purple/10 rounded-lg p-8">
              <p className="text-lg text-gray-700">
                Das wichtigste Geschenk ist eure Zeit und dass ihr mit mir feiert. 
                Lasst uns gemeinsam unvergessliche Momente schaffen! 🥳
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WishlistSection;
