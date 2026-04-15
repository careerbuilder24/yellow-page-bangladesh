"use client";
import React from "react";
import {
  FaSearch,
  FaGlobe,
  FaFileAlt,
  FaLink,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        {/* HERO SECTION */}
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          {/* IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src="https://i.postimg.cc/jSNr8ptX/dfghsdf.png"
              alt="SEO"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              SEO Services{" "}
              <span className="text-yellow-500">
                Search Engine Optimization
              </span>
            </h1>

            <p className="mt-4 text-gray-600">
              Boost your search engine rankings and drive more customers to your
              business. Get more visibility, traffic, and sales with our proven
              SEO strategies.
            </p>

            <button className="mt-6 bg-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600">
              Get Started
            </button>
          </div>
        </div>

        {/* SERVICES SECTION */}
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold text-center mb-10">
            Our SEO Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <div className="bg-white p-6 rounded-xl shadow">
              <FaSearch className="text-yellow-500 text-xl mb-3" />
              <h3 className="font-semibold mb-2">Technical SEO Services</h3>
              <p className="text-gray-600 text-sm">
                Optimize your website for performance and search engines.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white p-6 rounded-xl shadow">
              <FaGlobe className="text-yellow-500 text-xl mb-3" />
              <h3 className="font-semibold mb-2">Local SEO</h3>
              <p className="text-gray-600 text-sm">
                Improve visibility for local searches and nearby customers.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white p-6 rounded-xl shadow">
              <FaFileAlt className="text-yellow-500 text-xl mb-3" />
              <h3 className="font-semibold mb-2">Content Optimization</h3>
              <p className="text-gray-600 text-sm">
                High-quality content that ranks and converts.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-white p-6 rounded-xl shadow">
              <FaLink className="text-yellow-500 text-xl mb-3" />
              <h3 className="font-semibold mb-2">Link Building</h3>
              <p className="text-gray-600 text-sm">
                Build strong backlinks to boost authority.
              </p>
            </div>

            {/* CARD 5 */}
            <div className="bg-white p-6 rounded-xl shadow">
              <FaChartLine className="text-yellow-500 text-xl mb-3" />
              <h3 className="font-semibold mb-2">SEO Auditing</h3>
              <p className="text-gray-600 text-sm">
                Track performance and improve results.
              </p>
            </div>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="max-w-5xl mx-auto px-6 py-10">
          {/* TABS */}
          <div className="flex rounded-full bg-gray-300 p-1 mb-6">
            <button className="flex-1 bg-yellow-500 text-white py-2 rounded-full">
              Technical Features
            </button>
            <button className="flex-1 text-gray-700 py-2">
              Business Benefits
            </button>
          </div>

          {/* CONTENT */}
          <div className="bg-white p-6 rounded-xl shadow space-y-3">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-yellow-500" />
              <p>Site speed optimization</p>
            </div>

            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-yellow-500" />
              <p>Mobile responsiveness</p>
            </div>

            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-yellow-500" />
              <p>Schema markup</p>
            </div>

            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-yellow-500" />
              <p>XML sitemaps</p>
            </div>

            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-yellow-500" />
              <p>Meta tag optimization</p>
            </div>

            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-yellow-500" />
              <p>Image optimization</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
