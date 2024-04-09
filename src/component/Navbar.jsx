import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useFirebase } from "../FirebaseSetup/Context";

const Navbar = () => {
  const firebase = useFirebase();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-gradient-to-b from-purple-400 to-purple-200 flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white shadow-md" >
      <h1 className="text-center w-full text-3xl font-bold text-purple-800 font-open-sans-unique cursor-pointer">
        <Link to="/" className="hover:text-purple-900">KernalKamn</Link>
      </h1>
      
     
    </div>
  );
};

export default Navbar;
