"use client";
import React, { useState } from "react";
import {
  FaSearch,
  FaGlobe,
  FaFileAlt,
  FaLink,
  FaChartLine,
  FaCheckCircle,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBuilding,
} from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar />

      <main className="bg-gray-100 min-h-screen">
        {/*  HIDDEN SEO H1 (FOR VIEW SOURCE) */}
        <h1 style={{ display: "none" }}>
          SEO Services Search Engine Optimization
        </h1>

        {/* HERO SECTION */}
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          {/* IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src="https://i.postimg.cc/jSNr8ptX/dfghsdf.png"
              alt="SEO services search engine optimization"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2">
            {/*  VISIBLE H1 (DESIGN SAME) */}
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

            <button
              onClick={() => setShowModal(true)}
              className="mt-6 bg-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600"
            >
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
            <div className="bg-white p-6 rounded-xl shadow">
              <FaSearch className="text-yellow-500 text-xl mb-3" />
              <h3 className="font-semibold mb-2">Technical SEO Services</h3>
              <p className="text-gray-600 text-sm">
                Optimize your website for performance and search engines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <FaGlobe className="text-yellow-500 text-xl mb-3" />
              <h3 className="font-semibold mb-2">Local SEO</h3>
              <p className="text-gray-600 text-sm">
                Improve visibility for local searches and nearby customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <FaFileAlt className="text-yellow-500 text-xl mb-3" />
              <h3 className="font-semibold mb-2">Content Optimization</h3>
              <p className="text-gray-600 text-sm">
                High-quality content that ranks and converts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <FaLink className="text-yellow-500 text-xl mb-3" />
              <h3 className="font-semibold mb-2">Link Building</h3>
              <p className="text-gray-600 text-sm">
                Build strong backlinks to boost authority.
              </p>
            </div>

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
          <div className="flex rounded-full bg-gray-300 p-1 mb-6">
            <button className="flex-1 bg-yellow-500 text-white py-2 rounded-full">
              Technical Features
            </button>
            <button className="flex-1 text-gray-700 py-2">
              Business Benefits
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow space-y-3">
            {[
              "Site speed optimization",
              "Mobile responsiveness",
              "Schema markup",
              "XML sitemaps",
              "Meta tag optimization",
              "Image optimization",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-yellow-400 w-7 h-7 rounded flex items-center justify-center font-bold">
                Y
              </div>
              <h2 className="text-lg font-bold">
                YP Micro App | Yellow Pages Bangladesh
              </h2>
            </div>

            <p className="text-sm text-gray-600 mb-5">
              Join thousands of businesses using YP Micro App to boost their
              visibility
            </p>

            <div className="space-y-3">
              <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  className="w-full p-3 bg-transparent outline-none"
                  placeholder="Enter your Full Names"
                />
              </div>

              <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                <FaPhone className="text-gray-400 mr-2" />
                <input
                  className="w-full p-3 bg-transparent outline-none"
                  placeholder="Enter your Phone Number"
                />
              </div>

              <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  className="w-full p-3 bg-transparent outline-none"
                  placeholder="Enter your Email Address"
                />
              </div>

              <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                <FaBuilding className="text-gray-400 mr-2" />
                <input
                  className="w-full p-3 bg-transparent outline-none"
                  placeholder="Company/Business Name"
                />
              </div>
            </div>

            <div className="flex items-start mt-4 text-sm text-gray-600">
              <input type="checkbox" className="mr-2 mt-1" />
              <span>
                I agree to receive marketing newsletters and promotional emails.
              </span>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>

              <button className="px-5 py-2 bg-yellow-400 rounded-lg font-semibold">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
