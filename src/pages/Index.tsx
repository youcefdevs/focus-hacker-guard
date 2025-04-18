
import React from 'react';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import FeatureList from '@/components/FeatureList';
import FounderStory from '@/components/FounderStory';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal">
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <FounderStory />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
