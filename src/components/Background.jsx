import React from "react";

const BackgroundVideoPage = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-5">
        <h1 className="text-4xl font-bold">Welcome to Our Transit Experience</h1>
        <p className="text-lg mt-2">Plan your journey with a single click.</p>
        
        {/* Interactive form with three input boxes */}
        <div className="mt-6 space-y-3 max-w-lg w-full">
          <input
            type="text"
            placeholder="Enter Starting Landmark (e.g., College, Mall, Birla Planetarium)"
            className="w-full p-3 rounded-md text-black"
          />
          <input
            type="text"
            placeholder="Enter Ending Landmark (e.g., RMK Engineering College)"
            className="w-full p-3 rounded-md text-black"
          />
          <input
            type="text"
            placeholder="Enter Your Home (e.g., Avadi)"
            className="w-full p-3 rounded-md text-black"
          />
        </div>
        <button className="mt-4 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-700">
          Plan My Journey
        </button>
      </div>
    </div>
  );
};

export default BackgroundVideoPage;
