
// import React from "react";
// import { Briefcase, Megaphone, Search } from "lucide-react";

// export default function MainCategories() {
//   const cards = [
//     {
//       title: "Business Directory",
//       desc: "Find businesses and services across our directories",
//       button: "Browse Directory",
//       icon: <Briefcase size={28} />,
//     },
//     {
//       title: "Advertise With Us",
//       desc: "Promote your business across our platforms",
//       button: "Learn More",
//       icon: <Megaphone size={28} />,
//     },
//     {
//       title: "Career Portal",
//       desc: "Find job opportunities and career resources",
//       button: "Visit Portal",
//       icon: <Search size={28} />,
//     },
//   ];

//   return (
//     <div className="w-full px-4 py-8">
//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="flex flex-col justify-between p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
//           >
//             <div className="flex items-start gap-4">
//               <div className="p-3 rounded-xl bg-gray-100">
//                 {card.icon}
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold">
//                   {card.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 mt-1">
//                   {card.desc}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-6 flex justify-end">
//               <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-medium px-4 py-2 rounded-lg transition">
//                 {card.button}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import React from "react";
import { Briefcase, Megaphone, Search } from "lucide-react";

export default function MainCategories() {
  const cards = [
    {
      title: "Business Directory",
      desc: "Find businesses and services across our directories",
      button: "Browse Directory",
      icon: <Briefcase size={28} />,
    },
    {
      title: "Advertise With Us",
      desc: "Promote your business across our platforms",
      button: "Learn More",
      icon: <Megaphone size={28} />,
    },
    {
      title: "Career Portal",
      desc: "Find job opportunities and career resources",
      button: "Visit Portal",
      icon: <Search size={28} />,
    },
  ];

  return (
    <div className="w-full px-4 py-8 bg-gray-50 dark:bg-gray-900 transition">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-start gap-4">
              
              {/* Icon */}
              <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white">
                {card.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {card.desc}
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-6 flex justify-end">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-medium px-4 py-2 rounded-lg transition">
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// import React from "react";
// import { Briefcase, Megaphone, Search } from "lucide-react";

// export default function MainCategories() {
//   const cards = [
//     {
//       title: "Business Directory",
//       desc: "Find businesses and services across our directories",
//       button: "Browse Directory",
//       icon: <Briefcase size={28} />,
//     },
//     {
//       title: "Advertise With Us",
//       desc: "Promote your business across our platforms",
//       button: "Learn More",
//       icon: <Megaphone size={28} />,
//     },
//     {
//       title: "Career Portal",
//       desc: "Find job opportunities and career resources",
//       button: "Visit Portal",
//       icon: <Search size={28} />,
//     },
//   ];

//   return (
//     <div className="w-full px-4 py-8 bg-gray-50 dark:bg-gray-900 transition">
//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="flex flex-col justify-between p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition"
//           >
//             <div className="flex items-start gap-4">
              
//               {/* Icon box */}
//               <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white">
//                 {card.icon}
//               </div>

//               {/* Text */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//                   {card.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
//                   {card.desc}
//                 </p>
//               </div>
//             </div>

//             {/* Button */}
//             <div className="mt-6 flex justify-end">
//               <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-medium px-4 py-2 rounded-lg transition">
//                 {card.button}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }