// // import React from 'react'

// // export default function Services() {
// //   return (
// //     <>
      
// //     </>
// //   )
// // }
// import React from "react";

// const services = [
//   {
//     title: "Digital Marketing",
//     count: "1 services",
//     color: "bg-blue-500",
//     icon: "📩",
//   },
//   {
//     title: "Business Directories",
//     count: "2 services",
//     color: "bg-green-500",
//     icon: "🧾",
//   },
//   {
//     title: "Web Development",
//     count: "1 services",
//     color: "bg-purple-500",
//     icon: "📱",
//   },
//   {
//     title: "Business Support",
//     count: "2 services",
//     color: "bg-orange-500",
//     icon: "⚙️",
//   },
// ];

// export default function Services() {
//   return (
//     <section className="bg-gray-100 py-16 px-6">
//       <div className="max-w-6xl mx-auto text-center">
        
//         {/* Title */}
//         <h2 className="text-3xl font-bold text-gray-800 mb-3">
//           Services by Category
//         </h2>
//         <p className="text-gray-600 mb-10">
//           Our services are organized into four main categories to help you find exactly what you need
//         </p>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition"
//             >
//               {/* Icon */}
//               <div
//                 className={`w-12 h-12 flex items-center justify-center text-white rounded-lg mb-4 ${service.color}`}
//               >
//                 <span className="text-xl">{service.icon}</span>
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-semibold text-gray-800">
//                 {service.title}
//               </h3>

//               {/* Count */}
//               <p className="text-sm text-gray-500 mt-1">
//                 {service.count}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


import React from "react";
import { FiSend } from "react-icons/fi";
import { FaRegListAlt } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";

const services = [
  {
    title: "Digital Marketing",
    count: "1 services",
    color: "bg-blue-500",
    icon: <FiSend />,
  },
  {
    title: "Business Directories",
    count: "2 services",
    color: "bg-green-500",
    icon: <FaRegListAlt />,
  },
  {
    title: "Web Development",
    count: "1 services",
    color: "bg-purple-500",
    icon: <FiSmartphone />,
  },
  {
    title: "Business Support",
    count: "2 services",
    color: "bg-orange-500",
    icon: <FiSettings />,
  },
];

export default function Services() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Services by Category
        </h2>
        <p className="text-gray-600 mb-10">
          Our services are organized into four main categories to help you find exactly what you need
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center text-white rounded-lg mb-4 ${service.color}`}
              >
                <span className="text-xl">{service.icon}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {service.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}