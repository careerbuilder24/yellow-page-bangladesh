
"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Page() {
  // FAQ state
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle state
  const [activeTab, setActiveTab] = useState("campaign");

  const faqs = [
    {
      q: "What is Email Marketing?",
      a: "Email marketing is a digital marketing strategy that involves sending targeted emails to build relationships and drive conversions.",
    },
    {
      q: "How often should I send emails?",
      a: "Most businesses succeed with 1–4 emails per month depending on audience and goals.",
    },
    {
      q: "How long to see results?",
      a: "You may see quick wins, but strong long-term results typically take 3–6 months.",
    },
    {
      q: "Is it good for small businesses?",
      a: "Yes — it's one of the most cost-effective and high ROI marketing channels.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <div className="bg-[#f5f6f8]">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl p-6">
            <Image
              src="/email.png"
              alt="Email Marketing"
              width={600}
              height={600}
              className="rounded-xl"
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold text-gray-900">
              Email Marketing
            </h1>

            <h2 className="text-5xl font-bold text-yellow-500 mt-2">
              Drive Engagement <br /> with Smart Campaigns
            </h2>

            <p className="mt-6 text-gray-600 max-w-lg">
              We provide comprehensive email marketing solutions designed to
              help businesses connect with their audience, nurture leads, and
              increase sales through strategic campaigns.
            </p>

            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow">
              Get Started
            </button>
          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-center text-3xl font-bold mb-10">
            Our Email Marketing Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Email Campaign Strategy & Planning",
              "Email List Management & Segmentation",
              "Email Design & Copywriting",
              "Email Automation & Drip Campaigns",
              "A/B Testing",
              "Analytics & Performance Tracking",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">
                  High-performing solutions tailored to your business growth and
                  audience engagement.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-center text-3xl font-bold mb-10">
            Why Choose Us for Email Marketing?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Market Expertise",
              "Proven Track Record",
              "Compliance & Deliverability",
              "Integrated Approach",
              "Dedicated Support",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">
                  We bring experience, data-driven strategies, and continuous
                  optimization to maximize your results.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TOGGLE FEATURES */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          {/* Tabs */}
          <div className="flex bg-[#d6d1c9] rounded-xl p-1 mb-6">
            <button
              onClick={() => setActiveTab("campaign")}
              className={`w-1/2 py-3 rounded-lg font-semibold transition ${
                activeTab === "campaign"
                  ? "bg-yellow-500 text-white"
                  : "text-gray-700"
              }`}
            >
              Campaign Features
            </button>

            <button
              onClick={() => setActiveTab("strategic")}
              className={`w-1/2 py-3 rounded-lg font-semibold transition ${
                activeTab === "strategic"
                  ? "bg-yellow-500 text-white"
                  : "text-gray-700"
              }`}
            >
              Strategic Services
            </button>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow p-6">
            <ul className="space-y-4 text-gray-700">
              {(activeTab === "campaign"
                ? [
                    "Personalized content delivery",
                    "Automated trigger campaigns",
                    "Advanced segmentation",
                    "Mobile-responsive design",
                    "Spam score checking",
                    "Deliverability monitoring",
                  ]
                : [
                    "Content strategy development",
                    "Subject line optimization",
                    "Engagement analytics",
                    "Customer journey mapping",
                    "Integration setup",
                    "Performance optimization",
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-yellow-500 text-lg">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-center text-3xl font-bold mb-10">
            Frequently Asked Questions About Email Marketing
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-gray-200 pb-4 cursor-pointer"
                onClick={() => toggleFAQ(i)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-gray-900">{faq.q}</h4>

                  <span
                    className={`text-yellow-500 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    ▲
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}