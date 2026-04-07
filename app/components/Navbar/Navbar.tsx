"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openServicesMobile, setOpenServicesMobile] = useState(false);
  const [openProductsMobile, setOpenProductsMobile] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
        <div className="w-full mx-auto px-3 sm:px-4 py-3 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-2 xl:gap-6">
            {/* LOGO */}
            <div className="flex items-center gap-2">
              <Image
                src="https://i.postimg.cc/x8n10xYf/yellow.png"
                alt=""
                width={36}
                height={36}
              />
              <span className="text-sm sm:text-base md:text-lg font-bold">
                Yellow Page Bangladesh
              </span>
            </div>

            {/* DESKTOP MENU */}
            <ul className="hidden xl:flex items-center gap-6 text-gray-700 font-semibold text-sm">
              <li className="cursor-pointer hover:text-[#FCED23] transition">
                <Link href="/">Home</Link>
              </li>

              {/* PRODUCTS */}
              <li
                className="relative"
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  setActiveMenu("products");
                }}
                onMouseLeave={() => {
                  timeoutRef.current = setTimeout(() => {
                    setActiveMenu(null);
                  }, 200);
                }}
              >
                <span className="cursor-pointer hover:text-[#FCED23] transition">
                  Our Products
                </span>

                <div
                  className={`absolute z-50 left-0 top-full pt-4 w-[900px] transition-all duration-300 ${
                    activeMenu === "products"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="bg-white shadow-2xl rounded-2xl p-10 border border-white">
                    <div className="grid grid-cols-3 gap-8 text-sm">
                      {[
                        "YP Micro App",
                        "SEO Services",
                        "Google & Facebook Ads",
                        "Tap & Review",
                        "Yellow Shop",
                        "Email Marketing",
                        "Social Media Management",
                        "Yellow Connect",
                        "Yellow Spot",
                        "Office 365",
                        "Yellow Pay",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg hover:bg-[#FCED23] cursor-pointer transition"
                        >
                          <h4 className="font-semibold">{item}</h4>
                          <p className="text-gray-500 text-sm mt-1">
                            Explore {item.toLowerCase()} solutions.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              {/* SERVICES */}
              <li
                className="relative"
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  setActiveMenu("services");
                }}
                onMouseLeave={() => {
                  timeoutRef.current = setTimeout(() => {
                    setActiveMenu(null);
                  }, 200);
                }}
              >
                <span className="cursor-pointer hover:text-[#FCED23] transition">
                  Our Services
                </span>

                <div
                  className={`absolute z-50 left-0 top-full pt-4 w-[650px] transition-all duration-300 ${
                    activeMenu === "services"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="bg-white shadow-xl rounded-xl p-6 border border-white">
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      {[
                        "Print Directory",
                        "Online Directory",
                        "Digital Marketing Agency",
                        "Tour Guides",
                        "e-Directory",
                        "YP Jobs",
                        "Map Services",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="p-2 rounded-lg hover:bg-[#FCED23] cursor-pointer transition"
                        >
                          <h4 className="font-semibold">{item}</h4>
                          <p className="text-gray-500 text-sm">
                            Explore {item.toLowerCase()} services.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              <li className="cursor-pointer hover:text-[#FCED23] transition">
                <Link href="/">Business Categories</Link>
              </li>

              <li className="cursor-pointer hover:text-[#FCED23] transition">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* BUTTONS */}
          <div className="hidden xl:flex items-center gap-3">
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

          {/* MOBILE BUTTON */}
          <div
            className="xl:hidden text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </div>
        </div>
      </nav>

      <div className="h-[70px]" />

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 ${isOpen ? "opacity-100" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition`}
      >
        <div className="p-5 space-y-6">
          <div className="flex items-center gap-2 border-b pb-4">
            <Image
              src="https://i.postimg.cc/x8n10xYf/yellow.png"
              alt=""
              width={32}
              height={32}
            />
            <span className="font-bold">Yellow Page Bangladesh</span>
          </div>

          <ul className="flex flex-col gap-4 font-semibold">
            <li>
              <Link href="/">Home</Link>
            </li>

            {/* PRODUCTS MOBILE */}
            <li>
              <div
                onClick={() => {
                  setOpenProductsMobile(!openProductsMobile);
                  setOpenServicesMobile(false);
                }}
                className="flex justify-between cursor-pointer"
              >
                Our Products
                <span>{openProductsMobile ? "▲" : "▼"}</span>
              </div>

              <div
                className={`overflow-hidden transition-all ${
                  openProductsMobile ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <ul className="pl-4 text-sm space-y-2">
                  {[
                    "YP Micro App",
                    "SEO Services",
                    "Google & Facebook Ads",
                    "Tap & Review",
                    "Yellow Shop",
                    "Email Marketing",
                    "Social Media Management",
                    "Yellow Connect",
                    "Yellow Spot",
                    "Office 365",
                    "Yellow Pay",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>

            {/* SERVICES MOBILE */}
            <li>
              <div
                onClick={() => {
                  setOpenServicesMobile(!openServicesMobile);
                  setOpenProductsMobile(false);
                }}
                className="flex justify-between cursor-pointer"
              >
                Our Services
                <span>{openServicesMobile ? "▲" : "▼"}</span>
              </div>

              <div
                className={`overflow-hidden transition-all ${
                  openServicesMobile ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <ul className="pl-4 text-sm space-y-2">
                  {[
                    "Print Directory",
                    "Online Directory",
                    "Digital Marketing Agency",
                    "Tour Guides",
                    "e-Directory",
                    "YP Jobs",
                    "Map Services",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link href="/">Business Categories</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex flex-col gap-3 pt-4 border-t">
            <button className="bg-[#FBF107] py-2 rounded">
              Find Local Business
            </button>
            <button className="bg-[#FBF107] py-2 rounded">Advertise</button>
            <button className="bg-gray-800 text-white py-2 rounded">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
