
import React from 'react';
import { LockKeyhole } from 'lucide-react';
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
              <span className="gradient-text whitespace-nowrap block">Touch Keyboard: </span>
              Stay focused or pay the price.
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
          
          <div className="flex-1 md:max-w-md max-w-[280px] mx-auto relative">
            <div className="phone-container relative w-full">
              {/* Phone Frame */}
              <img 
                src="/lovable-uploads/7643e4d2-22eb-4e76-9c4e-8f0ad8a25914.png" 
                alt="Phone Frame"
                className="w-full h-auto pointer-events-none z-20 relative"
              />
              
              {/* Phone Content (Positioned Absolutely Within the Frame) */}
              <div className="absolute top-0 left-[9%] right-[9%] bottom-0 bg-black rounded-[20px] overflow-hidden">
                <div className="w-full h-full flex flex-col p-4">
                  {/* App Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <LockKeyhole className="h-5 w-5 text-red mr-2" />
                      <span className="text-xs sm:text-sm text-gray-400">Apps blocked</span>
                    </div>
                    <span className="text-xs text-gray-500">3:45 PM</span>
                  </div>
                  
                  {/* Blocked Apps List */}
                  <div className="space-y-2 mb-6">
                    <div className="w-full h-10 bg-gray-800/50 rounded-md flex items-center px-3">
                      <img 
                        src="/lovable-uploads/12668522-7374-4d3e-a645-4b091a97882e.png" 
                        alt="Instagram" 
                        className="h-5 w-5 mr-3"
                      />
                      <span className="text-xs sm:text-sm text-gray-300">Instagram</span>
                    </div>
                    <div className="w-full h-10 bg-gray-800/50 rounded-md flex items-center px-3">
                      <img 
                        src="/lovable-uploads/46748eec-7644-4c51-be6a-27c2da6f4c5f.png" 
                        alt="TikTok" 
                        className="h-5 w-5 mr-3"
                      />
                      <span className="text-xs sm:text-sm text-gray-300">TikTok</span>
                    </div>
                  </div>
                  
                  {/* Scan Section */}
                  <div className="text-center mt-auto mb-4">
                    <h3 className="text-sm sm:text-base font-semibold mb-1">Prove you're working</h3>
                    <p className="text-xs text-gray-400 mb-3">Place your hand on keyboard and scan</p>
                    
                    <div className="relative w-full aspect-video bg-gray-800 rounded-lg mb-3 overflow-hidden">
                      <img 
                        src="/lovable-uploads/3bcec285-00d7-4326-a889-4ba713858d41.png" 
                        alt="Keyboard Scan" 
                        className="w-full h-full object-cover"
                      />
                      <div className="scan-line"></div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent border-gray-700 text-gray-300 py-1 h-8">
                      Start Scan
                    </Button>
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
