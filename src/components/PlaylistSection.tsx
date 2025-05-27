
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const PlaylistSection = () => {
  const [musicWish, setMusicWish] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (musicWish.trim()) {
      console.log("Music Wish:", musicWish);
      toast({
        title: "Musikwunsch gesendet!",
        description: "Danke für deinen Vorschlag! 🎵"
      });
      setMusicWish("");
    }
  };

  return (
    <section id="playlist" className="py-20 px-4 bg-gradient-to-b from-mallorca-sea to-mallorca-ocean">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-mallorca-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-5xl font-poppins font-bold text-mallorca-sea mb-4 tracking-wider">
              MUSIK PLAYLIST 🎧
            </CardTitle>
            <p className="text-lg text-mallorca-sea font-poppins">
              Welche Musik soll auf der Party laufen? Teilt eure Musikwünsche!
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                style={{borderRadius: '12px'}}
                src="https://open.spotify.com/embed/playlist/5CTX11v7Kcy4GP9KdLf6no?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </div>
            
            <div className="space-y-4">
              <Textarea
                value={musicWish}
                onChange={(e) => setMusicWish(e.target.value)}
                placeholder="Eure Musikwünsche, Lieblingssongs, Partyhits..."
                rows={4}
                className="bg-mallorca-ocean/10 border-mallorca-palm/30 text-mallorca-sea placeholder:text-mallorca-sea/60 font-poppins"
              />
              <div className="text-center">
                <Button 
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-mallorca-pine to-mallorca-palm hover:from-mallorca-palm hover:to-mallorca-pine text-white font-poppins font-bold text-lg py-3 px-8 rounded-full shadow-lg tracking-wider transform hover:scale-105 transition-all duration-300"
                >
                  <i className="fas fa-music mr-2"></i>
                  MUSIKWUNSCH ABSENDEN
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PlaylistSection;
