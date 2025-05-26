
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
        title: "Track Request Submitted!",
        description: "Thanks for your suggestion! 🎵"
      });
      setMusicWish("");
    }
  };

  return (
    <section id="playlist" className="py-20 px-4 bg-gradient-to-b from-festival-night to-black">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-black/80 backdrop-blur-sm border border-festival-coral/30 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-5xl font-bebas text-festival-sand mb-4 tracking-wider">
              FESTIVAL PLAYLIST 🎧
            </CardTitle>
            <p className="text-lg text-festival-warm font-poppins">
              What tracks should pump up the Finca? Drop your House Music requests!
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
                placeholder="Your house tracks, deep vibes, festival anthems..."
                rows={4}
                className="bg-festival-night/50 border-festival-coral/30 text-white placeholder:text-festival-warm/60 font-roboto"
              />
              <div className="text-center">
                <Button 
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-festival-sunset to-festival-coral hover:from-festival-coral hover:to-festival-glow text-white font-bebas text-lg py-3 px-8 rounded-full shadow-lg tracking-wider transform hover:scale-105 transition-all duration-300"
                >
                  <i className="fas fa-music mr-2"></i>
                  SUBMIT TRACK
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
