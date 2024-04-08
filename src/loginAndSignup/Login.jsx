import React, { useRef } from "react";
import { useFirebase } from "../FirebaseSetup/Context.jsx";
import search from '../assets/google.png'


const Login = () => {
  const emialRef = useRef(null);
  const password = useRef(null);
  const firebase = useFirebase();

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        
      
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
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
          {/* //added my gaurav bhatt for google auth login */}
          <button
            className="mt-4  bg-blue-600 hover:bg-blue-700 px-4 py-2  text-white uppercase rounded text-xs tracking-wider "
            onClick={() => firebase.signUpWithGoogle()}
          >
            <img src={search }alt="" className="mr-2 h-4 w-4 inline " /><span className="">Continue with Google</span>
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="/#"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
