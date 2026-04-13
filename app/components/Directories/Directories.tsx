"use client";

import React, { useRef, useEffect, useState } from "react";
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

export default function Directories() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [showLeftAds, setShowLeftAds] = useState(false);
  const [showRightAds, setShowRightAds] = useState(false);

  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  //  Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) setShowLeftAds(true);
            if (entry.target === rightRef.current) setShowRightAds(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 250, behavior: "smooth" });
  };

  //  Categories
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

  //  Companies
  const companies = [
    { name: "Square Pharmaceuticals", url: "https://www.squarepharma.com.bd" },
    { name: "Beximco Group", url: "https://www.beximco.com" },
    { name: "Grameenphone", url: "https://www.grameenphone.com" },
    { name: "Robi Axiata", url: "https://www.robi.com.bd" },
    { name: "Banglalink", url: "https://www.banglalink.net" },
    { name: "Walton Group", url: "https://waltonbd.com" },
    { name: "PRAN-RFL Group", url: "https://www.pranrflgroup.com" },
    { name: "Akij Group", url: "https://akij.net" },
    { name: "Bashundhara Group", url: "https://www.bashundharagroup.com" },
    { name: "Jamuna Group", url: "https://jamunagroup.com.bd" },
    { name: "ACI Limited", url: "https://aci-bd.com" },
    { name: "Navana Group", url: "https://navana.com" },
    { name: "City Group", url: "https://citygroup.com.bd" },
    { name: "Meghna Group", url: "https://meghnagroup.biz" },
    { name: "KSRM", url: "https://ksrm.com.bd" },
    { name: "GPH Ispat", url: "https://gphispat.com.bd" },
    { name: "Abul Khair Group", url: "https://abulkhairgroup.com" },
    { name: "Anwar Group", url: "https://anwargroup.com" },
    { name: "DBL Group", url: "https://dbl-group.com" },
    { name: "Edison Group", url: "https://edison-bd.com" },
    { name: "Noman Group", url: "https://noman.com.bd" },
    { name: "Partex Group", url: "https://partexstar.com" },
    { name: "Orion Group", url: "https://orion-group.net" },
    { name: "Confidence Group", url: "https://confidence.com.bd" },
    { name: "Summit Group", url: "https://summitgroupbd.com" },
    { name: "United Group", url: "https://united.com.bd" },
    { name: "Delta Group", url: "https://deltabd.com" },
    { name: "Shanta Holdings", url: "https://shantaholdings.com" },
    { name: "Rangs Group", url: "https://rangsgroup.com" },
    { name: "Runner Group", url: "https://runnerbd.com" },
    { name: "Bengal Group", url: "https://bengalgroup.com" },
    { name: "Dekko Group", url: "https://dekkogroup.com" },
    { name: "Envoy Group", url: "https://envoy-group.com" },
    { name: "Ha-Meem Group", url: "https://hameemgroup.com" },
    { name: "Babylon Group", url: "https://babylongroup.com" },
    { name: "Apex Footwear", url: "https://apex4u.com" },
  ];

  //  Directory Sections
  const directoryData = [
    {
      title: "Top Medical Hospitals",
      items: [
        { name: "Square Hospital", url: "https://www.squarehospital.com" },
        { name: "United Hospital", url: "https://www.uhlbd.com" },
        { name: "Apollo / Evercare", url: "https://www.evercarebd.com" },
        { name: "Ibn Sina Hospital", url: "https://www.ibnsinatrust.com" },
        {
          name: "Popular Diagnostic",
          url: "https://www.populardiagnostic.com",
        },
        { name: "Labaid Hospital", url: "https://labaidgroup.com" },
        { name: "Anwer Khan Hospital", url: "https://akhlbd.com" },
        { name: "Delta Hospital", url: "https://deltahospitalbd.com" },
        {
          name: "Green Life Hospital",
          url: "https://greenlifehospital.com.bd",
        },
        { name: "Bangladesh Medical", url: "https://bmc-bd.org" },
      ],
    },
    {
      title: "Top Manufacturers",
      items: [
        { name: "Walton Group", url: "https://waltonbd.com" },
        { name: "PRAN-RFL Group", url: "https://www.pranrflgroup.com" },
        { name: "Akij Group", url: "https://akij.net" },
        { name: "Bashundhara Group", url: "https://www.bashundharagroup.com" },
        { name: "ACI Limited", url: "https://aci-bd.com" },
        { name: "Abul Khair Group", url: "https://abulkhairgroup.com" },
        { name: "GPH Ispat", url: "https://gphispat.com.bd" },
        { name: "KSRM", url: "https://ksrm.com.bd" },
        { name: "Bengal Group", url: "https://bengalgroup.com" },
        { name: "Navana Group", url: "https://navana.com" },
      ],
    },
    {
      title: "Top Fashion Businesses",
      items: [
        { name: "Aarong", url: "https://www.aarong.com" },
        { name: "Yellow", url: "https://yellowclothing.net" },
        { name: "Ecstasy", url: "https://ecstasybd.com" },
        { name: "Cats Eye", url: "https://catseye.com.bd" },
        { name: "Richman", url: "https://richmanbd.com" },
        { name: "Dorjibari", url: "https://dorjibari.com" },
        { name: "Sailor", url: "https://sailor.clothing" },
        { name: "Le Reve", url: "https://lerevecraze.com" },
        { name: "Trendz", url: "https://trendz-bd.com" },
        { name: "Texmart", url: "https://texmartbd.com" },
      ],
    },
  ];
  return (
    <div>
      {/* A-Z */}

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

      {/* Categories */}
      <div className="bg-gray-100 py-10 text-center">
        <h2 className="text-3xl mb-6">Popular Categories</h2>

        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>

          <div ref={sliderRef} className="flex overflow-x-auto gap-6 px-10 no-scrollbar">
            {categories.map((c, i) => (
              <div key={i} className="min-w-[200px] text-center">
                <div className="w-16 h-16 mx-auto bg-yellow-300 flex items-center justify-center rounded-full">
                  {c.icon}
                </div>
                <p className="mt-4 text-sm">{c.name}</p>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="bg-gray-100 py-10 px-2">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
          {/* LEFT ADS */}
          <div className="hidden lg:block col-span-2">
            <div ref={leftRef} className="sticky top-24 space-y-4">
              <div
                className={`${showLeftAds ? "animate-left" : "opacity-0"} bg-white h-[300px] shadow`}
              >
                <iframe
                  src="https://www.youtube.com/embed/SgdcMWAST9s?autoplay=1&mute=1&loop=1&playlist=SgdcMWAST9s"
                  className="w-full h-full"
                />
              </div>
              <div
                className={`${showLeftAds ? "animate-left" : "opacity-0"} bg-white h-[300px] shadow`}
                style={{ animationDelay: "0.2s" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/H1fyJQXdfzU?autoplay=1&mute=1&loop=1&playlist=H1fyJQXdfzU"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* MAIN */}
          <div className="col-span-12 lg:col-span-8">
            <h3 className="text-xl text-center mb-6">
              Bangladeshi Top Companies
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {companies.map((c, i) => (
                <a key={i} href={c.url} target="_blank">
                  {c.name}
                </a>
              ))}
            </div>

            <div className="mt-10 space-y-10">
              {directoryData.map((section, i) => (
                <div key={i}>
                  <h3 className="text-center mb-4">{section.title}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {section.items.map((item, j) => (
                      <a key={j} href={item.url}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ADS */}
          <div className="hidden lg:block col-span-2">
            <div ref={rightRef} className="sticky top-24 space-y-4">
              <div
                className={`${showRightAds ? "animate-right" : "opacity-0"} bg-white h-[300px] shadow`}
              >
                <iframe
                  src="https://www.youtube.com/embed/JtXVOHKDpHk?autoplay=1&mute=1&loop=1&playlist=JtXVOHKDpHk"
                  className="w-full h-full"
                />
              </div>
              <div
                className={`${showRightAds ? "animate-right" : "opacity-0"} bg-white h-[300px] shadow`}
                style={{ animationDelay: "0.2s" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/k_DNgdwZeMg?autoplay=1&mute=1&loop=1&playlist=k_DNgdwZeMg"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
