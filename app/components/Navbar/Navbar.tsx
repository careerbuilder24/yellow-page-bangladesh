// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white dark:bg-gray-900 shadow-md relative">
//       <div className="w-full mx-auto px-3 sm:px-4 py-3 flex items-center justify-between">
//         {/* LEFT */}
//         <div className="flex items-center gap-2 xl:gap-6 min-w-0">
//           {/* LOGO */}
//           <div className="flex items-center gap-2 min-w-0">
//             <Image
//               src="https://i.postimg.cc/x8n10xYf/yellow.png"
//               alt="Logo"
//               width={36}
//               height={36}
//               className="flex-shrink-0"
//             />

//             {/* Mobile */}
//             <span className="block sm:hidden text-sm font-bold truncate">
//               Yellow Page Bangladesh
//             </span>

//             {/* Tablet */}
//             <span className="hidden sm:block xl:hidden text-base font-bold truncate">
//               Yellow Page Bangladesh
//             </span>

//             {/* Desktop */}
//             <span className="hidden xl:block text-lg font-bold whitespace-nowrap">
//               Yellow Page Bangladesh
//             </span>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden xl:flex items-center gap-6 text-gray-700 dark:text-gray-300 font-semibold text-sm">
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//             <li>
//               <Link href="/">Our Products</Link>
//             </li>
//             <li>
//               <Link href="/">Our Services</Link>
//             </li>
//             <li>
//               <Link href="/">Business Categories</Link>
//             </li>
//             <li>
//               <Link href="/contact">Contact</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Desktop Buttons */}
//         <div className="hidden xl:flex items-center gap-3">
//           <button className="bg-[#FBF107] px-4 py-2 rounded-lg text-sm font-semibold">
//             Find Local Business
//           </button>
//           <button className="bg-[#FBF107] px-4 py-2 rounded-lg text-sm font-semibold">
//             Advertise
//           </button>
//           <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold">
//             Login
//           </button>
//         </div>

//         {/* MENU BUTTON (Mobile + Tablet) */}
//         <div
//           className="xl:hidden text-2xl cursor-pointer z-50"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? "✕" : "☰"}
//         </div>
//       </div>

//       {/* OVERLAY */}
//       <div
//         className={`fixed inset-0 bg-black/40 z-40 transition ${
//           isOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={() => setIsOpen(false)}
//       />

//       {/* SIDEBAR */}
//       <div
//         className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 z-50 shadow-lg transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="p-5 space-y-6">
//           {/* Sidebar Header */}
//           <div className="flex items-center justify-between border-b pb-4">
//             <div className="flex items-center gap-2">
//               <Image
//                 src="https://i.postimg.cc/x8n10xYf/yellow.png"
//                 alt="Logo"
//                 width={36}
//                 height={36}
//               />
//               <span className="font-bold text-lg">Yellow Page Bangladesh</span>
//             </div>

//             <button onClick={() => setIsOpen(false)} className="text-xl">
//               ✕
//             </button>
//           </div>

//           {/* Links */}
//           <ul className="flex flex-col gap-4 font-semibold text-gray-700 dark:text-gray-300">
//             <li>
//               <Link href="/" onClick={() => setIsOpen(false)}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/" onClick={() => setIsOpen(false)}>
//                 Our Products
//               </Link>
//             </li>
//             <li>
//               <Link href="/" onClick={() => setIsOpen(false)}>
//                 Our Services
//               </Link>
//             </li>
//             <li>
//               <Link href="/" onClick={() => setIsOpen(false)}>
//                 Business Categories
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" onClick={() => setIsOpen(false)}>
//                 Contact
//               </Link>
//             </li>
//           </ul>

//           {/* Buttons */}
//           <div className="flex flex-col gap-3 pt-4">
//             <button className="bg-[#FBF107] px-4 py-2 rounded-lg font-semibold">
//               Find Local Business
//             </button>
//             <button className="bg-[#FBF107] px-4 py-2 rounded-lg font-semibold">
//               Advertise
//             </button>
//             <button className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold">
//               Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔥 NAVBAR */}
      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
        ${isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" 
          : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="w-full mx-auto px-3 sm:px-4 py-3 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-2 xl:gap-6 min-w-0">

            {/* LOGO */}
            <div className="flex items-center gap-2 min-w-0">
              <Image
                src="https://i.postimg.cc/x8n10xYf/yellow.png"
                alt="Logo"
                width={36}
                height={36}
                className="flex-shrink-0"
              />

              {/* Mobile */}
              <span className="block sm:hidden text-sm font-bold truncate">
                Yellow Page Bangladesh
              </span>

              {/* Tablet */}
              <span className="hidden sm:block xl:hidden text-base font-bold truncate">
                Yellow Page Bangladesh
              </span>

              {/* Desktop */}
              <span className="hidden xl:block text-lg font-bold whitespace-nowrap">
                Yellow Page Bangladesh
              </span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden xl:flex items-center gap-6 text-gray-700 dark:text-gray-300 font-semibold text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Our Products</Link></li>
              <li><Link href="/">Our Services</Link></li>
              <li><Link href="/">Business Categories</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden xl:flex items-center gap-3">
            <button className="bg-[#FBF107] px-4 py-2 rounded-lg text-sm font-semibold">
              Find Local Business
            </button>
            <button className="bg-[#FBF107] px-4 py-2 rounded-lg text-sm font-semibold">
              Advertise
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Login
            </button>
          </div>

          {/* MENU BUTTON */}
          <div
            className="xl:hidden text-2xl cursor-pointer z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </div>
        </div>
      </nav>

      {/* ✅ IMPORTANT: Spacer to prevent content jump */}
      <div className="h-[70px]"></div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 space-y-6">

          {/* Header */}
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-2">
              <Image
                src="https://i.postimg.cc/x8n10xYf/yellow.png"
                alt="Logo"
                width={36}
                height={36}
              />
              <span className="font-bold text-lg">
                Yellow Page Bangladesh
              </span>
            </div>

            <button onClick={() => setIsOpen(false)} className="text-xl">
              ✕
            </button>
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-4 font-semibold">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Our Products</Link></li>
            <li><Link href="/">Our Services</Link></li>
            <li><Link href="/">Business Categories</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <button className="bg-[#FBF107] px-4 py-2 rounded-lg font-semibold">
              Find Local Business
            </button>
            <button className="bg-[#FBF107] px-4 py-2 rounded-lg font-semibold">
              Advertise
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}