
import React from 'react';
import { ShieldCheck, Zap, Fingerprint, Layout, BarChart } from 'lucide-react';

const FeatureList = () => {
  const features = [
    {
      title: "Block selected distractions",
      description: "Target only the apps that waste your time. Keep what you need, block what you don't.",
      icon: <ShieldCheck className="h-8 w-8 text-orange" />,
    },
    {
      title: "Hand-on-keyboard verification",
      description: "Uses your phone's camera to check if your hands are where they should be—on the keyboard.",
      icon: <Fingerprint className="h-8 w-8 text-orange" />,
    },
    {
      title: "No cheating",
      description: "Smart verification system analyzes hand position. You can't fool it with photos or objects.",
      icon: <BarChart className="h-8 w-8 text-orange" />,
    },
    {
      title: "Simple UI, fast onboarding",
      description: "Set up in under 60 seconds. No tutorials needed. Just pure functionality.",
      icon: <Layout className="h-8 w-8 text-orange" />,
    },
    {
      title: "Earn your freedom",
      description: "Want your distractions back? Prove you've been working first. Freedom is earned, not given.",
      icon: <Zap className="h-8 w-8 text-orange" />,
    },
  ];

  return (
    <section className="py-16 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built for people who demand hardcore focus. No frills, just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-orange/30 transition-all"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureList;
