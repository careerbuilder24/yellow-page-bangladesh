"use client";

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

// const companies = [
//   "Square Pharmaceuticals",
//   "Beximco Group",
//   "Grameenphone",
//   "Robi Axiata",
//   "Banglalink",
//   "Walton Group",
//   "PRAN-RFL Group",
//   "Akij Group",
//   "Bashundhara Group",
//   "Jamuna Group",
//   "ACI Limited",
//   "Navana Group",
//   "City Group",
//   "Meghna Group",
//   "KSRM",
//   "GPH Ispat",
//   "Abul Khair Group",
//   "Anwar Group",
//   "DBL Group",
//   "Edison Group",
//   "Noman Group",
//   "Partex Group",
//   "Orion Group",
//   "Confidence Group",
//   "Summit Group",
//   "United Group",
//   "Delta Group",
//   "Shanta Holdings",
//   "Rangs Group",
//   "Runner Group",
//   "Bengal Group",
//   "Dekko Group",
//   "Envoy Group",
//   "Ha-Meem Group",
//   "Babylon Group",
//   "Apex Footwear",
//   "LafargeHolcim Bangladesh",
//   "Heidelberg Cement BD",
//   "BRAC Enterprises",
//   "ASA Bangladesh",
//   "IDLC Finance",
//   "LankaBangla Finance",
//   "Mutual Trust Bank",
//   "Eastern Bank",
//   "Dutch-Bangla Bank",
//   "Pubali Bank",
//   "Islami Bank Bangladesh",
//   "Prime Bank",
//   "City Bank",
//   "NRB Bank",
// ];
// 🔥 All categorized data
// const directoryData = [
//   {
//     title: "Top Medical Hospitals",
//     items: [
//       "Square Hospital",
//       "United Hospital",
//       "Apollo Hospital Dhaka",
//       "Evercare Hospital",
//       "Ibn Sina Hospital",
//       "Popular Diagnostic Center",
//       "Labaid Hospital",
//       "Anwer Khan Modern Hospital",
//       "Delta Hospital",
//       "Green Life Hospital",
//     ],
//   },
//   {
//     title: "Top Manufacturers",
//     items: [
//       "Walton Group",
//       "PRAN-RFL Group",
//       "Akij Group",
//       "Bashundhara Group",
//       "ACI Limited",
//       "Abul Khair Group",
//       "GPH Ispat",
//       "KSRM",
//       "Bengal Group",
//       "Navana Group",
//     ],
//   },
//   {
//     title: "Top Importers & Exporters",
//     items: [
//       "Beximco Group",
//       "Square Group",
//       "DBL Group",
//       "Envoy Group",
//       "Ha-Meem Group",
//       "Noman Group",
//       "Babylon Group",
//       "Epyllion Group",
//       "Ananta Group",
//       "Fakir Group",
//     ],
//   },
//   {
//     title: "Top Garments Companies",
//     items: [
//       "DBL Group",
//       "Ha-Meem Group",
//       "Epyllion Group",
//       "Envoy Group",
//       "Ananta Group",
//       "Noman Group",
//       "Babylon Group",
//       "Fakir Group",
//       "Beximco Textiles",
//       "Square Textiles",
//     ],
//   },
//   {
//     title: "Top Pet Care",
//     items: [
//       "Pet World BD",
//       "Pet Zone BD",
//       "Pet Care Dhaka",
//       "Pet House Bangladesh",
//       "Pet Mart BD",
//       "Animal Care BD",
//       "Vet Care BD",
//       "Pet Shop Dhaka",
//       "Pet Clinic BD",
//       "Pet Life BD",
//     ],
//   },
//   {
//     title: "Top Medical Agencies",
//     items: [
//       "Healthcare Pharma",
//       "Renata Limited",
//       "Incepta Pharma",
//       "Square Pharma",
//       "Beximco Pharma",
//       "Opsonin Pharma",
//       "ACI Pharma",
//       "Eskayef Pharma",
//       "Drug International",
//       "Aristopharma",
//     ],
//   },
//   {
//     title: "Top Fashion Businesses",
//     items: [
//       "Aarong",
//       "Yellow",
//       "Ecstasy",
//       "Cats Eye",
//       "Richman",
//       "Dorjibari",
//       "Sailor",
//       "Le Reve",
//       "Trendz",
//       "Texmart",
//     ],
//   },
//   {
//     title: "Top Visa Agencies",
//     items: [
//       "Student Visa BD",
//       "Visa Processing BD",
//       "Fly Abroad BD",
//       "Global Visa Center",
//       "Skyline Travels",
//       "Visa Express BD",
//       "Travel House BD",
//       "Air World BD",
//       "Visa Hub BD",
//       "Overseas BD",
//     ],
//   },
//   {
//     title: "Top Insurance (Private)",
//     items: [
//       "Green Delta Insurance",
//       "Reliance Insurance",
//       "Prime Insurance",
//       "Eastland Insurance",
//       "Phoenix Insurance",
//       "Asia Insurance",
//       "Pioneer Insurance",
//       "Central Insurance",
//       "Guardian Life",
//       "MetLife Bangladesh",
//     ],
//   },
//   {
//     title: "Top Private Farms",
//     items: [
//       "Kazi Farms",
//       "Paragon Group",
//       "Aftab Bahumukhi Farms",
//       "Nourish Poultry",
//       "Provita Group",
//       "Quality Feeds",
//       "CP Bangladesh",
//       "BRAC Dairy",
//       "Milk Vita",
//       "ACI Agribusiness",
//     ],
//   },
//   {
//     title: "Top Educational Institutions",
//     items: [
//       "North South University",
//       "BRAC University",
//       "East West University",
//       "AIUB",
//       "Independent University Bangladesh",
//       "Daffodil International University",
//       "United International University",
//       "NSU School",
//       "Scholastica",
//       "Sunnydale School",
//     ],
//   },
//   {
//     title: "Top Factories in Bangladesh",
//     items: [
//       "Beximco Industrial Park",
//       "Walton Factory",
//       "Square Factory",
//       "PRAN Factory",
//       "Akij Cement Factory",
//       "GPH Steel Factory",
//       "KSRM Factory",
//       "Bashundhara Paper Mill",
//       "Confidence Cement Factory",
//       "LafargeHolcim Plant",
//     ],
//   },
// ];



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
  { name: "LafargeHolcim Bangladesh", url: "https://lafargeholcim.com.bd" },
  { name: "Heidelberg Cement BD", url: "https://heidelbergcementbd.com" },
  { name: "BRAC Enterprises", url: "https://brac.net" },
  { name: "ASA Bangladesh", url: "https://asa.org.bd" },
  { name: "IDLC Finance", url: "https://idlc.com" },
  { name: "LankaBangla Finance", url: "https://lankabangla.com" },
  { name: "Mutual Trust Bank", url: "https://mtb.com.bd" },
  { name: "Eastern Bank", url: "https://ebl.com.bd" },
  { name: "Dutch-Bangla Bank", url: "https://dbl-bank.com" },
  { name: "Pubali Bank", url: "https://pubalibangla.com" },
  { name: "Islami Bank Bangladesh", url: "https://islamibankbd.com" },
  { name: "Prime Bank", url: "https://primebank.com.bd" },
  { name: "City Bank", url: "https://thecitybank.com" },
  { name: "NRB Bank", url: "https://nrbbankbd.com" },
];

const directoryData = [
  {
    title: "Top Medical Hospitals",
    items: [
      { name: "Square Hospital", url: "https://www.squarehospital.com" },
      { name: "United Hospital", url: "https://www.uhlbd.com" },
      { name: "Apollo / Evercare", url: "https://www.evercarebd.com" },
      { name: "Ibn Sina Hospital", url: "https://www.ibnsinatrust.com" },
      { name: "Popular Diagnostic", url: "https://www.populardiagnostic.com" },
      { name: "Labaid Hospital", url: "https://labaidgroup.com" },
      { name: "Anwer Khan Hospital", url: "https://akhlbd.com" },
      { name: "Delta Hospital", url: "https://deltahospitalbd.com" },
      { name: "Green Life Hospital", url: "https://greenlifehospital.com.bd" },
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

  // 👉 You can keep adding others same way
];

export default function Directories() {
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

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full z-10 hover:bg-gray-800"
          >
            <FaChevronLeft />
          </button>

          {/* Categories Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 px-10 no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {categories.map((cat, index) => (
              <div
                key={index}
                className="min-w-[200px] snap-start flex flex-col items-center justify-center p-4"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FDEE21] text-black transition duration-300 hover:bg-black hover:text-[#FDEE21] shadow-md">
                  {cat.icon}
                </div>

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

        {/* Companies Grid */}
        <div className="max-w-6xl mx-auto mt-12 text-left">
          <h3 className="text-xl font-semibold mb-6 text-black text-center">
            Bangladeshi Top Companies
          </h3>

          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {companies.map((company, index) => (
              <p
                key={index}
                className="text-gray-700 text-sm hover:text-black hover:underline cursor-pointer transition"
              >
                {company}
              </p>
            ))}
          </div> */}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
  {companies.map((company, index) => (
    <a
      key={index}
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-700 text-sm hover:text-blue-600 hover:underline transition"
    >
      {company.name}
    </a>
  ))}
</div>

          {/* 🔥 Multiple Directory Sections */}
          <div className="max-w-6xl mx-auto mt-12 space-y-12 text-left">
            {directoryData.map((section, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold mb-4 text-black text-center">
                  {section.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                

                  {section.items.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 text-sm hover:text-blue-600 hover:underline transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
