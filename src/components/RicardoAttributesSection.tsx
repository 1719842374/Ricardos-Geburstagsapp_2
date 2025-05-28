
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const RicardoAttributesSection = () => {
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
      const { error } = await supabase
        .from('ricardo_attributes')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Attribute gesendet!",
        description: "Vielen Dank für deine Einschätzung zu Ricardo! 😊"
      });
      setFormData({ email: "", attribute1: "", attribute2: "", attribute3: "" });
    } catch (error) {
      console.error('Error submitting ricardo attributes:', error);
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Senden deiner Attribute. Bitte versuche es erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="ricardo-attributes" className="py-20 px-4 bg-gradient-to-b from-mallorca-ocean/10 to-mallorca-palm/20">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-mallorca-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-poppins font-bold text-mallorca-sea mb-4">
              Schreibt uns eure Impressionen 💭
            </CardTitle>
            <p className="text-lg text-mallorca-sea font-poppins">
              Welche 3 Attribute fallen euch zu Ricardo ein?
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
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="attribute1" className="flex items-center gap-2 font-poppins">
                    <i className="fas fa-star text-mallorca-palm"></i>
                    1. Attribut
                  </Label>
                  <Input
                    id="attribute1"
                    value={formData.attribute1}
                    onChange={(e) => setFormData({...formData, attribute1: e.target.value})}
                    placeholder="Was beschreibt Ricardo am besten?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="attribute2" className="flex items-center gap-2 font-poppins">
                    <i className="fas fa-star text-mallorca-pine"></i>
                    2. Attribut
                  </Label>
                  <Input
                    id="attribute2"
                    value={formData.attribute2}
                    onChange={(e) => setFormData({...formData, attribute2: e.target.value})}
                    placeholder="Eine weitere Eigenschaft..."
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="attribute3" className="flex items-center gap-2 font-poppins">
                    <i className="fas fa-star text-mallorca-sea"></i>
                    3. Attribut
                  </Label>
                  <Input
                    id="attribute3"
                    value={formData.attribute3}
                    onChange={(e) => setFormData({...formData, attribute3: e.target.value})}
                    placeholder="Und noch eine..."
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
                  <i className="fas fa-heart mr-2"></i>
                  {isSubmitting ? "Wird gesendet..." : "Attribute absenden"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RicardoAttributesSection;
