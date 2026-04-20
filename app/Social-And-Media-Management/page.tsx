// import React from "react";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";

// export default function page() {
//   return (
//     <>
//       <Navbar />

//       <Footer />
//     </>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Page() {
  const [activeTab, setActiveTab] = useState<"platform" | "strategic">("platform");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is Social Media Management?",
      a: "Social media management involves creating, scheduling, publishing, and analyzing content across platforms like Facebook, Instagram, LinkedIn, and TikTok.",
    },
    {
      q: "What platforms should my business be on?",
      a: "It depends on your audience, but most businesses benefit from Facebook, Instagram, LinkedIn, and TikTok.",
    },
    {
      q: "How often should I post?",
      a: "Consistency matters more than volume. Most brands perform well posting 3–5 times per week.",
    },
    {
      q: "How quickly can you start?",
      a: "We can typically onboard and begin within a few days after strategy alignment.",
    },
    {
      q: "Do I need to provide content?",
      a: "No — we can handle content creation, but we can also collaborate with your team.",
    },
    {
      q: "Can you manage multiple brands?",
      a: "Yes, we manage multiple accounts and locations efficiently.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-[#f5f6f8]">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/social.png"
              alt="Social Media"
              width={600}
              height={600}
              className="rounded-xl"
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold text-gray-900">
              Social Media Management
            </h1>

            <h2 className="text-5xl font-bold text-yellow-500 mt-2">
              Boost Your Social Media Presence
            </h2>

            <p className="mt-6 text-gray-600 max-w-lg">
              Build engaged communities, drive sales, and establish your brand
              as an industry leader with professional social media management.
            </p>

            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow">
              Get Started
            </button>
          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-center text-3xl font-bold mb-10">
            Our Social Media Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Strategy Development",
              "Content Creation & Management",
              "Community Management",
              "Social Media Advertising",
              "Analytics & Reporting",
              "Platform-Specific Services",
            ].map((title, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">
                  High-quality service designed to grow your social presence and engagement.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TOGGLE SECTION */}
        <section className="max-w-5xl mx-auto px-6 py-12">

          <div className="flex bg-[#d6d1c9] rounded-xl p-1 mb-6">
            <button
              onClick={() => setActiveTab("platform")}
              className={`w-1/2 py-3 rounded-lg font-semibold ${
                activeTab === "platform"
                  ? "bg-yellow-500 text-white"
                  : "text-gray-700"
              }`}
            >
              Platform Features
            </button>

            <button
              onClick={() => setActiveTab("strategic")}
              className={`w-1/2 py-3 rounded-lg font-semibold ${
                activeTab === "strategic"
                  ? "bg-yellow-500 text-white"
                  : "text-gray-700"
              }`}
            >
              Strategic Services
            </button>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <ul className="space-y-4">
              {(activeTab === "platform"
                ? [
                    "Multi-platform management",
                    "Automated scheduling",
                    "Analytics dashboard",
                    "Engagement tracking",
                    "Content calendar",
                    "Performance metrics",
                  ]
                : [
                    "Content creation",
                    "Audience targeting",
                    "Trend monitoring",
                    "Competitor analysis",
                    "Hashtag strategy",
                    "Visual branding",
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-yellow-500">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-center text-3xl font-bold mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 cursor-pointer"
                onClick={() => toggleFAQ(i)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{faq.q}</h4>
                  <span className="text-yellow-500">
                    {openIndex === i ? "▲" : "▼"}
                  </span>
                </div>

                {openIndex === i && (
                  <p className="text-gray-600 mt-3 text-sm">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}