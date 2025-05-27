
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Guestbook = () => {
  const [answers, setAnswers] = useState({
    memories: "",
    wishes: ""
  });
  const [entries, setEntries] = useState<any[]>([]);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (answers.memories.trim() || answers.wishes.trim()) {
      setEntries([...entries, answers]);
      console.log("Guestbook entry:", answers);
      toast({
        title: "Impressionen gespeichert!",
        description: "Danke für deine lieben Worte! 💙"
      });
      setAnswers({ memories: "", wishes: "" });
    }
  };

  return (
    <section id="guestbook" className="py-20 px-4 bg-gradient-to-b from-mallorca-sea/10 to-mallorca-ocean/20">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-mallorca-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-poppins font-bold text-mallorca-sea mb-4">
              Schreibt uns Eure Impressionen 💭
            </CardTitle>
            <p className="text-lg text-mallorca-sea font-poppins">
              Teilt eure Gedanken und Erinnerungen mit uns!
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-lg font-poppins text-mallorca-sea font-semibold">
                  An welche Erlebnisse erinnert Ihr Euch mit Ricardo besonders gerne?
                </label>
                <Textarea
                  value={answers.memories}
                  onChange={(e) => setAnswers({...answers, memories: e.target.value})}
                  placeholder="Eure schönsten Erinnerungen mit Ricardo..."
                  rows={4}
                  className="font-poppins"
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-lg font-poppins text-mallorca-sea font-semibold">
                  Was wünscht ihr Ricardo für die nächsten 60 Lebensjahre?
                </label>
                <Textarea
                  value={answers.wishes}
                  onChange={(e) => setAnswers({...answers, wishes: e.target.value})}
                  placeholder="Eure Wünsche für Ricardo..."
                  rows={4}
                  className="font-poppins"
                />
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-mallorca-ocean to-mallorca-sea hover:from-mallorca-sea hover:to-mallorca-ocean text-white font-poppins font-bold py-3 px-6 rounded-full shadow-lg"
                >
                  <i className="fas fa-heart mr-2"></i>
                  Absenden
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {entries.map((entry, index) => (
                <Card key={index} className="bg-gradient-to-r from-mallorca-ocean/10 to-mallorca-sea/10 border border-mallorca-palm/20">
                  <CardContent className="p-4 space-y-3">
                    {entry.memories && (
                      <div>
                        <p className="font-poppins font-semibold text-mallorca-sea mb-1">Erinnerungen:</p>
                        <p className="text-mallorca-sea font-poppins">{entry.memories}</p>
                      </div>
                    )}
                    {entry.wishes && (
                      <div>
                        <p className="font-poppins font-semibold text-mallorca-sea mb-1">Wünsche:</p>
                        <p className="text-mallorca-sea font-poppins">{entry.wishes}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
              {entries.length === 0 && (
                <div className="text-center text-mallorca-sea/60 py-8">
                  <i className="fas fa-heart text-4xl text-mallorca-palm/30 mb-4"></i>
                  <p className="font-poppins">Noch keine Einträge. Seid die Ersten! 💙</p>
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
