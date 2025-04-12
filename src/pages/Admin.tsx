
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [apiKey, setApiKey] = useState('');
  const [listId, setListId] = useState('');
  const [serverId, setServerId] = useState('');
  
  // Load saved values on component mount
  useEffect(() => {
    const savedApiKey = localStorage.getItem('mailchimp_api_key');
    const savedListId = localStorage.getItem('mailchimp_list_id');
    const savedServerId = localStorage.getItem('mailchimp_server_id');
    
    if (savedApiKey) setApiKey(savedApiKey);
    if (savedListId) setListId(savedListId);
    if (savedServerId) setServerId(savedServerId);
  }, []);
  
  const handleSave = () => {
    if (!apiKey || !listId || !serverId) {
      toast.error("All fields are required");
      return;
    }
    
    localStorage.setItem('mailchimp_api_key', apiKey);
    localStorage.setItem('mailchimp_list_id', listId);
    localStorage.setItem('mailchimp_server_id', serverId);
    
    toast.success("Mailchimp settings saved successfully");
  };
  
  const handleClear = () => {
    localStorage.removeItem('mailchimp_api_key');
    localStorage.removeItem('mailchimp_list_id');
    localStorage.removeItem('mailchimp_server_id');
    
    setApiKey('');
    setListId('');
    setServerId('');
    
    toast.info("Mailchimp settings cleared");
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
        </div>
        
        <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 space-y-4">
          <h2 className="text-xl font-semibold mb-4">Mailchimp Configuration</h2>
          
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="Your Mailchimp API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="bg-gray-700 border-gray-600"
            />
            <p className="text-xs text-gray-400">
              Find this in your Mailchimp account under Account → Extras → API Keys
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="listId">Audience/List ID</Label>
            <Input
              id="listId"
              placeholder="Your Mailchimp List ID"
              value={listId}
              onChange={(e) => setListId(e.target.value)}
              className="bg-gray-700 border-gray-600"
            />
            <p className="text-xs text-gray-400">
              Find this in Mailchimp under Audience → Settings → Audience name and defaults
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="serverId">Server ID</Label>
            <Input
              id="serverId"
              placeholder="Your Mailchimp Server ID (e.g., us21)"
              value={serverId}
              onChange={(e) => setServerId(e.target.value)}
              className="bg-gray-700 border-gray-600"
            />
            <p className="text-xs text-gray-400">
              This is the prefix in your Mailchimp API endpoint (e.g., us21 in us21.api.mailchimp.com)
            </p>
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button onClick={handleSave} className="bg-orange hover:bg-orange/90">
              Save Settings
            </Button>
            <Button variant="outline" onClick={handleClear} className="border-gray-600 text-gray-300">
              Clear Settings
            </Button>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              <strong>Note:</strong> These settings are stored in your browser's local storage and are only accessible on this device.
              For production use, consider implementing a server-side solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
