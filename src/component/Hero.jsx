import React from "react";
import { useNavigate } from "react-router-dom";
import woman from '../assets/woman.jpg'


const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-purple-200 to-purple-400 min-h-screen flex flex-col justify-center items-center"
    // style={{ backgroundImage: `url(${woman})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="text-center">
        <h1  className="text-4xl md:text-6xl font-bold text-purple-800 mb-4">Your</h1>
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-4 ml-12">
        Mental Health Matters
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Let us help you find your peace of mind.
        </p>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
