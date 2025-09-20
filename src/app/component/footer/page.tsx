"use client";
import Link from "next/link";
import { Twitter, Mail } from "react-feather";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "MVP Development", href: "#services" },
        { name: "Custom Software", href: "#services" },
        { name: "Technical Consulting", href: "#services" },
        { name: "Support & Maintenance", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Team", href: "#team" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Case Studies", href: "#projects" },
        { name: "Pricing", href: "#pricing" },
        { name: "FAQ", href: "#faq" }
      ]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-xl font-cal font-semibold text-gray-900">
                SoftAI
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Building successful products through innovation and expertise. 
              We transform ideas into market-ready solutions.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://x.com/softai_site?s=08" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link 
                href="mailto:contactsoftai@gmail.com"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {currentYear} SoftAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                href="#privacy" 
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="#terms" 
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;