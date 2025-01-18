// components/CTASection.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section id="cta" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build Your{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Future?
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-6">
          Schedule a call today and start your MVP development journey with us.
        </p>
        <Button
          onClick={toggleModal}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500 transition"
        >
          Schedule a Call
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={toggleModal} // Close modal on outside click
        >
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">
              Schedule a Call with Us
            </h3>
            <div className="relative w-full h-[600px]">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3AMo30R4iaqZzv22L6QpiDL7vY3sOWVB5X7NFUwfPQar-9PST6NsdonC_UVQnML1jbVMfLI3Qw?gv=true"
                style={{ border: "0" }}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTASection;
