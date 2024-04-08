import React from "react";
import { useFirebase } from "../FirebaseSetup/Context";
const Tempuser = () => {
  const { user } = useFirebase();
  console.log(user);
  return (
    <div className="text-white">
      <center>
        <h1>{user.displayName}</h1>
        <h1>User logged in successfully</h1>
      </center>
    </div>
  );
};

export default Tempuser;
