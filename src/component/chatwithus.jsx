import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai"; // Import the chat icon

const ChatWithUs = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage whether the chatbot is open

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    // You can add more logic here to open/close the chatbot or trigger any other action
  };

  return (
    <div style={{ position: "fixed", bottom: 0, right: 0 }}>
      {isOpen && (
        <div
          style={{
            width: "300px",
            height: "400px",
            border: "1px solid #ccc",
            overflowY: "auto",
            backgroundColor: "#f9f9f9",
          }}
        >
          {/* Chatbot content */}
          {/* You can render your chatbot component or any chat interface here */}
          {/* For demonstration purposes, let's just display a message */}
          <div style={{ padding: "10px" }}>This is the chatbot</div>
        </div>
      )}
      {/* Chat icon */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          width: "40px",
          height: "40px",
          backgroundColor: "#007bff",
          color: "#fff",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={toggleChatbot}
      >
        <AiOutlineMessage size={24} />
      </div>
    </div>
  );
};

export default ChatWithUs;
