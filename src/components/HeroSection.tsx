
import React from 'react';
import { LockKeyhole, KeyRound } from 'lucide-react';
import { Instagram, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist-section');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-4">
      <div className="hero-gradient absolute inset-0 z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Stay focused or pay the 
              <span className="gradient-text"> price.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl">
              Block distracting apps — and only unlock them when you prove you're working by scanning your hand on the keyboard using your phone's camera.
            </p>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-md"
                onClick={scrollToWaitlist}
              >
                Join the Waitlist
              </Button>
            </div>
          </div>
          
          <div className="flex-1 md:max-w-md relative">
            <div className="scan-container bg-gray-900 rounded-3xl p-6 border-8 border-gray-800 shadow-2xl relative overflow-hidden">
              {/* Phone Frame */}
              <img 
                src="/lovable-uploads/7643e4d2-22eb-4e76-9c4e-8f0ad8a25914.png" 
                alt="Phone Frame"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none z-20"
              />
              <div className="relative aspect-[9/16] bg-black rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-full mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <LockKeyhole className="h-6 w-6 text-red mr-2" />
                        <span className="text-sm text-gray-400">App blocked</span>
                      </div>
                      <span className="text-xs text-gray-500">3:45 PM</span>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="w-full h-16 bg-gray-800 rounded-md flex items-center justify-center">
                        <Instagram className="h-6 w-6 text-gray-400 mr-2" />
                        <span className="text-gray-300">Instagram</span>
                      </div>
                      <div className="w-full h-16 bg-gray-800 rounded-md flex items-center justify-center">
                        <svg className="h-6 w-6 text-gray-400 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                        <span className="text-gray-300">TikTok</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-2">Prove you're working</h3>
                      <p className="text-sm text-gray-400 mb-6">Place your hand on keyboard and scan</p>
                      
                      <div className="relative w-full aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
                        <img 
                          src="/lovable-uploads/3bcec285-00d7-4326-a889-4ba713858d41.png" 
                          alt="Keyboard Scan" 
                          className="w-full h-full object-cover"
                        />
                        <div className="scan-line animate-scan-line"></div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="mt-3 bg-transparent border-gray-700 text-gray-300">
                        Start Scan
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
