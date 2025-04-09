
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight } from 'lucide-react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("You've joined the waitlist!");
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be First In Line
          </h2>
          <p className="text-gray-400 mb-8 md:text-lg">
            Join the waitlist to get early access. Build without distraction sooner.
          </p>
          
          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-gray-700 border-gray-600 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-orange hover:bg-orange/90 text-white font-bold"
              >
                {isSubmitting ? (
                  "Joining..."
                ) : (
                  <>
                    Join the Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
            
            <p className="text-gray-500 text-sm mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center">
              <span className="inline-block h-3 w-3 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              Development in progress
            </span>
            <span>Expected Launch: Q4 2023</span>
            <span>Android Only (for now)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
