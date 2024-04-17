import React from "react";
import { useNavigate } from "react-router-dom";
// abc
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-30">
      <div
        className="bg-gradient-to-b from-purple-200 to-purple-400 min-h-screen flex flex-col justify-center items-center"
        // style={{ backgroundImage: `url(${woman})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="text-center text-purple-800">
          <h1 className="text-4xl md:text-9xl font-bold mb-4 ml-12">
            KernalKamn
          </h1>
          <p className="text-lg md:text-3xl text-gray-700 font-serif">
            We are one step ahead to improve your “kamn” with KernalKamn ♥
          </p>
        </div>
      </div>

      <div
        className="bg-gradient-to-b from-purple-400 to-purple-200 min-h-screen flex flex-col justify-center items-center"
        // style={{ backgroundImage: `url(${woman})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="text-center text-purple-800">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 ml-12">
            About Us
          </h1>
          <p className="text-lg md:text-xl ml-30 mr-30 text-gray-700 mb-6 font-serif">
            We have designed a solution for mental health which Focuses on{" "}
            <br />
            providing information about mental health and benefits of the
            website.
            <br />
            The Website Offers a chatbot, quiz section, <br />
            and mental health tracking calendar and streak.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-b from-purple-200 to-purple-400 min-h-screen flex flex-col justify-center items-center">
        <div className="text-center text-purple-800">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 ml-12">
            Quiz Section
          </h1>
          <p className="text-lg md:text-xl ml-30 mr-30 text-gray-700 mb-6 font-serif">
            Engage and educate through interactive mental health quizzes that
            will <br />
            help you initialize what you need to recover and is beneficial to
            heal.
          </p>
          <button
            className="mt-4 mr-4 bg-gradient-to-b from-purple-600 to-purple-800 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-b from-purple-400 to-purple-200 min-h-screen flex flex-col justify-center items-center">
        <div className="text-center text-purple-800">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 ml-12">
            Dashboard
          </h1>
          <p className="text-lg md:text-xl ml-30 mr-30 text-gray-700 mb-6 font-serif">
            Engage and educate through interactive mental health quizzes that
            will <br />
            help you initialize what you need to recover and is beneficial to
            heal.
          </p>
          <button
            className="mt-4 mr-4 bg-gradient-to-b from-purple-600 to-purple-800 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            onClick={() => navigate("/dash")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
