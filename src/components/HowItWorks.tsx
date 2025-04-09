
import React from 'react';
import { AppWindow, ScanLine, Lock } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Choose distracting apps",
      description: "Select the apps that steal your focus. Instagram, Twitter, YouTube — whatever kills your productivity.",
      icon: <AppWindow className="h-8 w-8 text-orange" />,
    },
    {
      title: "Get blocked when you open them",
      description: "When temptation strikes, Touch Keyboard blocks access with a verification screen.",
      icon: <Lock className="h-8 w-8 text-orange" />,
    },
    {
      title: "Prove you're working to unlock",
      description: "Scan your hand on keyboard with your phone camera. No keyboard? No access. Simple.",
      icon: <ScanLine className="h-8 w-8 text-orange" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            No complicated setup. No endless settings. Just brutal efficiency to keep you focused.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-gray-800 p-8 rounded-lg border border-gray-700 flex flex-col"
            >
              <div className="absolute -top-5 left-8 rounded-full bg-charcoal border border-gray-700 h-10 w-10 flex items-center justify-center text-orange font-bold">
                {index + 1}
              </div>
              
              <div className="mb-6 mt-4">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
