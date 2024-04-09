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
      <div className="md:hidden">
        {nav ? (
          <AiOutlineClose onClick={handleNav} className="text-3xl cursor-pointer" />
        ) : (
          <AiOutlineMenu onClick={handleNav} className="text-3xl cursor-pointer" />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-100 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-purple-800 m-4 text-center">Navigation</h1>
        <li className="p-4 border-b border-gray-300"><Link to="/" className="hover:text-purple-900">Home</Link></li>
        <li className="p-4 border-b border-gray-300"><Link to="/company" className="hover:text-purple-900">Company</Link></li>
        <li className="p-4 border-b border-gray-300"><Link to="/resources" className="hover:text-purple-900">Resources</Link></li>
        <li className="p-4 border-b border-gray-300"><Link to="/about" className="hover:text-purple-900">About</Link></li>
        <li className="p-4"><Link to="/contact" className="hover:text-purple-900">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
