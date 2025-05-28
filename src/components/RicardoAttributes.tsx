
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const RicardoAttributes = () => {
  const [formData, setFormData] = useState({
    email: "",
    attribute1: "",
    attribute2: "",
    attribute3: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Speichere in Datenbank
      const { data, error } = await supabase
        .from('ricardo_attributes')
        .insert([formData])
        .select()
        .single();

      if (error) throw error;

      // Sende E-Mail
      await fetch('/supabase/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabase.supabaseKey}`
        },
        body: JSON.stringify({
          type: 'attributes',
          data: data
        })
      });

      toast({
        title: "Attribute gesendet!",
        description: "Vielen Dank für deine Einschätzung von Ricardo! 🎉"
      });
      
      setFormData({ email: "", attribute1: "", attribute2: "", attribute3: "" });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Fehler",
        description: "Bitte versuche es später noch einmal.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="ricardo-attributes" className="py-20 px-4 bg-gradient-to-b from-mallorca-pine/20 to-mallorca-ocean/10">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-mallorca-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-poppins font-bold text-mallorca-sea mb-4">
              Schreibt uns Eure Impressionen 💭
            </CardTitle>
            <p className="text-lg text-mallorca-sea font-poppins">
              Welche 3 Attribute fallen Euch zu Ricardo ein?
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
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
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="attribute1" className="flex items-center gap-2 font-poppins">
                    <i className="fas fa-star text-mallorca-palm"></i>
                    Attribut 1
                  </Label>
                  <Input
                    id="attribute1"
                    value={formData.attribute1}
                    onChange={(e) => setFormData({...formData, attribute1: e.target.value})}
                    placeholder="z.B. lustig"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="attribute2" className="flex items-center gap-2 font-poppins">
                    <i className="fas fa-heart text-mallorca-pine"></i>
                    Attribut 2
                  </Label>
                  <Input
                    id="attribute2"
                    value={formData.attribute2}
                    onChange={(e) => setFormData({...formData, attribute2: e.target.value})}
                    placeholder="z.B. hilfsbereit"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="attribute3" className="flex items-center gap-2 font-poppins">
                    <i className="fas fa-smile text-mallorca-sea"></i>
                    Attribut 3
                  </Label>
                  <Input
                    id="attribute3"
                    value={formData.attribute3}
                    onChange={(e) => setFormData({...formData, attribute3: e.target.value})}
                    placeholder="z.B. spontan"
                    required
                  />
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-mallorca-palm to-mallorca-pine hover:from-mallorca-pine hover:to-mallorca-palm text-white font-poppins font-bold py-3 px-8 rounded-full shadow-lg"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  {isSubmitting ? "Wird gesendet..." : "Absenden"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RicardoAttributes;
