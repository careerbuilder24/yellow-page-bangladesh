// 'use client'
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { HiOutlineBell } from "react-icons/hi";
// import { HiOutlineGlobeAlt } from "react-icons/hi";
// import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

// export default function Navbar() {
//   const [dark, setDark] = useState(false);
//   return (
//     <nav className="w-full bg-white shadow-md">
//       <div className="w-ful mx-auto px-4 py-3 flex items-center justify-between">
//         {/* LEFT SIDE */}
//         <div className="flex items-center gap-8">
//           {/* Logo */}
//           <div className="flex items-center gap-2 cursor-pointer">
//             <Image
//               src="https://i.postimg.cc/x8n10xYf/yellow.png"
//               alt="Logo"
//               width={60}
//               height={60}
//               className="object-contain"
//             />
//             <span className="text-xl font-bold text-gray-800">
//               Yellow Page Bangladesh
//             </span>
//           </div>

//           {/* Nav Links */}
//           <ul className="hidden md:flex items-center gap-6 text-gray-700 font-semibold text-sm">
//             <li>
//               <Link href="/" className="hover:text-yellow-500 transition">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/" className="hover:text-yellow-500 transition">
//                 Our Products
//               </Link>
//             </li>
//             <li>
//               <Link href="/" className="hover:text-yellow-500 transition">
//                 Our Services
//               </Link>
//             </li>
//             <li>
//               <Link href="/" className="hover:text-yellow-500 transition">
//                 Business Categories
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/contact"
//                 className="hover:text-yellow-500 transition"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="hidden md:flex items-center gap-3">
//           {/* Theme Toggle */}
//           {/* <button className="bg-[#FBF107] w-14 h-8 flex items-center rounded-full px-1 transition hover:bg-yellow-500">
//             <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center shadow">
//               ☀️
//             </div>
//           </button> */}

//           {/* Theme Toggle */}
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

//           {/* Find Local Business */}
//           <button className="bg-[#FBF107] hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold text-sm transition">
//             Find Local Business
//           </button>

//           {/* Advertise */}
//           <button className="bg-[#FBF107] hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold text-sm transition">
//             Advertise with us
//           </button>

//           {/* Notification */}
//           <button className="text-gray-700 hover:text-yellow-500 text-xl flex items-center">
//             <HiOutlineBell />
//           </button>

//           {/* Language */}
//           <div className="flex items-center gap-1 text-sm font-semibold cursor-pointer text-gray-700 hover:text-yellow-500">
//             <HiOutlineGlobeAlt className="text-xl" />
//             <span>EN</span>▼
//           </div>
//         </div>

//         {/* MOBILE MENU */}
//         <div className="md:hidden">
//           <button className="text-2xl">☰</button>
//         </div>
//       </div>
//     </nav>
//   );
// }
'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineBell,
  HiOutlineGlobeAlt,
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // ✅ Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // ✅ Update theme + save to localStorage
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

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

          {/* ✅ WORKING Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="bg-[#FBF107] w-14 h-8 flex items-center rounded-full px-1 relative transition"
          >
            <div
              className={`bg-white w-6 h-6 rounded-full flex items-center justify-center shadow transform transition duration-300 ${
                dark ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {dark ? (
                <HiOutlineMoon className="text-gray-700 text-sm" />
              ) : (
                <HiOutlineSun className="text-yellow-500 text-sm" />
              )}
            </div>
          </button>

          {/* Buttons */}
          <button className="bg-[#FBF107] px-4 py-2 rounded-lg text-sm font-semibold">
            Find Local Business
          </button>

          <button className="bg-[#FBF107] px-4 py-2 rounded-lg text-sm font-semibold">
            Advertise with us
          </button>

          {/* Icons */}
          <HiOutlineBell className="text-xl text-gray-700 dark:text-white cursor-pointer" />

          <div className="flex items-center gap-1 text-sm font-semibold cursor-pointer text-gray-700 dark:text-white">
            <HiOutlineGlobeAlt className="text-xl" />
            EN ▼
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          ☰
        </div>
      </div>
    </nav>
  );
}