"use client";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function page() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE */}
          <img
            src="https://i.postimg.cc/YSDn4yDt/dsfgjhudh.png"
            alt="Tap & Review"
            className="rounded-xl shadow-lg w-full"
          />

          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Tap & Review{" "}
              <span className="text-yellow-500">
                Build Trust with Customer Reviews
              </span>
            </h1>

            <p className="text-gray-600 mt-4">
              Transform your business reputation with our comprehensive review
              management platform. Collect authentic feedback, monitor your
              presence, and respond strategically to build trust.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold">
                Get Started
              </button>
              <button className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Complete Review Management Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            "Smart Review Collection",
            "Multi-Platform Monitoring",
            "Response Management",
            "Real-Time Alerts",
            "Performance Analytics",
            "Review Marketing",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">
                Powerful tools to help manage, collect and showcase customer
                reviews effectively.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM FEATURES */}
      <section className="bg-gray-100 py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-8">
          <h3 className="text-xl font-bold mb-6">Platform Features</h3>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Multi-platform review monitoring</li>
            <li>✔ Automated review collection</li>
            <li>✔ Custom templates</li>
            <li>✔ Response suggestions</li>
            <li>✔ Performance dashboard</li>
            <li>✔ Website review widgets</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            "How does the review system work?",
            "Can I manage multiple platforms?",
            "Do you support small businesses?",
            "Can I get alerts?",
          ].map((q, i) => (
            <details
              key={i}
              className="bg-gray-100 p-4 rounded-lg cursor-pointer"
            >
              <summary className="font-semibold">{q}</summary>
              <p className="text-gray-600 mt-2">
                Our system automates review collection and helps you manage your
                reputation easily.
              </p>
            </details>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
