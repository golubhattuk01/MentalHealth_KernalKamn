import React from "react";
import { useNavigate } from "react-router-dom";

const Day = ({ day }) => {
  const navigate = useNavigate();
  function getCurrentDayOfMonth() {
    const today = new Date(); // This creates a new Date object with the current date and time
    return today.getDate(); // This returns the day of the month from the Date object
  }

  // Example usage:
  const dayOfMonth = getCurrentDayOfMonth();

  const handleDateClick = () => {
    console.log("Day ID:", day.id, "Type:", typeof day.id);
    console.log("Day of Month:", dayOfMonth, "Type:", typeof dayOfMonth);

    if (day.id !== dayOfMonth) {
      console.log("can't attempt this today");
      return;
    }
    navigate("/task-today");
  };

  return (
    <div
      className="date-cell rounded-md border-blue-500 hover:bg-purple-800 hover:text-white m-4"
      onClick={() => handleDateClick()}
    >
      {day?.id}
    </div>
  );
};

export default Day;
