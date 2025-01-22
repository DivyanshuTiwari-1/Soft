"use client"
import Link from "next/link";
import {Twitter,Mail } from "react-feather";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
           
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">SoftAI</h3>
            <p className="text-gray-400">Building successful products through innovation and expertise.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-purple-400 transition-colors cursor-pointer">
                <Link href="https://example.com/mvp-development">MVP Development</Link>
              </li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">
                <Link href="https://example.com/custom-software">Custom Software</Link>
              </li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">
                <Link href="https://example.com/consulting">Consulting</Link>
              </li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">
                <Link href="https://example.com/support">Support</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-purple-400 transition-colors cursor-pointer">
                <Link href="/">About</Link>
              </li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">
                <Link href="/">Careers</Link>
              </li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">
                <Link href="/">Blog</Link>
              </li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Link href="https://x.com/softai_site?s=08" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer" />
                  <span>Twitter</span>
                </Link>
              </li>
              
              <li className="flex items-center space-x-2">
                <Link href="mailto:contactsoftai@gmail.com" className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer" />
                  <span>Email</span>
                </Link>
              </li>
             
            
            </ul>
          </div>
        </div>
       
      </div>
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} SoftAI. All rights reserved.</p>
      </div>
    </footer>
    
  );
};

export default Footer;
