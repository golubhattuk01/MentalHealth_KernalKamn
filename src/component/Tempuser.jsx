import React from "react";
import { useFirebase } from "../FirebaseSetup/Context";
import "./LoginSuccessPage.css";
import Dashboard from "../user/Dashboard"
import UserTest from "../loginAndSignup/userTest/UserTest";

const LoginSuccessPage = () => {
  const { user } = useFirebase();

  return (
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
          <h1 className="login-success-welcome">Welcome, {user.displayName}!</h1>
        </div>
        <p className="login-success-message">
          You have successfully logged in with Google.
        </p>
        
      </div>
      <UserTest></UserTest>
    </div>
  );
};

export default LoginSuccessPage;
