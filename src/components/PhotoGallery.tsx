
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const PhotoGallery = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
    if (e.target.files && e.target.files.length > 0) {
      toast({
        title: "Dateien ausgewählt!",
        description: `${e.target.files.length} Datei(en) bereit zum Upload. 📸`
      });
    }
  };

  return (
    <section id="photo-gallery" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-dancing text-party-purple mb-4">
              Fotogalerie 📸
            </CardTitle>
            <p className="text-lg text-gray-700">
              Wenn ihr Fotos mit Ricardo habt, wäre es klasse, wenn ihr diese hier hochladet!
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-2 border-dashed border-party-purple/30 rounded-lg p-8 text-center hover:border-party-purple/60 transition-colors">
              <i className="fas fa-cloud-upload-alt text-4xl text-party-purple mb-4"></i>
              <Input
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                id="fileUpload"
              />
              <label 
                htmlFor="fileUpload"
                className="cursor-pointer"
              >
                <Button 
                  type="button"
                  className="bg-gradient-to-r from-party-purple to-party-pink hover:from-party-pink hover:to-party-purple text-white font-bold py-3 px-6 rounded-full shadow-lg"
                  asChild
                >
                  <span>
                    <i className="fas fa-images mr-2"></i>
                    Fotos & Videos auswählen
                  </span>
                </Button>
              </label>
              {selectedFiles && (
                <p className="mt-4 text-sm text-gray-600">
                  {selectedFiles.length} Datei(en) ausgewählt
                </p>
              )}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4" id="imageContainer">
              {/* Placeholder for uploaded images */}
              <div className="aspect-square bg-gradient-to-br from-party-pink/20 to-party-purple/20 rounded-lg flex items-center justify-center">
                <i className="fas fa-image text-3xl text-party-purple/50"></i>
              </div>
              <div className="aspect-square bg-gradient-to-br from-party-blue/20 to-party-green/20 rounded-lg flex items-center justify-center">
                <i className="fas fa-video text-3xl text-party-blue/50"></i>
              </div>
              <div className="aspect-square bg-gradient-to-br from-party-yellow/20 to-party-orange/20 rounded-lg flex items-center justify-center">
                <i className="fas fa-plus text-3xl text-party-orange/50"></i>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PhotoGallery;
