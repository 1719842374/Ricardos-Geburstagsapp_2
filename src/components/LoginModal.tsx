
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface LoginModalProps {
  onLogin: () => void;
}

const LoginModal = ({ onLogin }: LoginModalProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Simple password check - you can modify this
    if (password === "party2025" || password === "vivalavida") {
      onLogin();
    } else {
      setError("Falsches Passwort. Bitte versuche es erneut.");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-party-pink via-party-purple to-party-blue flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl animate-float">🎉</div>
        <div className="absolute top-20 right-20 text-5xl animate-float" style={{animationDelay: '1s'}}>🎊</div>
        <div className="absolute bottom-20 left-20 text-4xl animate-float" style={{animationDelay: '2s'}}>🎈</div>
        <div className="absolute bottom-10 right-10 text-5xl animate-float" style={{animationDelay: '0.5s'}}>🥳</div>
        <div className="absolute top-1/2 left-10 text-3xl animate-float" style={{animationDelay: '1.5s'}}>✨</div>
        <div className="absolute top-1/3 right-10 text-4xl animate-float" style={{animationDelay: '2.5s'}}>🎵</div>
      </div>

      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-2xl relative z-10">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-party-pink to-party-purple rounded-full flex items-center justify-center text-3xl animate-pulse-slow">
            🎂
          </div>
          <CardTitle className="text-3xl font-dancing bg-gradient-to-r from-party-pink to-party-purple bg-clip-text text-transparent">
            Willkommen zur Geburtstagsfeier!
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Bitte gib das Passwort ein, um fortzufahren.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="text-center text-lg py-3 border-2 border-party-purple/20 focus:border-party-purple"
            />
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
          </div>
          
          <Button 
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-party-pink to-party-purple hover:from-party-purple hover:to-party-pink text-white font-bold py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
            size="lg"
          >
            <i className="fas fa-sign-in-alt mr-2"></i>
            Anmelden
          </Button>

          <div className="text-center text-sm text-gray-500">
            <p>Hinweis: Bitte JavaScript aktivieren</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginModal;
