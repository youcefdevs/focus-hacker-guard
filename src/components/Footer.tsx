
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center w-full">
  <h2 className="text-xl font-bold text-white mb-2">TouchKeyboard</h2>
  <p className="text-sm">stay focused, earn your breaks</p>
</div>
          
        {/*
<div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6 text-sm">
  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
  <a href="#" className="hover:text-white transition-colors">Contact</a>
</div>
*/}
            
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>© {new Date().getFullYear()} TouchKeyboard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
