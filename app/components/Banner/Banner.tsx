// import React from "react";

// export default function Banner() {
//   return (
//     <div className="relative w-full h-[750px] overflow-hidden flex items-center justify-center">
//       {/* YouTube Video Background (Fixed Cover) */}
//       <iframe
//         className="absolute top-1/2 left-1/2 
//                    w-[177.77vh] h-[56.25vw] 
//                    min-w-full min-h-full 
//                    -translate-x-1/2 -translate-y-1/2 
//                    pointer-events-none"
//         src="https://www.youtube.com/embed/jIXyGfDpRBs?autoplay=1&mute=1&loop=1&playlist=jIXyGfDpRBs&controls=0&showinfo=0&modestbranding=1"
//         title="Background Video"
//         frameBorder="0"
//         allow="autoplay; fullscreen"
//       ></iframe>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/10"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-4 max-w-2xl">
//         <h1 className="text-3xl md:text-5xl font-bold mb-4">
//           Discover and Connect with Local Businesses
//         </h1>

//         <p className="text-sm md:text-lg mb-6">
//           Explore our comprehensive online business directory. Find services,
//           products, and contact information for businesses near you.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="bg-[#FBEF21] hover:bg-[#f7ef5f] px-6 py-3 rounded-lg font-semibold text-black">
//             Find Local Business
//           </button>

//           <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold">
//             Explore Business Categories
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function Banner() {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[750px] overflow-hidden flex items-center justify-center">

      {/* 🎥 YouTube Background */}
      <iframe
        className="absolute top-1/2 left-1/2 
                   w-[200%] h-[200%] 
                   -translate-x-1/2 -translate-y-1/2 
                   pointer-events-none"
        src="https://www.youtube.com/embed/jIXyGfDpRBs?autoplay=1&mute=1&loop=1&playlist=jIXyGfDpRBs&controls=0&showinfo=0&modestbranding=1"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; fullscreen"
      ></iframe>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-3xl">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Discover and Connect with Local Businesses
        </h1>

        {/* Paragraph */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 text-gray-200">
          Explore our comprehensive online business directory. Find services,
          products, and contact information for businesses near you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">

          <button className="w-full sm:w-auto bg-[#FBEF21] hover:bg-[#f7ef5f] px-5 py-3 rounded-lg font-semibold text-black text-sm sm:text-base">
            Find Local Business
          </button>

          <button className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 px-5 py-3 rounded-lg font-semibold text-sm sm:text-base">
            Explore Business Categories
          </button>

        </div>
      </div>
    </div>
  );
}