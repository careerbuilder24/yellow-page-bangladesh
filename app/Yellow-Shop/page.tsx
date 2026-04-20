"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Page() {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        {/* IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.postimg.cc/wjgRJqnP/yellowshop.png"
            alt="Yellow Shop"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-lg"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Yellow Shop{" "}
            <span className="text-yellow-500">E-commerce Platform</span>
          </h1>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Transform your business with Kenya's most comprehensive e-commerce
            platform built for African entrepreneurs. Create your store, manage
            products, accept payments, and scale effortlessly.
          </p>

          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold shadow">
            Get Started
          </button>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Comprehensive E-commerce Features Built for Success
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Intuitive Online Store Builder",
            "Advanced Product Management",
            "Seamless Payment Integration",
            "Efficient Order Management",
            "Strategic Customer Management",
            "Powerful Analytics Dashboard",
          ].map((title, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-3">{title}</h3>
              <p className="text-gray-600 text-sm">
                Build, manage, and scale your online business with ease using
                powerful tools and automation.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TOGGLE SECTION */}
      <section className="py-16 px-6 md:px-20">
        {/* Toggle Buttons */}
        <div className="bg-gray-200 rounded-full p-1 flex max-w-xl mx-auto mb-10">
          <button
            onClick={() => setActiveTab("technical")}
            className={`flex-1 py-3 rounded-full font-medium transition ${
              activeTab === "technical"
                ? "bg-yellow-500 text-white shadow"
                : "text-gray-700"
            }`}
          >
            Technical Features
          </button>

          <button
            onClick={() => setActiveTab("business")}
            className={`flex-1 py-3 rounded-full font-medium transition ${
              activeTab === "business"
                ? "bg-yellow-500 text-white shadow"
                : "text-gray-700"
            }`}
          >
            Business Benefits
          </button>
        </div>

        {/* Toggle Content */}
        <div className="bg-gray-100 rounded-xl p-8 max-w-4xl mx-auto">
          {activeTab === "technical" ? (
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
              <li>✔ Mobile-Responsive Design Excellence</li>
              <li>✔ Search Engine Optimization Built In</li>
              <li>✔ Inventory Management</li>
              <li>✔ Multi-Language Support</li>
              <li>✔ Flexible API Integration</li>
              <li>✔ Reliable Cloud Hosting</li>
            </ul>
          ) : (
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
              <li>✔ Increased Online Sales</li>
              <li>✔ Significantly Reduced Operational Costs</li>
              <li>✔ Enhanced Customer Experience</li>
              <li>✔ True 24/7 Store Availability</li>
              <li>✔ Genuine Global Reach</li>
              <li>✔ Intelligent Process Automation</li>
            </ul>
          )}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            "How easy is it to set up my online store?",
            "What payment methods can I accept?",
            "Can I customize the look of my store?",
            "Do you provide hosting and security?",
            "Can I manage my store from mobile devices?",
            "Is Yellow Shop suitable for small businesses?",
          ].map((q, i) => (
            <details
              key={i}
              className="bg-white p-4 rounded-lg shadow cursor-pointer"
            >
              <summary className="font-medium">{q}</summary>
              <p className="mt-2 text-gray-600 text-sm">
                Yes — our platform is designed to be simple, flexible, and
                powerful for all business sizes.
              </p>
            </details>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
