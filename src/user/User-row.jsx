import React from "react";

const User_row = () => {
  return (
    <div className="w-90 h-60 bg-indigo-900 rounded-lg p-6 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-3/5 h-16 rounded-full bg-pink-400 flex items-center justify-center">
          <img
            className=" rounded-full "
            src="https://imgs.search.brave.com/4DvdJCZqkg2j98nnjI_xYSML6rs7NDD60o07dRnBQwo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9ja29mdW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEyL2NpcmNsZS1w/aG90by5qcGc"
            alt=""
          />
        </div>
        <div className=" w-2/5 ml-4">
          <h2 className="text-white font-semibold">Hourly Rain Deal</h2>
          <p className="text-gray-400">Get a cup of coffee is on us</p>
        </div>
      </div>
    </div>
  );
};

export default User_row;
