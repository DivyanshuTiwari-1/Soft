"use client";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <header className="relative pt-40 bg-gradient-to-r from-gray-900 to-black text-white py-24 lg:px-60">
      <div className="container mx-auto  px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Ideas into{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Success</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            We help businesses build scalable MVPs and turn innovative ideas into market-ready solutions.
          </p>
          <button
            onClick={openPopup}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-pink-500 hover:to-purple-500 transition flex items-center"
          >
            Schedule a Call
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-black">
              Schedule a Call
            </h2>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3AMo30R4iaqZzv22L6QpiDL7vY3sOWVB5X7NFUwfPQar-9PST6NsdonC_UVQnML1jbVMfLI3Qw?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              title="Google Calendar Appointment Scheduling"
            ></iframe>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeroSection;
