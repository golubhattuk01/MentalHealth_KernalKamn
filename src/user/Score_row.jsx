import React from "react";

const Score_row = () => {
  return (
    <div className="ml-4 w-4/2 bg-indigo-900 rounded-lg p-6 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
          <span
            role="img"
            aria-label="Checkmark"
            className="text-white text-2xl"
          >
            &#10003;
          </span>
        </div>
        <div className="ml-4">
          <h2 className="text-white font-semibold">Payment Successful</h2>
          <p className="text-gray-400">$12</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
          <span
            role="img"
            aria-label="Credit Card"
            className="text-white text-xl"
          >
            &#128179;
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
          <span role="img" aria-label="Bank" className="text-white text-xl">
            &#127975;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Score_row;
