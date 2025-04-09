
import React from 'react';
import { Phone, LockKeyhole, KeyRound } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-4">
      <div className="hero-gradient absolute inset-0 z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Stay focused or pay the 
              <span className="gradient-text"> bloody price.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl">
              Block distracting apps — and only unlock them when you prove you're working by scanning your hand on the keyboard using your phone's camera.
            </p>
            
            <div className="pt-4">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-md">
                Join the Waitlist
              </Button>
            </div>
          </div>
          
          <div className="flex-1 md:max-w-md relative">
            <div className="scan-container bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-2xl">
              <div className="relative aspect-[9/16] bg-black rounded-xl overflow-hidden border border-gray-800 shadow-lg">
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
                        <Phone className="h-6 w-6 text-gray-400 mr-2" />
                        <span className="text-gray-300">Instagram</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-2">Prove you're working</h3>
                      <p className="text-sm text-gray-400 mb-6">Place your hand on keyboard and scan</p>
                      
                      <div className="relative w-full aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
                        <div className="scan-line animate-scan-line"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <KeyRound className="h-10 w-10 text-gray-600" />
                        </div>
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
