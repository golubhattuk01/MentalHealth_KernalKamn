import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { useFirebase } from "../FirebaseSetup/Context";
import Day from "./Day";

const Calendar = () => {
  const firebase = useFirebase();
  useEffect(() => {
    console.log("heyy", firebase.fireUser);
  }, [firebase.fireUser]);

  // State to keep track of streak count
  const [streakCount, setStreakCount] = useState(0);

  // Function to handle click on a date cell
  let grid = firebase.fireUser?.problems || [];
  return (
    <div className="flex flex-wrap">
      {grid.map((day) => (
        <Day day={day} key={day.id}></Day>
      ))}
    </div>
  );
};

export default Calendar;
