import React, { useRef } from "react";
import { useFirebase } from "../FirebaseSetup/Context.jsx";
import search from '../assets/google.png'
import loginImage from '../assets/loginimage.png'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const emailRef = useRef(null); // corrected typo in variable name
  const passwordRef = useRef(null); // corrected typo in variable name
  const firebase = useFirebase();
  const navigate = useNavigate();

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 bg-gradient-to-b from-purple-200 to-purple-400">
      <div className="md:w-1/3 max-w-sm">
        <img
          src={loginImage}
          alt="Sample"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-purple-300 rounded"
          type="text"
          placeholder="Email Address"
          ref={emailRef} // corrected typo in ref assignment
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-purple-300 rounded mt-4"
          type="password"
          placeholder="Password"
          ref={passwordRef} // corrected typo in ref assignment
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-purple-500 hover:text-purple-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="/#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 mr-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
          <button
            className="mt-4  bg-blue-600 hover:bg-blue-700 px-4 py-2  text-white uppercase rounded text-xs tracking-wider "
            onClick={() => firebase.signUpWithGoogle()}
          >
            <img src={search} alt="" className="mr-2 h-4 w-4 inline" /><span className="">Continue with Google</span>
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-purple-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <a
        className="text-red-600 hover:underline hover:underline-offset-4 cursor-pointer"
        onClick={() => navigate("/signup")} // Navigate to login page on click
      >
        Register
      </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
