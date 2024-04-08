import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <Link to="/">
              <li className="py-2 text-sm">Analytics</li>
            </Link>
            <Link to="/">
              <li className="py-2 text-sm">Marketing</li>
            </Link>
            <Link to="/">
              <li className="py-2 text-sm">Commerce</li>
            </Link>
            <Link to="/">
              <li className="py-2 text-sm">Insights</li>
            </Link>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <Link to="/">
              <li className="py-2 text-sm">Pricing</li>
            </Link>
            <Link to="/">
              <li className="py-2 text-sm">Documentation</li>
            </Link>
            <Link to="/">
              <li className="py-2 text-sm">Guides</li>
            </Link>
            <Link to="/">
              <li className="py-2 text-sm">API Status</li>
            </Link>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <Link to="/">
              <li className="py-2 text-sm">About</li>
            </Link>
            <Link to="/">
              <li className="py-2 text-sm">Blog</li>
            </Link>
            <Link to="/">
              <li className="py-2 text-sm">Jobs</li>
            </Link>
            <Link to="/">
              <li className="py-2 text-sm">Press</li>
            </Link>
            <Link to="/">
              <li className="py-2 text-sm">Careers</li>
            </Link>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <Link to="/">
              <li className="py-2 text-sm">Claim</li>
            </Link>
            <Link to="/">
              <li className="py-2 text-sm">Policy</li>
            </Link>
            <Link to="/">
              <li className="py-2 text-sm">Terms</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
