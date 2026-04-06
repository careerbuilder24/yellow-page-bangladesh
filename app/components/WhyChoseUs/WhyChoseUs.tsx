// import React from 'react'

// export default function WhyChoseUs() {
//   return (
//     <>
      
//     </>
//   )
// }
import React from "react";
import { Award, TrendingUp, Users, MapPin } from "lucide-react";

export default function WhyChoseUs() {
  const features = [
    {
      icon: <Award size={28} />,
      title: "Quality Opportunities",
      desc: "Access to verified job listings from reputable companies across various industries",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Career Growth",
      desc: "Find roles that align with your career goals and professional development",
    },
    {
      icon: <Users size={28} />,
      title: "Expert Support",
      desc: "Get guidance from our recruitment specialists and career advisors",
    },
    {
      icon: <MapPin size={28} />,
      title: "Local & Regional",
      desc: "Opportunities across Kenya and the broader East African region",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-12">Why Choose YP Jobs?</h2>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-[#FDEE21] rounded-lg mx-auto mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}