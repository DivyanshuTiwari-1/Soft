// "use client";
// import React, { useEffect, useState } from "react";
// import { Check, Zap, Clock3, Sparkles, X } from "lucide-react";
// import { getCalApi } from "@calcom/embed-react";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

// const PricingSection = () => {
//   const [isPricingPopupOpen, setIsPricingPopupOpen] = useState(false);

//   const openPricingPopup = () => setIsPricingPopupOpen(true);
//   const closePricingPopup = () => setIsPricingPopupOpen(false);

//   useEffect(() => {
//     if (isPricingPopupOpen) {
//       (async function () {
//         const cal = await getCalApi({ namespace: "modal-30min" });
//         cal("inline", {
//           elementOrSelector: "#cal-pricing-booking-place",
//           calLink: "divyanshu-tiwari-4rauop/30min",
//           config: {
//             layout: "month_view",
//             theme: "light",
//           },
//         });
//       })();
//     }
//   }, [isPricingPopupOpen]);
//   const pricingPlans = [
//     {
//       name: "MVP",
//       price: "$2,500",
//       description: "Perfect for validating your idea quickly",
//       features: [
//         "Core features development",
//         "Full-stack implementation",
//         "30-day delivery",
//         "Launch-ready product",
//         "Basic support",
//       ],
//       popular: true,
//       cta: "Get Started",
//     },
//   ];

//   return (
//     <section id="pricing" className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-24">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <Badge className="bg-black text-white px-3 py-1">Built for founders</Badge>
//           <h2 className="mt-6 text-4xl font-cal font-semibold tracking-tight text-gray-900 sm:text-5xl">
//             MVPs, shipped in weeks—not quarters
//           </h2>
//           <p className="mt-5 text-lg leading-7 text-gray-600 max-w-3xl mx-auto">
//             We stripped everything back to a single, high-impact offer so you can validate faster,
//             launch smarter, and keep your runway intact.
//           </p>
//         </div>

//         <div className="relative isolate overflow-hidden rounded-3xl border border-gray-200 bg-white/80 shadow-2xl">
//           <div className="absolute inset-y-0 left-1/2 w-1/2 bg-gradient-to-r from-pink-100/60 via-purple-100/50 to-blue-100/40 blur-3xl opacity-70 -z-10" />
//           <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-stretch">
//             {pricingPlans.map((plan) => (
//               <React.Fragment key={plan.name}>
//                 <div className="p-10 lg:p-12 flex flex-col gap-8">
//                   <div className="flex flex-wrap items-center gap-4">
//                     <Badge className="bg-black text-white px-4 py-1 rounded-full text-sm">MVP Sprint</Badge>
//                     <div className="flex items-center gap-2 text-sm text-gray-500">
//                       <Clock3 className="w-4 h-4" />
//                       30-day delivery
//                     </div>
//                     <div className="flex items-center gap-2 text-sm text-gray-500">
//                       <Zap className="w-4 h-4 text-yellow-500" />
//                       Launch-ready handoff
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="text-3xl font-semibold text-gray-900">
//                       {plan.name} Build
//                     </h3>
//                     <p className="mt-3 text-gray-600">
//                       {plan.description}
//                     </p>
//                   </div>

//                   <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
//                     <div>
//                       <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Flat investment</p>
//                       <p className="text-5xl font-bold text-gray-900">{plan.price}</p>
//                       <p className="text-sm text-gray-500 mt-1">No surprises or hidden fees</p>
//                     </div>
//                     <div className="sm:ml-auto">
//                       <Button
//                         onClick={openPricingPopup}
//                         className="w-full bg-black text-white hover:bg-gray-900 px-8 py-6 text-base"
//                       >
//                         {plan.cta}
//                       </Button>
//                       <p className="text-xs text-gray-500 mt-2 text-center">Free discovery call included</p>
//                     </div>
//                   </div>

//                   <div>
//                     <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">What you get</p>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       {plan.features.map((feature, i) => (
//                         <div
//                           key={i}
//                           className="flex items-start gap-3 rounded-2xl border border-gray-200/80 bg-gray-50/70 p-4"
//                         >
//                           <div className="rounded-full bg-green-100 p-1">
//                             <Check className="h-4 w-4 text-green-600" />
//                           </div>
//                           <span className="text-gray-700">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="relative border-t lg:border-l border-gray-100 bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white p-10 lg:p-12 flex flex-col gap-8">
//                   <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)]" />
//                   <div className="relative space-y-6">
//                     <div className="flex items-center gap-3">
//                       <Sparkles className="w-5 h-5 text-pink-300" />
//                       <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Road to launch</p>
//                     </div>
//                     <h4 className="text-3xl font-semibold leading-tight">
//                       Designed for founders who need momentum—not maintenance.
//                     </h4>
//                     <p className="text-gray-300">
//                       We run a tight, battle-tested process focused on the essentials: rapid workshops,
//                       weekly demos, and a launch-ready handoff so you can start getting users immediately.
//                     </p>
//                   </div>

//                   <div className="relative grid gap-4">
//                     {[
//                       { label: "Week 1", detail: "Scope sprint & high-fidelity UX" },
//                       { label: "Weeks 2-3", detail: "Core build, integrations, QA" },
//                       { label: "Week 4", detail: "Polish, launch assets & support" },
//                     ].map((item) => (
//                       <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
//                         <p className="text-xs uppercase tracking-[0.4em] text-gray-300">{item.label}</p>
//                         <p className="text-sm mt-1 text-white">{item.detail}</p>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="relative flex flex-wrap gap-3 text-sm text-gray-200 pt-2 border-t border-white/10">
//                     <span className="rounded-full border border-white/20 px-4 py-1">Tech stack included</span>
//                     <span className="rounded-full border border-white/20 px-4 py-1">Hand-off + docs</span>
//                     <span className="rounded-full border border-white/20 px-4 py-1">Launch checklist</span>
//                   </div>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </div>
//       </div>

//       {isPricingPopupOpen && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
//             <div className="flex items-center justify-between p-6 border-b border-gray-200">
//               <h2 className="text-xl font-semibold text-gray-900">Schedule a Call</h2>
//               <Button onClick={closePricingPopup} variant="ghost" size="sm" className="h-8 w-8 p-0">
//                 <X className="h-4 w-4" />
//               </Button>
//             </div>
//             <div className="p-6">
//               <div
//                 id="cal-pricing-booking-place"
//                 className="w-full min-h-[600px]"
//                 style={{ width: "100%", height: "600px" }}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default PricingSection;



"use client";

import { Check } from "lucide-react";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const PricingSection = () => {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "pricing" });
      cal("ui", { theme: "light" });
    })();
  }, []);

  const openCal = () => {
    window.Cal("modal", {
      calLink: "divyanshu-tiwari-4rauop/30min",
    });
  };

  return (
    <section id="pricing" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Simple, transparent pricing to help you launch faster
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Frontend Development */}
          <div className="border border-gray-200 rounded-2xl p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900">
              Frontend Development
            </h3>
            {/* <p className="text-gray-500 mt-1">Basic Web Package</p> */}

            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl font-bold text-gray-900">$800</span>
              <span className="text-gray-500">USD</span>
            </div>

            <ul className="mt-8 space-y-4 flex-1">
              {[
                "Responsive website for users",
                "Convert your design into working website",
                "Connect external services/APIs",
                "Smooth animations and transitions",
                "Help when you need it",
                "20–30 day delivery",
                "Unlimited changes until you are happy",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-pink-700 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            {/* Get Started Button */}
            {/* <button
              onClick={openCal}
              className="mt-8 w-full rounded-xl bg-white border border-gray-400 text-gray-800 hover:bg-gray-50 py-3 font-medium  transition"
            >
              Get Started
            </button> */}
            <button
  onClick={openCal}
  className="mt-8 w-full rounded-xl 
             bg-white border border-gray-400 
             text-gray-800 
             hover:bg-black hover:text-white 
             py-3 font-medium 
             transition-colors duration-300"
>
  Get Started
</button>
          </div>

          {/* MVP Development */}
          <div className="relative border-2 border-pink-700 rounded-2xl p-8 shadow-lg flex flex-col">

            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-700 text-white text-sm font-medium px-4 py-1 rounded-full">
              Recommended
            </span>

            <h3 className="text-xl font-semibold text-gray-900">
              MVP Development
            </h3>
            {/* <p className="text-gray-500 mt-1">Complete Starter Package</p> */}

            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl font-bold text-gray-900">$25,00</span>
              <span className="text-gray-500">USD</span>
            </div>

            <ul className="mt-8 space-y-4 flex-1">
              {[
                "Complete web app",
                "Admin dashboard & user management",
                "Custom design for your brand",
                "Backend & database setup",
                "Delivery within 30 days",
                "Deployment & production setup",
                "Testing & QA",
                "Unlimited changes until you are happy",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-pink-700 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            {/* Get Started Button */}
            <button
              onClick={openCal}
              className="mt-8 w-full rounded-xl bg-pink-700 text-white py-3 font-medium hover:bg-pink-800 transition"
            >
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
