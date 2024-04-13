import React, { useEffect } from "react";
import { useFirebase } from "../FirebaseSetup/Context";
const User_row = () => {
  const { user } = useFirebase();
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div className="hover:border-slate-400 w-90 h-60 bg-gradient-to-b from-purple-300 to-purple-400 rounded-lg p-6 flex items-center justify-between">
      <div className="flex items-center">
        <div className="h-16 rounded-full bg-pink-400 flex items-center justify-center">
          <img className=" rounded-full " src={user.photoURL} alt="" />
        </div>
        <div className=" w-2/5 ml-4">
          <h2 className="no-underline decoration-1 text-black font-semibold">
            {user.displayName}
          </h2>
          <p className="text-black-400">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default User_row;
