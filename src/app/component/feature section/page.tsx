// "use client";
// import { Zap, CheckCircle, Users } from "lucide-react";

// const FeaturesSection = () => {
//   const features = [
//     {
//       icon: <Zap className="h-6 w-6 text-gray-900" />,
//       title: "Fast Delivery",
//       description: "Get your MVP to market quickly with our streamlined development process"
//     },
//     {
//       icon: <CheckCircle className="h-6 w-6 text-gray-900" />,
//       title: "Quality Assured",
//       description: "High-quality code with comprehensive testing and best practices"
//     },
//     {
//       icon: <Users className="h-6 w-6 text-gray-900" />,
//       title: "Expert Team",
//       description: "Work with experienced developers and designers who understand your vision"
//     }
//   ];

//   return (
//     <section id="features" className="bg-white py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-cal font-semibold tracking-tight text-gray-900 sm:text-4xl">
//             Why Choose Us
//           </h2>
//           <p className="mt-4 text-lg leading-6 text-gray-600 max-w-2xl mx-auto">
//             We combine technical expertise with business understanding to deliver exceptional results
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
//           {features.map((feature, index) => (
//             <div key={index} className="text-center lg:text-left">
//               <div className="flex items-center justify-center lg:justify-start">
//                 <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4">
//                   {feature.icon}
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600 leading-6">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;



// import { Zap, CheckCircle, Users } from "lucide-react";

// const FeaturesSection = () => {
//   const features = [
//     {
//       icon: Zap,
//       title: "Fast Delivery",
//       description: "Get your MVP to market quickly with our streamlined development process"
//     },
//     {
//       icon: CheckCircle,
//       title: "Quality Assured",
//       description: "High-quality code with comprehensive testing and best practices"
//     },
//     {
//       icon: Users,
//       title: "Expert Team",
//       description: "Work with experienced developers and designers who understand your vision"
//     }
//   ];

//   return (
//     <section id="features" className="bg-background  py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
//             Why Choose Us
//           </h2>
//           <p className="mt-4 text-lg leading-6 text-muted-foreground max-w-2xl mx-auto">
//             We combine technical expertise with business understanding to deliver exceptional results
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <div 
//                 key={index} 
//                 className="group relative border border-border rounded-lg p-8 transition-all duration-300 ease-in-out cursor-pointer hover:bg-primary hover:border-primary"
//               >
//                 <div className="flex items-center justify-center md:justify-start">
//                   <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg mb-4 transition-colors duration-300 group-hover:bg-primary-foreground/20">
//                     <Icon className="h-6 w-6 text-foreground transition-colors duration-300 group-hover:text-primary-foreground" />
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground mb-3 text-center md:text-left transition-colors duration-300 group-hover:text-primary-foreground">
//                   {feature.title}
//                 </h3>
//                 <p className="text-muted-foreground leading-6 text-center md:text-left transition-colors duration-300 group-hover:text-primary-foreground/70">
//                   {feature.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;





import { Zap, CheckCircle, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Get your MVP to market quickly with our streamlined development process",
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description:
        "High-quality code with comprehensive testing and best practices",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Work with experienced developers and designers who understand your vision",
    },
  ];

  return (
    <section id="features" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            We combine technical expertise with business understanding to deliver exceptional results
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="
                  group rounded-xl p-8 cursor-pointer
                  border border-gray-100
                  transition-all duration-300 ease-in-out
                  hover:bg-black hover:border-black hover:shadow-lg
                "
              >
                {/* Icon */}
                <div className="flex items-center justify-center md:justify-start">
                  <div
                    className="
                      w-12 h-12 mb-4 rounded-lg
                      flex items-center justify-center
                      bg-gray-100
                      transition-all duration-300
                      group-hover:bg-white/20
                    "
                  >
                    <Icon className="h-6 w-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center md:text-left group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-center md:text-left leading-6 group-hover:text-white/70 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
