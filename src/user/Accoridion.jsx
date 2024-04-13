import React, { useState } from "react";

const Content = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-md mb-4">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        >
          &#x25BC;
        </span>
      </div>
      {isOpen && <div className="p-4 border-t border-gray-300">{content}</div>}
    </div>
  );
};

export default Content;
