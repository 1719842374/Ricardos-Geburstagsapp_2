
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Data:", formData);
    toast({
      title: "Kontaktdaten gesendet!",
      description: "Vielen Dank für deine Daten. Wir freuen uns auf dich! 🌴"
    });
    setFormData({ name: "", email: "", phone: "", attending: "" });
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-gradient-to-b from-mallorca-ocean/10 to-mallorca-sea/20">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-mallorca-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-poppins font-bold text-mallorca-sea mb-4">
              Meine Kontaktdaten 📞
            </CardTitle>
            <p className="text-lg text-mallorca-sea font-poppins">
              Gerne kannst Du uns hier noch Deine Kontaktdaten hinterlegen
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 font-poppins">
                    <i className="fas fa-user text-mallorca-palm"></i>
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Dein Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 font-poppins">
                    <i className="fas fa-envelope text-mallorca-ocean"></i>
                    E-Mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="deine@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 font-poppins">
                    <i className="fas fa-phone text-mallorca-pine"></i>
                    Telefon
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Deine Telefonnummer"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 font-poppins">
                    <i className="fas fa-calendar-check text-mallorca-sea"></i>
                    Teilnahme
                  </Label>
                  <Select value={formData.attending} onValueChange={(value) => setFormData({...formData, attending: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Auswählen..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Ja, ich komme gerne</SelectItem>
                      <SelectItem value="no">Leider nicht möglich</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-mallorca-palm to-mallorca-pine hover:from-mallorca-pine hover:to-mallorca-palm text-white font-poppins font-bold py-3 px-8 rounded-full shadow-lg"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Absenden
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RSVPSection;
