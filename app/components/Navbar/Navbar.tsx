
// 'use client'
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
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
//               style={{ height: "auto" }}
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

//           {/* Buttons */}
//           <button className="bg-[#FBF107] px-4 py-2 rounded-lg text-sm font-semibold">
//             Find Local Business
//           </button>

//           <button className="bg-[#FBF107] px-4 py-2 rounded-lg text-sm font-semibold">
//             Advertise with us
//           </button>

//           {/* Login Button */}
//           <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition">
//             Login
//           </button>
//         </div>

//         {/* MOBILE MENU ICON */}
//         <div className="md:hidden text-2xl cursor-pointer">
//           ☰
//         </div>
//       </div>
//     </nav>
//   );
// }


// 'use client'
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white dark:bg-gray-900 shadow-md transition">
//       <div className="w-full mx-auto px-4 py-3 flex items-center justify-between">

//         {/* LEFT SIDE */}
//         <div className="flex items-center gap-4 md:gap-8">
//           {/* Logo */}
//           <div className="flex items-center gap-2 cursor-pointer">
//             <Image
//               src="https://i.postimg.cc/x8n10xYf/yellow.png"
//               alt="Logo"
//               width={50}
//               height={50}
//               style={{ height: "auto" }}
//             />
//             <span className="hidden sm:block text-lg md:text-xl font-bold text-gray-800 dark:text-white">
//               Yellow Page Bangladesh
//             </span>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-gray-700 dark:text-gray-300 font-semibold text-sm">
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/">Our Products</Link></li>
//             <li><Link href="/">Our Services</Link></li>
//             <li><Link href="/">Business Categories</Link></li>
//             <li><Link href="/contact">Contact</Link></li>
//           </ul>
//         </div>

//         {/* RIGHT SIDE (Desktop) */}
//         <div className="hidden md:flex items-center gap-2 lg:gap-3">
//           <button className="bg-[#FBF107] px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-semibold">
//             Find Local Business
//           </button>

//           <button className="bg-[#FBF107] px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-semibold">
//             Advertise
//           </button>

//           <button className="bg-gray-800 text-white px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-semibold hover:bg-gray-700 transition">
//             Login
//           </button>
//         </div>

//         {/* MOBILE MENU BUTTON */}
//         <div
//           className="md:hidden text-2xl cursor-pointer"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? "✕" : "☰"}
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {isOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-4 bg-white dark:bg-gray-900 shadow-md">
//           <ul className="flex flex-col gap-3 text-gray-700 dark:text-gray-300 font-semibold text-sm">
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/">Our Products</Link></li>
//             <li><Link href="/">Our Services</Link></li>
//             <li><Link href="/">Business Categories</Link></li>
//             <li><Link href="/contact">Contact</Link></li>
//           </ul>

//           <div className="flex flex-col gap-2 pt-2">
//             <button className="bg-[#FBF107] px-4 py-2 rounded-lg text-sm font-semibold">
//               Find Local Business
//             </button>

//             <button className="bg-[#FBF107] px-4 py-2 rounded-lg text-sm font-semibold">
//               Advertise with us
//             </button>

//             <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition">
//               Login
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md transition relative">
      <div className="w-full mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3 md:gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="https://i.postimg.cc/x8n10xYf/yellow.png"
              alt="Logo"
              width={45}
              height={45}
            />

            {/* ✅ FIX: visible on mobile */}
            <span className="block text-sm sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white whitespace-nowrap">
              Yellow Page Bangladesh
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-gray-700 dark:text-gray-300 font-semibold text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Our Products</Link></li>
            <li><Link href="/">Our Services</Link></li>
            <li><Link href="/">Business Categories</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* RIGHT SIDE (Desktop) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <button className="bg-[#FBF107] px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-semibold">
            Find Local Business
          </button>

          <button className="bg-[#FBF107] px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-semibold">
            Advertise
          </button>

          <button className="bg-gray-800 text-white px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-semibold hover:bg-gray-700 transition">
            Login
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div
          className="md:hidden text-2xl cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* 🔥 OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 🔥 SLIDE-IN MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 space-y-6">

          {/* Menu Links */}
          <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-300 font-semibold">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Our Products</Link></li>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Our Services</Link></li>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Business Categories</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <button className="bg-[#FBF107] px-4 py-2 rounded-lg font-semibold">
              Find Local Business
            </button>

            <button className="bg-[#FBF107] px-4 py-2 rounded-lg font-semibold">
              Advertise with us
            </button>

            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}