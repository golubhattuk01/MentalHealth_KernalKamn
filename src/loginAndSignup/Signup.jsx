import React, { useRef } from "react";
import { useFirebase } from "../FirebaseSetup/Context.jsx";
import search from '../assets/google.png'
import { useNavigate } from "react-router-dom";
import signupImage from '../assets/signUpImage.png'

const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const firebase = useFirebase();
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
     
      await firebase.signup(email, password);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 bg-gradient-to-b from-purple-200 to-purple-400">
      <div className="md:w-1/3 max-w-sm">
        <img
          src={signupImage}
          alt="Sample"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-purple-300 rounded"
          type="text"
          placeholder="Email Address"
          ref={emailRef}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-purple-300 rounded mt-4"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <div className="text-center md:text-left">
          <button
            className="mt-4 mr-4 bg-green-600 hover:bg-green-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider cursor-pointer"
            onClick={handleSignup}
          >
            Sign Up
          </button>
          <button
            className="mt-4  bg-green-600 hover:bg-green-700 px-4 py-2  text-white uppercase rounded text-xs tracking-wider "
            onClick={() => firebase.signUpWithGoogle()}
          >
            <img src={search} alt="" className="mr-2 h-4 w-4 inline" /><span className="">Continue with Google</span>
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-purple-500 text-center md:text-left">
          Already have an account?{" "}
          <a
            className="text-blue-600 hover:underline hover:underline-offset-4 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default Signup;
