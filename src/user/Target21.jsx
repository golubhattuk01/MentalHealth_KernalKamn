import React from "react";

const Target21 = () => {
  return (
    <div className="w-1/2 bg-gray-900 text-white p-4 rounded-lg flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
          <img
            src="user-avatar.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div>
          <h2 className="font-semibold">Target 21</h2>
          <p className="text-gray-400 text-sm">@percy64</p>
        </div>
      </div>
      <div className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center">
        <span className="mr-2">Get Started</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Target21;
