
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EventDetails = () => {
  return (
    <section id="event-details" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-dancing text-party-purple mb-4">
              Event-Details 📍
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <i className="fas fa-calendar-day text-3xl text-party-pink"></i>
                <h3 className="font-bold text-lg">Datum</h3>
                <p>23. August 2025</p>
              </div>
              <div className="space-y-2">
                <i className="fas fa-clock text-3xl text-party-purple"></i>
                <h3 className="font-bold text-lg">Uhrzeit</h3>
                <p>20:00 Uhr</p>
              </div>
              <div className="space-y-2">
                <i className="fas fa-map-marker-alt text-3xl text-party-blue"></i>
                <h3 className="font-bold text-lg">Ort</h3>
                <p>
                  <a 
                    href="https://www.mar-des-teix.eu/finca" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-party-purple hover:underline"
                  >
                    Finca Mar d'es Teix
                  </a>
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <iframe 
                className="w-full h-64 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.123456789!2d3.256077785320634!3d39.48144756486573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12964f80365c4779%3A0xde0511a85d781eb!2sFinca%20Mar%20d%C2%B4es%20Teix!5e0!3m2!1sde!2sde!4v1746549726685!5m2!1sde!2sde" 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
            
            <div className="text-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-party-blue to-party-green hover:from-party-green hover:to-party-blue text-white font-bold py-3 px-6 rounded-full shadow-lg"
              >
                <a 
                  href="https://www.google.de/maps/place/Finca+Mar+d%C2%B4es+Teix/@39.4794472,3.2461242,15.4z/data=!4m6!3m5!1s0x12964f80365c4779:0xde0511a85d781eb!8m2!3d39.481229!4d3.256254!16s%2Fg%2F11gblbxkd0?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-map mr-2"></i>
                  In Google Maps öffnen
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EventDetails;
