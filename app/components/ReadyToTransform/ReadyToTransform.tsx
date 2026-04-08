
import React from "react";
import { FiBox } from "react-icons/fi";

export default function ReadyToTransform() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Ready to Transform Your Business?
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Our team of experts is ready to help you choose the perfect solutions for
          your business needs. Get in touch today for a personalized consultation.
        </p>

        {/* Button */}
        <button className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg shadow-md transition">
          <FiBox className="text-lg" />
          View All Products
        </button>

      </div>
    </section>
  );
}