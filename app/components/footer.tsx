import React from "react";
import { Button } from "@/components/ui/button"; // Adjust the import path based on your project structure

const Footer = () => {
  return (
    <footer className=" bg-green-900 text-white py-12">
      <div className="container mx-auto px-4 relative z-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">VeganVibes</h3>
            <p className="mb-4">
              At VeganVibes, we are dedicated to promoting a healthier lifestyle and a more sustainable future through plant-based living.
            </p>
            <p>&copy; {new Date().getFullYear()} VeganVibes. All rights reserved.</p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-white hover:underline">Home</a></li>
              <li><a href="/recipes" className="text-white hover:underline">Recipes</a></li>
              <li><a href="/about" className="text-white hover:underline">About Us</a></li>
              <li><a href="/contact" className="text-white hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">Instagram</a>
            </div>
            <form className="flex flex-col">
              <label htmlFor="newsletter-email" className="mb-2">Subscribe to our newsletter</label>
              <div className="flex">
                <input 
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 flex-1 rounded-l-lg border-2 border-gray-300"
                />
                <Button type="submit" className="rounded-r-lg">Subscribe</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
