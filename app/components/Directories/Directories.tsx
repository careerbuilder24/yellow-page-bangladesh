// import React from 'react'

// export default function Directories() {
//   return (
//     <>
      
//     </>
//   )
// }
// import React from "react";
// import { FaTshirt, FaBuilding, FaShoppingBag, FaDesktop, FaDatabase, FaMobileAlt, FaCar, FaPlane } from "react-icons/fa";

// const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// const categories = [
//   { name: "Garments, Buying & Apparels", icon: <FaTshirt size={40} /> },
//   { name: "Real Estate & Properties", icon: <FaBuilding size={40} /> },
//   { name: "Shopping & eCommerce", icon: <FaShoppingBag size={40} /> },
//   { name: "Computer & Electronics", icon: <FaDesktop size={40} /> },
//   { name: "IT & Software", icon: <FaDatabase size={40} /> },
//   { name: "Telecommunication", icon: <FaMobileAlt size={40} /> },
//   { name: "Car & Vehicles", icon: <FaCar size={40} /> },
//   { name: "Tours & Travels", icon: <FaPlane size={40} /> },
// ];

// export default function Directories() {
//   return (
//     <div>
//       {/* Top A-Z Bar */}
//       <div className="bg-green-600 p-3 flex flex-wrap items-center gap-2 justify-center">
//         <span className="text-yellow-300 font-semibold border px-3 py-1">
//           A-Z Business
//         </span>
//         {alphabet.map((letter) => (
//           <button
//             key={letter}
//             className="border border-yellow-300 text-yellow-300 px-2 py-1 text-sm hover:bg-yellow-300 hover:text-green-700 transition"
//           >
//             {letter}
//           </button>
//         ))}
//       </div>

//       {/* Categories Section */}
//       <div className="bg-gray-100 py-10 px-4 text-center">
//         <h2 className="text-3xl font-serif italic mb-6">
//           Popular Categories
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {categories.map((cat, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 border rounded shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-3"
//             >
//               <div className="text-green-600">{cat.icon}</div>
//               <p className="text-gray-700 font-medium text-sm">
//                 {cat.name}
//               </p>
//             </div>
//           ))}
//         </div>

//         <button className="mt-8 bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
//           ALL CATEGORIES
//         </button>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { FaTshirt, FaBuilding, FaShoppingBag, FaDesktop, FaDatabase, FaMobileAlt, FaCar, FaPlane } from "react-icons/fa";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const categories = [
  { name: "Garments, Buying & Apparels", icon: <FaTshirt size={40} /> },
  { name: "Real Estate & Properties", icon: <FaBuilding size={40} /> },
  { name: "Shopping & eCommerce", icon: <FaShoppingBag size={40} /> },
  { name: "Computer & Electronics", icon: <FaDesktop size={40} /> },
  { name: "IT & Software", icon: <FaDatabase size={40} /> },
  { name: "Telecommunication", icon: <FaMobileAlt size={40} /> },
  { name: "Car & Vehicles", icon: <FaCar size={40} /> },
  { name: "Tours & Travels", icon: <FaPlane size={40} /> },
];

export default function Directories() {
  return (
    <div>
      {/* Top A-Z Bar */}
      <div className="bg-[#FDEE21] p-3 flex flex-wrap items-center gap-2 justify-center">
        <span className="text-black font-semibold border border-black px-3 py-1">
          A-Z Business
        </span>
        {alphabet.map((letter) => (
          <button
            key={letter}
            className="border border-black text-black px-2 py-1 text-sm hover:bg-black hover:text-[#FDEE21] transition"
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Categories Section */}
      <div className="bg-gray-100 py-10 px-4 text-center">
        <h2 className="text-3xl font-serif italic mb-6 text-black">
          Popular Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white p-6 border border-gray-200 rounded shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-3"
            >
              <div className="text-black">{cat.icon}</div>
              <p className="text-gray-700 font-medium text-sm text-center">
                {cat.name}
              </p>
            </div>
          ))}
        </div>

        <button className="mt-8 bg-black text-[#FDEE21] px-6 py-2 rounded hover:opacity-90 transition">
          ALL CATEGORIES
        </button>
      </div>
    </div>
  );
}
