
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
    <section id="playlist" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-black/80 backdrop-blur-sm border border-white/20 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-dancing text-white mb-4">
              Playlist-Wünsche 🎵
            </CardTitle>
            <p className="text-lg text-white/80">
              Welche Songs sollen auf der Party gespielt werden? Teile uns deine Musikwünsche mit!
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
                placeholder="Deine Songwünsche hier eintragen..."
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <div className="text-center">
                <Button 
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-600 hover:to-slate-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
                >
                  <i className="fas fa-music mr-2"></i>
                  Musikwunsch absenden
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
