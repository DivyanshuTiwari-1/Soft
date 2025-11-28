"use client";
import { ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";

const HeroSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Initialize Cal.com embed
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("floatingButton", {
        calLink: "divyanshu-tiwari-4rauop/30min",
        buttonText: "Book a Call",
        buttonColor: "#be185d",  // dark pink
        buttonTextColor: "#ffffff",
        config: {
          layout: "month_view",
        },
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  // Handle Cal.com inline embed for modal
  useEffect(() => {
    if (isPopupOpen) {
      (async function () {
        const cal = await getCalApi({"namespace":"modal-30min"});
        cal("inline", {
          "elementOrSelector": "#cal-booking-place",
          "calLink": "divyanshu-tiwari-4rauop/30min",
          "config": {
            "layout": "month_view",
            "theme": "light"
          }
        });
      })();
    }
  }, [isPopupOpen]);                          

  return (
    <section className="bg-white relative overflow-hidden">
      {/* Dotted Grid Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-32 pb-16 text-center lg:pt-40">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-cal font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Transform Your Ideas into{" "}
              <span className="text-black">Product</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              We help businesses build scalable MVPs and turn ideas into market-ready solutions in just 4 weeks
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                onClick={openPopup}
                className="bg-pink-700 hover:bg-pink-800 text-white px-6 py-3 text-base font-medium"

              >
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cal.com Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Schedule a Call
              </h2>
              <Button
                onClick={closePopup}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-6">
              {/* Cal.com Inline Embed Container */}
              <div 
                id="cal-booking-place" 
                className="w-full min-h-[600px]"
                style={{ width: '100%', height: '600px' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;