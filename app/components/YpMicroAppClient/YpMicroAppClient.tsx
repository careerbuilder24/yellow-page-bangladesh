

"use client";

import React, { useState } from "react";
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
      {/* SEO */}
      <Head>
        <title>YP Micro App | Smart Business Directory for Local Growth</title>
        <meta
          name="description"
          content="Boost your local SEO with YP Micro App. Get discovered on high-traffic websites and attract more nearby customers."
        />
        <meta
          name="keywords"
          content="business directory, local SEO, YP Micro App, Yellow Pages"
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/yp-micro-app"
        />
      </Head>

      <Navbar />

      <main className="bg-gray-100 min-h-screen">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="https://i.postimg.cc/y8FpwB5L/depositphotos-708300362-stock-photo-man-using-laptop-virtual-world.webp"
              alt="Man using YP Micro App to manage local business listings"
              loading="lazy"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Expand Your Local Reach with YP Micro App
            </h1>

            <p className="mt-4 text-gray-600">
              Boost your local SEO and business visibility with YP Micro App.
            </p>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowModal(true)}
                className="bg-yellow-500 text-white px-6 py-3 rounded"
              >
                Get Started
              </button>
            </div>
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
        </section>

        {/* FAQ SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </main>

      <Footer />

      {/*  MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white w-full max-w-md rounded-xl shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-yellow-400 w-6 h-6 rounded flex items-center justify-center font-bold">
                Y
              </div>
              <h2 className="text-lg font-bold">
                YP Micro App | Yellow Pages Kenya
              </h2>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Join thousands of businesses using YP Micro App to boost their local visibility
            </p>

            <div className="space-y-3">
              <div className="flex items-center border rounded px-3">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your Full Names"
                  className="w-full p-3 outline-none"
                />
              </div>

              <div className="flex items-center border rounded px-3">
                <FaPhone className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your Phone Number"
                  className="w-full p-3 outline-none"
                />
              </div>

              <div className="flex items-center border rounded px-3">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  className="w-full p-3 outline-none"
                />
              </div>

              <div className="flex items-center border rounded px-3">
                <FaBuilding className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Company/Business Name"
                  className="w-full p-3 outline-none"
                />
              </div>
            </div>

            <div className="flex items-start mt-4 text-sm">
              <input type="checkbox" className="mr-2 mt-1" />
              <span>
                I agree to receive marketing newsletters and promotional emails from Yellow Pages Kenya.
              </span>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>

              <button className="px-4 py-2 bg-yellow-400 text-black rounded font-semibold">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}