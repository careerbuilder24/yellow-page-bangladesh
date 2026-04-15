"use client";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaChartBar,
  FaUsers,
  FaPhone,
  FaUser,
  FaEnvelope,
  FaBuilding,
} from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function YpMicroApp() {
  const [activeTab, setActiveTab] = useState("Services");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const tabs = ["Retail", "Professional Services", "E-commerce", "Services"];

  const faqs = [
    {
      q: "What is the YP Micro App?",
      a: "The YP Micro App is a smart business directory tool embedded into high traffic websites to enhance your business visibility.",
    },
    {
      q: "How does it help my business?",
      a: "It provides targeted exposure, integrates your listing into websites, and increases brand awareness.",
    },
    {
      q: "Who can benefit?",
      a: "Local businesses, professionals, e-commerce, and event organizers.",
    },
    {
      q: "Can I track performance?",
      a: "Yes, analytics include views, clicks, and conversions.",
    },
  ];

  return (
    <>
    <Navbar/>
      <div className="bg-gray-100 min-h-screen">
        {/* HERO SECTION */}
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://i.postimg.cc/y8FpwB5L/depositphotos-708300362-stock-photo-man-using-laptop-virtual-world.webp"
              alt="YP Micro App"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Expand Your Local Reach with YP Micro App{" "}
              <span className="text-[#FDEC21]">
                Smart Business Directory Integration
              </span>
            </h1>

            <p className="mt-4 text-gray-600">
              Harness the power of high-traffic websites to showcase your
              business where your customers already are.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={() => setShowModal(true)}
                className="bg-[#FDEC21] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9c9225] transition"
              >
                Get Started
              </button>

              <button className="bg-yellow-100 text-yellow-600 px-6 py-3 rounded-lg font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="bg-gray-200 py-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 p-3 rounded-md text-white">
                <FaMapMarkerAlt />
              </div>
              <p>Connect with customers based on their exact location</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 p-3 rounded-md text-white">
                <FaUsers />
              </div>
              <p>Appear in relevant local searches automatically</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 p-3 rounded-md text-white">
                <FaChartBar />
              </div>
              <p>Capture foot traffic from nearby potential customers</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 p-3 rounded-md text-white">
                <FaPhone />
              </div>
              <p>Seamless integration with trusted content platforms</p>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="max-w-5xl mx-auto mt-10 px-6">
          <div className="flex bg-gray-300 rounded-full p-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-2 rounded-full text-sm font-medium ${
                  activeTab === tab
                    ? "bg-yellow-500 text-white"
                    : "text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-white shadow mt-6 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">{activeTab}</h3>
            <p className="text-gray-600">
              Service-based businesses such as salons, spas, repair shops, and
              cleaning services can use the YP Micro App to attract local
              clients.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mt-16 px-6 pb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h2>

          {faqs.map((faq, i) => (
            <div key={i} className="mb-4 bg-white rounded-lg shadow">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left px-4 py-3 font-medium flex justify-between"
              >
                {faq.q}
                <span>{openFaq === i ? "-" : "+"}</span>
              </button>

              {openFaq === i && (
                <div className="px-4 pb-4 text-gray-600">{faq.a}</div>
              )}
            </div>
          ))}
        </div>

        {/* MODAL */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white w-full max-w-md rounded-xl shadow-xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-bold mb-2">
                YP Micro App | Yellow Pages
              </h2>

              <p className="text-sm text-gray-600 mb-4">
                Join thousands of businesses to boost their local visibility
              </p>

              {/* INPUTS WITH ICONS */}
              <div className="space-y-3">
                <div className="flex items-center border rounded px-3 focus-within:border-yellow-500">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Enter your Full Name"
                    className="w-full p-3 outline-none"
                  />
                </div>

                <div className="flex items-center border rounded px-3 focus-within:border-yellow-500">
                  <FaPhone className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Enter your Phone Number"
                    className="w-full p-3 outline-none"
                  />
                </div>

                <div className="flex items-center border rounded px-3 focus-within:border-yellow-500">
                  <FaEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    placeholder="Enter your Email Address"
                    className="w-full p-3 outline-none"
                  />
                </div>

                <div className="flex items-center border rounded px-3 focus-within:border-yellow-500">
                  <FaBuilding className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Company/Business Name"
                    className="w-full p-3 outline-none"
                  />
                </div>
              </div>

              {/* CHECKBOX */}
              <div className="flex items-start mt-4 text-sm">
                <input type="checkbox" className="mr-2 mt-1" />
                <span>
                  I agree to receive marketing newsletters and promotional
                  emails. You can unsubscribe at any time.
                </span>
              </div>

              {/* BUTTONS */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Cancel
                </button>

                <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}
