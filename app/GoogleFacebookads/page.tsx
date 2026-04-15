
"use client";

import React, { useState } from "react";
import {
  FaBullseye,
  FaCheckCircle,
} from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    "What is Google & Facebook Ads?",
    "How much should I budget for Google and Facebook Ads?",
    "How long does it take to see results from paid advertising?",
    "What's the difference between Google Ads and Facebook Ads?",
    "Do I need to choose between Google and Facebook Ads?",
    "Can small businesses compete with large companies?",
    "How do you measure success of campaigns?",
    "Do I own the ads and data?",
    "Can you help with ad creative and copywriting?",
  ];

  return (
    <>
      <Navbar />

      <main className="bg-gray-100 min-h-screen">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="https://i.postimg.cc/RV8t2YS1/sdghd.png"
              alt="Ads"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Google & Facebook Ads{" "}
              <span className="text-yellow-500">Digital Advertising</span>
            </h1>

            <p className="mt-4 text-gray-600">
              Yellow Pages Bangladesh provides comprehensive paid advertising
              management to maximize your return on ad spend.
            </p>

            <button className="mt-6 bg-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600">
              Get Started
            </button>
          </div>
        </section>

        {/* CORE FEATURES */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-center mb-10">
            Core Features
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Google Ads Management",
              "Facebook & Instagram Ads",
              "Campaign Strategy & Planning",
              "Ad Creative Development",
              "Audience Targeting",
              "Conversion Tracking",
            ].map((title, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <FaBullseye className="text-yellow-500 mb-3" />
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">
                  High-performance advertising strategies tailored to your
                  business.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-center mb-10">
            Why Choose Yellow Pages Bangladesh for Paid Advertising?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Certified Advertising Experts",
              "Local Market Knowledge",
              "Transparent Reporting",
              "Data-Driven Optimization",
              "Full-Service Support",
              "Proven Results",
            ].map((title, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <FaCheckCircle className="text-yellow-500 mb-3" />
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">
                  We deliver measurable results and business growth.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-10">
            Frequently Asked Questions About Google & Facebook Ads
          </h2>

          {faqs.map((q, i) => (
            <div key={i} className="border-b py-4">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between text-left font-medium"
              >
                {q}
                <span>{openFaq === i ? "−" : "+"}</span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openFaq === i ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm">
                  This is a sample answer explaining the question in detail.
                </p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
