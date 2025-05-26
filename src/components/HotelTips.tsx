
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HotelTips = () => {
  const hotels = [
    {
      name: "Icon Valparaiso",
      description: "Bestes Hotel in Fußreichweite (45 min)",
      icon: "fas fa-hotel",
      url: "https://www.iconvalparaiso.com/",
      color: "text-party-pink"
    },
    {
      name: "Hotel Cala Murada",
      description: "Schöne Lage in Cala Murada",
      icon: "fas fa-hotel",
      url: "https://www.hotelcalamurada.com/de/",
      color: "text-party-purple"
    },
    {
      name: "Hostal Portocolom",
      description: "Einfach und lebhaft, 15 Min. mit dem Auto",
      icon: "fas fa-home",
      url: "https://www.hostalportocolom.com/es/",
      color: "text-party-blue"
    },
    {
      name: "JS Cape Colom",
      description: "Adults Only in schöner Lage am Meer",
      icon: "fas fa-umbrella-beach",
      url: "https://www.jshotels.com/de/js-cape-colom",
      color: "text-party-green"
    },
    {
      name: "Son Amoixa",
      description: "Luxuriöses Fincahotel",
      icon: "fas fa-spa",
      url: "https://www.sonamoixa.com",
      color: "text-party-orange"
    },
    {
      name: "Espicot",
      description: "Sehr nettes Agroturismo in der Nähe",
      icon: "fas fa-leaf",
      url: "https://www.espicot.com",
      color: "text-party-yellow"
    }
  ];

  return (
    <section id="hotel-tips" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-dancing text-party-purple mb-4">
              Hotel Tipps 🏨
            </CardTitle>
            <p className="text-lg text-gray-700">
              Liebe Freunde, ich freue mich mit Euch gemeinsam zu feiern 😊 
              Die Finca ist in der Nähe von Portocolom, hier noch ein paar Hoteltipps in der Nähe:
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel, index) => (
                <Card key={index} className="border-2 border-transparent hover:border-party-purple/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center space-y-4">
                    <i className={`${hotel.icon} text-4xl ${hotel.color}`}></i>
                    <h3 className="font-bold text-lg text-gray-800">{hotel.name}</h3>
                    <p className="text-gray-600">{hotel.description}</p>
                    <Button 
                      asChild
                      variant="outline"
                      className="border-party-purple text-party-purple hover:bg-party-purple hover:text-white"
                    >
                      <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                        Website besuchen <i className="fas fa-arrow-right ml-2"></i>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HotelTips;
