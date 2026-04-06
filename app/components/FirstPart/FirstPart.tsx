import React from "react";
import { FaSearch, FaBriefcase } from "react-icons/fa";

export default function FirstPart() {
  return (
    <div className="bg-[#FDEE21] py-16 px-6 md:px-16 flex flex-col md:flex-row-reverse items-center justify-between">
      {/* Left Content */}
      <div className="mt-10 md:mt-0 relative text-black">
        <div className="text-6xl md:text-7xl font-extrabold opacity-90">
          YP Bangladesh
        </div>

        {/* Decorative circles */}
        <div className="absolute -top-6 right-0 w-16 h-16 bg-black rounded-full opacity-20"></div>
        <div className="absolute top-10 -left-6 w-12 h-12 bg-black rounded-full opacity-10"></div>
      </div>
      {/* Right Content */}
      <div className="max-w-xl text-black">
        <div className="inline-flex items-center gap-2 bg-black text-[#FDEE21] px-4 py-1 rounded-full text-sm mb-4">
          <span>⏱</span>
          <span>Your Business Journey Starts Here</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Yellow Page Bangladesh Business
        </h1>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Connecting Talent <br /> with Opportunity
        </h2>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-black text-[#FDEE21] px-6 py-3 rounded-lg font-medium hover:opacity-90">
            <FaSearch /> Explore Jobs
          </button>

          <button className="flex items-center duration-700 cursor-pointer ease-in-out gap-2 border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-[#FDEE21]">
            <FaBriefcase /> Post a Business
          </button>
        </div>
      </div>
    </div>
  );
}
