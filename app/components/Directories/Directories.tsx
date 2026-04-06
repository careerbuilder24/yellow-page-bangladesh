

'use client';

import React, { useRef } from "react";
import {
  FaTshirt,
  FaBuilding,
  FaShoppingBag,
  FaDesktop,
  FaDatabase,
  FaMobileAlt,
  FaCar,
  FaPlane,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const categories = [
  { name: "Garments, Buying & Apparels", icon: <FaTshirt size={28} /> },
  { name: "Real Estate & Properties", icon: <FaBuilding size={28} /> },
  { name: "Shopping & eCommerce", icon: <FaShoppingBag size={28} /> },
  { name: "Computer & Electronics", icon: <FaDesktop size={28} /> },
  { name: "IT & Software", icon: <FaDatabase size={28} /> },
  { name: "Telecommunication", icon: <FaMobileAlt size={28} /> },
  { name: "Car & Vehicles", icon: <FaCar size={28} /> },
  { name: "Tours & Travels", icon: <FaPlane size={28} /> },
];

export default function Directories() {
  // ✅ Proper TypeScript typing
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

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

        {/* Slider Wrapper */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full z-10 hover:bg-gray-800"
          >
            <FaChevronLeft />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 px-10 scrollbar-hide scroll-smooth"
          >
            {categories.map((cat, index) => (
              <div
                key={index}
                className="min-w-[200px] flex flex-col items-center justify-center p-4"
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FDEE21] text-black transition duration-300 hover:bg-black hover:text-[#FDEE21] shadow-md">
                  {cat.icon}
                </div>

                {/* Text */}
                <p className="text-gray-700 font-medium text-sm text-center mt-4">
                  {cat.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full z-10 hover:bg-gray-800"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}