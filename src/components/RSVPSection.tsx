
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
    attending: "",
    accompanying: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RSVP Data:", formData);
    toast({
      title: "RSVP gesendet!",
      description: "Vielen Dank für deine Rückmeldung. Wir freuen uns auf dich! 🎉"
    });
    setFormData({ name: "", email: "", attending: "", accompanying: "" });
  };

  return (
    <section id="rsvp" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-dancing text-party-purple mb-4">
              Zu-/Absagen ✉️
            </CardTitle>
            <p className="text-lg text-gray-700">
              Bitte teile uns mit, ob du an der Feier teilnehmen kannst:
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <i className="fas fa-user text-party-pink"></i>
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
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <i className="fas fa-envelope text-party-purple"></i>
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
                  <Label className="flex items-center gap-2">
                    <i className="fas fa-calendar-check text-party-blue"></i>
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
                <div className="space-y-2">
                  <Label htmlFor="accompanying" className="flex items-center gap-2">
                    <i className="fas fa-users text-party-green"></i>
                    Begleitperson
                  </Label>
                  <Input
                    id="accompanying"
                    value={formData.accompanying}
                    onChange={(e) => setFormData({...formData, accompanying: e.target.value})}
                    placeholder="Name der Begleitperson (falls vorhanden)"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-party-pink to-party-purple hover:from-party-purple hover:to-party-pink text-white font-bold py-3 px-8 rounded-full shadow-lg"
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
