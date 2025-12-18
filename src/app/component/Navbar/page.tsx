// "use client";
// import React, { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { getCalApi } from "@calcom/embed-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navigationItems = [
//     { href: "#services", label: "Services" },
//     { href: "#features", label: "Features" },
//     { href: "#pricing", label: "Pricing" },
//     { href: "#projects", label: "Projects" },
//   ];

//   useEffect(() => {
//     (async function () {
//       const cal = await getCalApi({ namespace: "navbar-floating-30min" });
//       cal("ui", { styles: { branding: { brandColor: "#be185d" } } });
//     })();
//   }, []);

//   return (
//     // <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
//     //   <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     //     <div className="flex justify-between items-center py-4">
//     //       {/* Logo */}
//     //       <div className="flex items-center">
//     //         <div className="flex items-center space-x-3">
//     //           <div className="w-8 h-8 rounded-lg overflow-hidden">
               
//     //           </div>
//     //           <span className="text-xl font-cal font-semibold text-gray-900">Softmvp</span>
//     //         </div>
//     //       </div>
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
//   <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="flex justify-between items-center py-4">
      
//       {/* Logo */}
//       <div className="flex items-center">
//         <div className="flex items-center space-x-3">
          
//           {/* Company Logo Image */}
//           <div className="w-10 h-10 rounded-lg overflow-hidden">
//             <img
//               src="/photo/logo.png"   // <- Put your PNG in public folder
//               alt="Softmvp Logo"
//               className="w-full h-full object-contain"
//             />
//           </div>

//           <span className="text-xl font-cal font-semibold text-gray-900">
//             Softmvp
//           </span>

//         </div>
//       </div>


//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navigationItems.map((item) => (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
//               >
//                 {item.label}
//               </a>
//             ))}
//             <Button
//               className="bg-pink-700 hover:bg-pink-800 text-white text-sm"
//               data-cal-link="divyanshu-tiwari-4rauop/30min"
//               data-cal-namespace="navbar-floating-30min"
//               data-cal-config='{"layout":"month_view"}'
//             >
//               Contact Us
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="h-10 w-10 p-0 border border-gray-300 hover:border-gray-400 hover:bg-gray-50"
//             >
//               {isMenuOpen ? <X size={20} className="text-gray-900" /> : <Menu size={20} className="text-gray-900" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Menu */}

//         {isMenuOpen && (
//   <div className="md:hidden absolute top-full right-4 mt-2 bg-white rounded-lg border border-black shadow-lg z-40 w-45">
//     <div className="py-4 space-y-2">
//       {navigationItems.map((item) => (
//         <a
//           key={item.href}
//           href={item.href}
//           className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors rounded-md"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           {item.label}
//         </a>
//       ))}

//       <div className="px-4 pt-2">
//         <Button
//           className="w-50 bg-pink-700 hover:bg-pink-800 text-white text-sm rounded-lg"
//           data-cal-link="divyanshu-tiwari-4rauop/30min"
//           data-cal-namespace="navbar-floating-30min"
//           data-cal-config='{"layout":"month_view"}'
//           onClick={() => setIsMenuOpen(false)}
//         >
//           Contact Us
//         </Button>
//       </div>
//     </div>
//   </div>
// )}

//       </nav>
//     </header>
//   );
// };



"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import Image from "next/image";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: "#services", label: "Services" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#projects", label: "Projects" },
  ];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "navbar-floating-30min" });
      cal("ui", { styles: { branding: { brandColor: "#be185d" } } });
    })();
  }, []);

  // No scroll lock - allow scrolling behind the menu

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                {/* <div className="w-10 h-10 rounded-lg overflow-hidden">
                  <Image
                    src="/photo/logo.png"
                    alt="Softmvp Logo"
                    className="w-full h-full object-contain"
                  />
                </div> */}
                <div className="w-10 h-10 rounded-lg overflow-hidden relative">
  <Image
    src="/photo/logo.png"
    alt="Softmvp Logo"
    fill
    className="object-contain"
  />
</div>
                <span className="text-xl font-cal font-semibold text-gray-900">
                  Softmvp
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="bg-pink-700 hover:bg-pink-800 text-white text-sm"
                data-cal-link="divyanshu-tiwari-4rauop/30min"
                data-cal-namespace="navbar-floating-30min"
                data-cal-config='{"layout":"month_view"}'
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="h-10 w-10 p-0 border border-gray-300 hover:border-gray-400 hover:bg-gray-50"
              >
                {isMenuOpen ? (
                  <X size={20} className="text-gray-900" />
                ) : (
                  <Menu size={20} className="text-gray-900" />
                )}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed left-0 right-0 z-[100] bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible -translate-y-4"
        }`}
        style={{ top: "73px" }}
      >
        <div className="px-6 py-6 space-y-5">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-base font-medium text-gray-800 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          
          <Button
            className="w-full bg-pink-700 hover:bg-pink-800 text-white text-base py-5 rounded-lg mt-4"
            data-cal-link="divyanshu-tiwari-4rauop/30min"
            data-cal-namespace="navbar-floating-30min"
            data-cal-config='{"layout":"month_view"}'
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

