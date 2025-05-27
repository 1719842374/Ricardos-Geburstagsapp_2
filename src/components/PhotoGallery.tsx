
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
        title: "Fotos hochgeladen!",
        description: `${e.target.files.length} Foto(s) erfolgreich hinzugefügt. 📸`
      });
    }
  };

  return (
    <section id="photo-gallery" className="py-20 px-4 bg-gradient-to-b from-mallorca-pine/10 to-mallorca-palm/20">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-mallorca-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-poppins font-bold text-mallorca-sea mb-4">
              Fotogalerie 📸
            </CardTitle>
            <p className="text-lg text-mallorca-sea font-poppins">
              Wenn Du noch Fotos aus alten Zeiten mit Ricardo hast, kannst Du sie gerne hier hochladen 😊
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-2 border-dashed border-mallorca-palm/30 rounded-lg p-8 text-center hover:border-mallorca-palm/60 transition-colors bg-mallorca-ocean/5">
              <i className="fas fa-cloud-upload-alt text-4xl text-mallorca-ocean mb-4"></i>
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
                  className="bg-gradient-to-r from-mallorca-ocean to-mallorca-sea hover:from-mallorca-sea hover:to-mallorca-ocean text-white font-poppins font-bold py-3 px-6 rounded-lg shadow-lg"
                  asChild
                >
                  <span>
                    <i className="fas fa-images mr-2"></i>
                    Fotos & Videos auswählen
                  </span>
                </Button>
              </label>
              {selectedFiles && (
                <p className="mt-4 text-sm text-mallorca-sea/60 font-poppins">
                  {selectedFiles.length} Datei(en) ausgewählt
                </p>
              )}
            </div>
            
            {/* Hochgeladene Bilder anzeigen */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {uploadedImages.map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-lg border-2 border-mallorca-palm/20">
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
                  <div className="aspect-square bg-gradient-to-br from-mallorca-ocean/20 to-mallorca-sea/20 rounded-lg flex items-center justify-center border border-mallorca-palm/30">
                    <i className="fas fa-image text-3xl text-mallorca-sea/40"></i>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-mallorca-pine/20 to-mallorca-palm/20 rounded-lg flex items-center justify-center border border-mallorca-palm/30">
                    <i className="fas fa-video text-3xl text-mallorca-sea/40"></i>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-mallorca-ocean/20 to-mallorca-pine/20 rounded-lg flex items-center justify-center border border-mallorca-palm/30">
                    <i className="fas fa-plus text-3xl text-mallorca-sea/40"></i>
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
