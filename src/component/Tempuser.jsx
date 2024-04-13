import React, { useEffect } from "react";
import { useFirebase } from "../FirebaseSetup/Context";
import "./LoginSuccessPage.css";
import { useNavigate } from "react-router-dom";
import Dashboard from "../user/Dashboard";
import UserTest from "../loginAndSignup/userTest/UserTest";

const LoginSuccessPage = () => {
  const { user } = useFirebase();
  useEffect(() => {
    console.log(user);
  }, [user]);
  const navigate = useNavigate();

  return (
    <div>
      {user ? (
        <div className="login-success-container bg-gradient-to-b from-purple-200 to-purple-400">
          <div className="login-success-content">
            <div className="profile-section">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="login-success-profile-pic mx-auto"
                />
              ) : (
                <div className="login-success-default-pic">👤</div>
              )}
              <h1 className="login-success-welcome">
                Welcome, {user.displayName}!
              </h1>
            </div>
            <p className="login-success-message">
              You have successfully logged in with Google.
            </p>
            <br />

            <a
              className="text-red-600 hover:underline hover:underline-offset-4 cursor-pointer"
              onClick={() => navigate("/test")} // Navigate to login page on click
            >
              Ready to Go
            </a>
          </div>
        </div>
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
      )}
    </div>
  );
};

export default LoginSuccessPage;
