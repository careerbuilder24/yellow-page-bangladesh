import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1f2a37] text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Business Categories</li>
            <li>Our Blog</li>
            <li>Add Your Business</li>
            <li>Advertise with Us</li>
            <li>Yellow Pay</li>
            <li>Data Collection</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Products</h3>
          <ul className="space-y-2">
            <li>YP Micro App</li>
            <li>SEO Services</li>
            <li>Google & Facebook Ads</li>
            <li>Tap & Review</li>
            <li>Yellow Shop</li>
            <li>Email Marketing</li>
            <li>Social Media Management</li>
            <li>Office 365</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>Print Directory</li>
            <li>Online Directory</li>
            <li>Tour Guide Sites</li>
            <li>Digital Marketing</li>
            <li>SEO Services</li>
            <li>Website Development</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Top Categories</h3>
          <ul className="space-y-2">
            <li>Advocates & Lawyers</li>
            <li>Financial Services</li>
            <li>Money Transfer</li>
            <li>NGOs</li>
            <li>Supermarkets</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Partner Sites</h3>
          <ul className="space-y-2">
            <li>Yellow Pages Kenya</li>
            <li>Yellow Tanzania</li>
            <li>Yellow Uganda</li>
          </ul>
        </div>

        {/* Column 6 */}
        <div>
          <h3 className="text-white font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>Who We Are</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Left */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.postimg.cc/x8n10xYf/yellow.png"
            alt="Yellow Pages Logo"
            className="w-10  h-10 object-contain"
          />
          <div>
            <p className="text-white font-semibold">Yellow Pages Bangladesh</p>
            <p className="text-gray-400 text-xs">
              The No.1 Digital Marketing Agency
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">LinkedIn</span>
          <span className="hover:text-white cursor-pointer">X</span>
          <span className="hover:text-white cursor-pointer">Facebook</span>
          <span className="hover:text-white cursor-pointer">Instagram</span>
        </div>
      </div>
    </footer>
  );
}
