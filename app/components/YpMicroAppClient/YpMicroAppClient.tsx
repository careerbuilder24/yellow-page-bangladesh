"use client";

import React, { useState, useRef } from "react";
import Head from "next/head";
import {
  FaMapMarkerAlt,
  FaChartBar,
  FaUsers,
  FaPhone,
  FaUser,
  FaEnvelope,
  FaBuilding,
} from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function YpMicroAppClient() {
  const [activeTab, setActiveTab] = useState("Services");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  // 🔥 refs for smooth height
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      <Head>
        <title>YP Micro App | Smart Business Directory for Local Growth</title>
      </Head>

      <Navbar />

      <main className="bg-gray-100 min-h-screen">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="https://i.postimg.cc/y8FpwB5L/depositphotos-708300362-stock-photo-man-using-laptop-virtual-world.webp"
              alt="YP Micro App"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Expand Your Local Reach with YP Micro App
            </h1>

            <p className="mt-4 text-gray-600">
              Boost your local SEO and business visibility.
            </p>

            <button
              onClick={() => setShowModal(true)}
              className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded"
            >
              Get Started
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mt-16 px-6 pb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h2>

          {faqs.map((faq, i) => (
            <div key={i} className="mb-4 bg-white rounded-lg shadow">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
              >
                {faq.q}

                {/* icon animation */}
                <span
                  className={`transition-transform duration-300 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                >
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>

              {/* 🔥 smooth dynamic dropdown */}
              <div
                ref={(el) => {
                  faqRefs.current[i] = el;
                }}
                style={{
                  maxHeight:
                    openFaq === i
                      ? faqRefs.current[i]?.scrollHeight + "px"
                      : "0px",
                }}
                className="overflow-hidden transition-all duration-500 ease-in-out"
              >
                <div className="px-4 pb-4 text-gray-600">{faq.a}</div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />

      {/* MODAL */}
      {/* {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-6 rounded-xl w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-4">Get Started</h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full border p-3 mb-3 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 mb-3 rounded"
            />

            <div className="flex justify-end gap-2">
              <button onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="bg-yellow-400 px-4 py-2 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      )} */}

      {/* MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
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
              local visibility
            </p>

            {/* Inputs */}
            <div className="space-y-3">
              <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your Full Names"
                  className="w-full p-3 bg-transparent outline-none"
                />
              </div>

              <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                <FaPhone className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your Phone Number"
                  className="w-full p-3 bg-transparent outline-none"
                />
              </div>

              <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  className="w-full p-3 bg-transparent outline-none"
                />
              </div>

              <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                <FaBuilding className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Company/Business Name"
                  className="w-full p-3 bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start mt-4 text-sm text-gray-600">
              <input type="checkbox" className="mr-2 mt-1" />
              <span>
                I agree to receive marketing newsletters and promotional emails
                from Yellow Pages Bangladesh. You can unsubscribe at any time.
              </span>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>

              <button className="px-5 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
