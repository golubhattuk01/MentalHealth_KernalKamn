import React, { useState, useEffect } from "react";

const Button = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [hoverPosition, setHoverPosition] = useState(0);

  useEffect(() => {
    let interval;

    if (isClicked) {
      interval = setInterval(() => {
        setHoverPosition((prevPosition) => (prevPosition + 1) % 360);
      }, 10);
    } else {
      clearInterval(interval);
      setHoverPosition(0);
    }

    return () => clearInterval(interval);
  }, [isClicked]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const gradientStyle = {
    background: `linear-gradient(${hoverPosition}deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff, #ff0000)`,
  };

  return (
    <div className="flex justify-center">
      <button
        className="relative px-6 py-3 text-white font-semibold bg-gray-800 rounded-md"
        onClick={handleClick}
        style={{
          backgroundClip: "padding-box",
          border: "4px solid transparent",
        }}
      >
        {children}
        <div
          className="absolute inset-0 rounded-md"
          style={{
            ...gradientStyle,
            backgroundClip: "padding-box",
            border: "4px solid transparent",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        />
      </button>
    </div>
  );
};

export default Button;
