
import React from 'react';
import { Quote } from 'lucide-react';

const FounderStory = () => {
  return (
    <section className="py-16 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gray-800/30 rounded-xl p-8 md:p-12 border border-gray-700 relative overflow-hidden">
          <div className="absolute -top-6 -left-6 opacity-10">
            <Quote className="h-32 w-32 text-orange" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">From the Builder's Trench</h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              "I built Touch Keyboard while juggling a SaaS, university, and fighting in the ring — because I needed a weapon to fight distraction. If you're on your grind too, this app is for you."
            </p>
            
            <div className="flex items-center mt-8">
              <div className="h-12 w-12 bg-gray-700 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">The Builder</h4>
                <p className="text-sm text-gray-400">Founder, Touch Keyboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
