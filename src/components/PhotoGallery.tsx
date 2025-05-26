
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const PhotoGallery = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
    if (e.target.files && e.target.files.length > 0) {
      // Simuliere Upload und zeige Bilder an
      const newImages: string[] = [];
      Array.from(e.target.files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            newImages.push(event.target.result as string);
            setUploadedImages(prev => [...prev, event.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
      
      toast({
        title: "Dateien hochgeladen!",
        description: `${e.target.files.length} Datei(en) erfolgreich hinzugefügt. 📸`
      });
    }
  };

  return (
    <section id="photo-gallery" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-black/80 backdrop-blur-sm border border-white/20 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-dancing text-white mb-4">
              Fotogalerie 📸
            </CardTitle>
            <p className="text-lg text-white/80">
              Teile deine besten Momente mit Ricardo und anderen Gästen!
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center hover:border-white/60 transition-colors">
              <i className="fas fa-cloud-upload-alt text-4xl text-blue-400 mb-4"></i>
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
                  className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
                  asChild
                >
                  <span>
                    <i className="fas fa-images mr-2"></i>
                    Fotos & Videos auswählen
                  </span>
                </Button>
              </label>
              {selectedFiles && (
                <p className="mt-4 text-sm text-white/60">
                  {selectedFiles.length} Datei(en) ausgewählt
                </p>
              )}
            </div>
            
            {/* Hochgeladene Bilder anzeigen */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="imageContainer">
              {uploadedImages.map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={image} 
                    alt={`Uploaded ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
              
              {/* Placeholder für weitere Uploads */}
              {uploadedImages.length === 0 && (
                <>
                  <div className="aspect-square bg-gradient-to-br from-black/40 to-blue-900/40 rounded-lg flex items-center justify-center border border-white/20">
                    <i className="fas fa-image text-3xl text-white/40"></i>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-blue-900/40 to-black/40 rounded-lg flex items-center justify-center border border-white/20">
                    <i className="fas fa-video text-3xl text-white/40"></i>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-black/40 to-blue-900/40 rounded-lg flex items-center justify-center border border-white/20">
                    <i className="fas fa-plus text-3xl text-white/40"></i>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PhotoGallery;
