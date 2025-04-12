
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight, AlertCircle, Info } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [configError, setConfigError] = useState(false);
  const [showImplementationNote, setShowImplementationNote] = useState(false);

  // Check if Mailchimp is configured
  React.useEffect(() => {
    const apiKey = localStorage.getItem('mailchimp_api_key');
    const listId = localStorage.getItem('mailchimp_list_id');
    const serverId = localStorage.getItem('mailchimp_server_id');
    
    setConfigError(!apiKey || !listId || !serverId);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // Get Mailchimp settings from localStorage
    const apiKey = localStorage.getItem('mailchimp_api_key');
    const listId = localStorage.getItem('mailchimp_list_id');
    const serverId = localStorage.getItem('mailchimp_server_id');
    
    if (!apiKey || !listId || !serverId) {
      toast.error("Mailchimp not configured. Please set up API credentials in the admin panel.");
      setConfigError(true);
      return;
    }

    setShowImplementationNote(true);
    toast.error("Direct API calls to Mailchimp are blocked by CORS. See implementation notes below.");
    
    // For demo purposes, we'll simulate a successful submission
    // In a real implementation, you would use a server-side API or proxy
    toast.info(`Would add ${email} to the waitlist (if using server-side implementation)`);
    
    // Note: The below code is kept as reference but won't work due to CORS
    /*
    setIsSubmitting(true);
    
    try {
      console.log("Submitting to Mailchimp...", {
        serverUrl: `https://${serverId}.api.mailchimp.com/3.0/lists/${listId}/members`,
        email,
        // Avoid logging the full API key
        apiKeyConfigured: apiKey ? "Yes (configured)" : "No"
      });
      
      // This would typically be handled by a server-side function
      // Here we're using a client-side approach for demo purposes
      const response = await fetch(`https://${serverId}.api.mailchimp.com/3.0/lists/${listId}/members`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Note: In production, you should NOT expose your API key in client-side code
          // This is for demonstration only - you should use a backend service
          "Authorization": `Basic ${btoa(`anystring:${apiKey}`)}`
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: {
            SOURCE: "Touch Keyboard Waitlist"
          }
        }),
      });
      
      const responseData = await response.json();
      console.log("Mailchimp response:", responseData);
      
      if (response.ok) {
        toast.success("You've joined the waitlist!");
        setEmail('');
      } else {
        // Check if the user is already subscribed
        if (responseData.title === "Member Exists") {
          toast.info("You're already on our waitlist!");
        } else {
          console.error("Mailchimp error details:", responseData);
          toast.error(`Failed to join waitlist: ${responseData.title || 'Unknown error'}`);
        }
      }
    } catch (error) {
      console.error("Error submitting to Mailchimp:", error);
      toast.error(`Failed to join waitlist: ${error instanceof Error ? error.message : 'Network error'}`);
    } finally {
      setIsSubmitting(false);
    }
    */
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
            {configError && (
              <Alert variant="destructive" className="mb-4 bg-red-900/20 border-red-800 text-red-300">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Mailchimp is not configured. Please <a href="/admin" className="underline font-medium">set up your API credentials</a> in the admin panel first.
                </AlertDescription>
              </Alert>
            )}
            
            {showImplementationNote && (
              <Alert className="mb-4 bg-blue-900/20 border-blue-800 text-blue-300">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <p className="font-medium mb-1">Implementation Note:</p>
                  <p className="text-sm">
                    Direct API calls to Mailchimp from the browser are blocked by CORS. For a production implementation:
                  </p>
                  <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                    <li>Create a server-side API endpoint/proxy that makes the Mailchimp API call</li>
                    <li>Use a serverless function (e.g., Netlify, Vercel, or AWS Lambda)</li>
                    <li>Implement a backend service to handle the subscription</li>
                  </ul>
                </AlertDescription>
              </Alert>
            )}
            
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
                disabled={isSubmitting || configError}
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
