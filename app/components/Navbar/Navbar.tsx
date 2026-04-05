
// 'use client'
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   HiOutlineBell,
//   HiOutlineGlobeAlt,
//   HiOutlineSun,
//   HiOutlineMoon,
// } from "react-icons/hi";

// export default function Navbar() {
//   const [dark, setDark] = useState(false);

//   // ✅ Load theme from localStorage on mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme === "dark") {
//       setDark(true);
//       document.documentElement.classList.add("dark");
//     } else {
//       setDark(false);
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   // ✅ Update theme + save to localStorage
//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [dark]);

//   return (
//     <nav className="w-full bg-white dark:bg-gray-900 shadow-md transition">
//       <div className="w-full mx-auto px-4 py-3 flex items-center justify-between">

//         {/* LEFT SIDE */}
//         <div className="flex items-center gap-8">
//           <div className="flex items-center gap-2 cursor-pointer">
//             <Image
//               src="https://i.postimg.cc/x8n10xYf/yellow.png"
//               alt="Logo"
//               width={60}
//               height={60}
//             />
//             <span className="text-xl font-bold text-gray-800 dark:text-white">
//               Yellow Page Bangladesh
//             </span>
//           </div>

//           <ul className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-300 font-semibold text-sm">
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/">Our Products</Link></li>
//             <li><Link href="/">Our Services</Link></li>
//             <li><Link href="/">Business Categories</Link></li>
//             <li><Link href="/contact">Contact</Link></li>
//           </ul>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="hidden md:flex items-center gap-3">

//           {/* ✅ WORKING Theme Toggle */}
//           <button
//             onClick={() => setDark(!dark)}
//             className="bg-[#FBF107] w-14 h-8 flex items-center rounded-full px-1 relative transition"
//           >
//             <div
//               className={`bg-white w-6 h-6 rounded-full flex items-center justify-center shadow transform transition duration-300 ${
//                 dark ? "translate-x-6" : "translate-x-0"
//               }`}
//             >
//               {dark ? (
//                 <HiOutlineMoon className="text-gray-700 text-sm" />
//               ) : (
//                 <HiOutlineSun className="text-yellow-500 text-sm" />
//               )}
//             </div>
//           </button>

//           {/* Buttons */}
//           <button className="bg-[#FBF107] px-4 py-2 rounded-lg text-sm font-semibold">
//             Find Local Business
//           </button>

//           <button className="bg-[#FBF107] px-4 py-2 rounded-lg text-sm font-semibold">
//             Advertise with us
//           </button>

//           {/* Icons */}
//           <HiOutlineBell className="text-xl text-gray-700 dark:text-white cursor-pointer" />

//           <div className="flex items-center gap-1 text-sm font-semibold cursor-pointer text-gray-700 dark:text-white">
//             <HiOutlineGlobeAlt className="text-xl" />
//             EN ▼
//           </div>
//         </div>

//         {/* MOBILE */}
//         <div className="md:hidden">
//           ☰
//         </div>
//       </div>
//     </nav>
//   );
// }

'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md transition">
      <div className="w-full mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="https://i.postimg.cc/x8n10xYf/yellow.png"
              alt="Logo"
              width={60}
              height={60}
              style={{ height: "auto" }}
            />
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              Yellow Page Bangladesh
            </span>
          </div>

          <ul className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-300 font-semibold text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Our Products</Link></li>
            <li><Link href="/">Our Services</Link></li>
            <li><Link href="/">Business Categories</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-3">

          {/* Buttons */}
          <button className="bg-[#FBF107] px-4 py-2 rounded-lg text-sm font-semibold">
            Find Local Business
          </button>

          <button className="bg-[#FBF107] px-4 py-2 rounded-lg text-sm font-semibold">
            Advertise with us
          </button>

          {/* Login Button */}
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition">
            Login
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden text-2xl cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
}