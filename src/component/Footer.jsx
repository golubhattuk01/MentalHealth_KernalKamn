import React from "react";
import {
  
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-purple-400 to-purple-200  py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-800">
      <div className="ml-7">
  <h1 className="w-full text-3xl font-bold text-purple-800">KernalKaam</h1>
  <p className="py-4 text-gray-800 space-x-4">
    Remember, healing is not a linear journey. Be patient with yourself. Reach out for support when you need it, and always remember that you are not alone on this path to wellness
  </p>
  <div className="flex justify-between md:w-[35%] my-6 space-x-4">
    <FaFacebookSquare size={30} />
    <FaInstagram size={30} />
    <FaGithubSquare size={30} />
    
  </div>
</div>

      <div className="lg:col-span-2 flex justify-between mt-6 w-40 ml-auto ">
        
        <div>
          <h6 className="font-medium text-gray-800">Support</h6>
          <ul>
            <Link to="/">
              <li className="py-2 text-gray-800">Talk to Us</li>
            </Link>
            <Link to="/">
              <li className="py-2 text-gray-800">Documentation</li>
            </Link>
            <Link to="/">
              <li className="py-2 text-gray-800">Guides</li>
            </Link>
          
          </ul>
        </div>
        
        </div>
    </div>
  );
};

export default Footer;
