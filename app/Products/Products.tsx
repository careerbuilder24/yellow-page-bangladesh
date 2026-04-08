// import React from 'react'

// export default function Products() {
//   return (
//     <div>
      
//     </div>
//   )
// }
import React from "react";
import {
  FiGlobe,
  FiCreditCard,
  FiShoppingCart,
  FiSearch,
  FiMail,
  FiSend,
  FiUsers,
  FiFileText,
  FiStar,
  FiSmartphone,
  FiBox,
} from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";

const products = [
  {
    title: "Yellow Connect",
    subtitle: "Your Complete Digital Business Solution",
    desc: "Transform your business's online presence with a complete all-in-one digital solution.",
    color: "from-blue-500 to-blue-700",
    badge: "Most Popular",
    icon: <FiGlobe />,
    features: [
      "Professional Website Design",
      "Corporate Email",
      "Premium Directory Listing",
    ],
  },
  {
    title: "Yellow Pay",
    subtitle: "Secure Payment Solutions",
    desc: "Accept online payments, mobile money, and card transactions seamlessly.",
    color: "from-green-500 to-green-700",
    badge: "Best Value",
    icon: <FiCreditCard />,
    features: [
      "Online Payment Gateway",
      "Mobile Money Integration",
      "Card Processing",
    ],
  },
  {
    title: "Yellow Shop",
    subtitle: "E-commerce Platform",
    desc: "Create and manage your online store with ease and scale your business.",
    color: "from-purple-500 to-purple-700",
    badge: "Advanced",
    icon: <FiShoppingCart />,
    features: [
      "Online Store Builder",
      "Product Management",
      "Payment Integration",
    ],
  },
  {
    title: "SEO Services",
    subtitle: "Search Engine Optimization",
    desc: "Boost rankings, increase traffic, and grow your business with SEO strategies.",
    color: "from-orange-500 to-orange-600",
    badge: "Premium",
    icon: <FiSearch />,
    features: [
      "Technical SEO Services",
      "Local SEO for Businesses",
      "Content Optimization Strategies",
    ],
  },
  {
    title: "Email Marketing",
    subtitle: "Drive Engagement with Smart Campaigns",
    desc: "Connect with your audience and increase sales through email campaigns.",
    color: "from-red-500 to-red-600",
    badge: "Complete",
    icon: <FiMail />,
    features: [
      "Email Campaign Strategy & Planning",
      "List Management & Segmentation",
      "Email Design & Copywriting",
    ],
  },
  {
    title: "Google & Facebook Ads",
    subtitle: "Digital Advertising",
    desc: "Maximize ROI with advanced ad targeting and campaign optimization.",
    color: "from-indigo-500 to-indigo-700",
    badge: "Advanced",
    icon: <FiSend />,
    features: [
      "Google Ads Management",
      "Facebook & Instagram Ads",
      "Campaign Strategy",
    ],
  },
  {
    title: "Social Media Management",
    subtitle: "Boost Your Social Media Presence",
    desc: "Build engaged communities and grow your brand with social media.",
    color: "from-pink-500 to-pink-600",
    badge: "Premium",
    icon: <FiUsers />,
    features: [
      "Strategy Development",
      "Content Creation & Management",
      "Community Management",
    ],
  },
  {
    title: "Microsoft 365",
    subtitle: "Complete Business Productivity Suite",
    desc: "Enhance productivity with email, collaboration tools, and cloud storage.",
    color: "from-blue-600 to-blue-800",
    badge: "Best Value",
    icon: <FiFileText />,
    features: [
      "Exchange Online",
      "Microsoft Teams",
      "SharePoint Online",
    ],
  },
  {
    title: "Tap & Review",
    subtitle: "Build Trust with Customer Reviews",
    desc: "Collect customer feedback and improve your online reputation.",
    color: "from-yellow-500 to-yellow-600",
    badge: "Advanced",
    icon: <FiStar />,
    features: [
      "Smart Review Collection",
      "Multi-Platform Monitoring",
      "Strategic Response Management",
    ],
  },
  {
    title: "Expand Your Local Reach with YP Micro App",
    subtitle: "Smart Business Directory Integration",
    desc: "Harness the power of high-traffic websites to showcase your business where your customers already are.",
    color: "from-teal-500 to-teal-700",
    badge: "Premium",
    icon: <FiSmartphone />,
    features: ["Features coming soon..."],
    noCheck: true,
  },
  {
    title: "Yellow Connect Packages",
    subtitle: "Complete Web Solutions",
    desc: "Choose from our range of comprehensive web development packages designed to meet your business needs.",
    color: "from-cyan-500 to-cyan-700",
    badge: "Complete",
    icon: <FiBox />,
    features: [
      "Professional Website Design",
      "Content Management System",
      "SEO Optimization",
    ],
  },
];

export default function Products() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          All Our Products
        </h2>
        <p className="text-gray-600 mb-12">
          Explore our complete range of digital solutions designed to help your business grow
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full"
            >
              {/* Header */}
              <div className={`relative bg-gradient-to-r ${item.color} text-white p-6`}>
                
                {/* Curved shape */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-bl-full"></div>

                {/* Badge */}
                <span className="absolute top-4 right-4 bg-yellow-200 text-xs px-3 py-1 rounded-full text-gray-700 font-medium">
                  {item.badge}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg mb-4 text-xl">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm opacity-90">{item.subtitle}</p>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <ul className="space-y-3 mb-6">
                  {item.features.map((f, i) => (
                    <li
                      key={i}
                      className={`flex items-center text-sm text-gray-600 ${
                        item.noCheck ? "italic" : ""
                      }`}
                    >
                      {!item.noCheck && (
                        <AiOutlineCheck className="text-green-500 mr-2" />
                      )}
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="mt-auto w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 rounded-lg transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}