"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import Cal from "@calcom/embed-react";

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section id="cta" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-cal font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Ready to Build Your Future?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Schedule a call today and start your MVP development journey with our expert team.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              onClick={toggleModal}
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 text-base font-medium"
            >
              Schedule a Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
         
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={toggleModal}
        >
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                Schedule a Discovery Call
              </h3>
              <Button variant="ghost" size="icon" onClick={toggleModal}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="p-6">
              <Cal
                calLink="divyanshu-tiwari-4rauop/30min"
                style={{width:"100%",height:"100%",overflow:"scroll"}}
                config={{layout: 'month_view'}}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTASection;