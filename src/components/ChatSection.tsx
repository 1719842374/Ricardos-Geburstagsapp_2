
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ChatSection = () => {
  return (
    <section id="chat" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-dancing text-party-purple mb-4">
              Chat 💬
            </CardTitle>
            <p className="text-lg text-gray-700 mb-6">
              Verbinde dich mit anderen Gästen! Wähle einen Benutzernamen und starte den Chat.
            </p>
            <div className="text-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-party-green to-party-blue hover:from-party-blue hover:to-party-green text-white font-bold py-3 px-8 rounded-full shadow-lg mb-6"
              >
                <a 
                  href="https://deadsimplechat.com/qmHSMAMkS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-comments mr-2"></i>
                  Tritt unserem Chat bei!
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden shadow-lg" id="chatContainer">
              <iframe 
                id="chat-frame" 
                src="https://deadsimplechat.com/qmHSMAMkS" 
                width="100%" 
                height="600" 
                className="border-0"
                title="Party Chat"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ChatSection;
