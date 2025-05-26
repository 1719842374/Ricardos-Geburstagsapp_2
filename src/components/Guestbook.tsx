
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Guestbook = () => {
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (message.trim()) {
      setEntries([...entries, message]);
      console.log("Guestbook entry:", message);
      toast({
        title: "Eintrag gespeichert!",
        description: "Danke für deine lieben Worte! 💝"
      });
      setMessage("");
    }
  };

  return (
    <section id="guestbook" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-dancing text-party-purple mb-4">
              Gästebuch 📖
            </CardTitle>
            <p className="text-lg text-gray-700">
              Schreibe eine Nachricht an das Geburtstagskind!
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Deine Nachricht..."
                rows={4}
              />
              <Input type="file" accept="image/*" placeholder="Foto hinzufügen (optional)" />
              <div className="text-center">
                <Button 
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-party-orange to-party-yellow hover:from-party-yellow hover:to-party-orange text-white font-bold py-3 px-6 rounded-full shadow-lg"
                >
                  <i className="fas fa-book mr-2"></i>
                  Absenden
                </Button>
              </div>
            </div>
            
            <div className="space-y-4" id="guestbookEntries">
              {entries.map((entry, index) => (
                <Card key={index} className="bg-gradient-to-r from-party-pink/10 to-party-purple/10">
                  <CardContent className="p-4">
                    <p className="text-gray-700">{entry}</p>
                  </CardContent>
                </Card>
              ))}
              {entries.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  <i className="fas fa-heart text-4xl text-party-pink/30 mb-4"></i>
                  <p>Noch keine Einträge. Sei der/die Erste! 💝</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Guestbook;
