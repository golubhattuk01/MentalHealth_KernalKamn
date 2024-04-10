import React, { Component } from "react";
// import chatboxIcon from "./path/to/chatbox-icon.svg"; // Adjust the path as necessary
// import "./bot.css";
class ChatBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChatBoxOpen: false,
      messages: [],
      inputMessage: "",
    };
  }

  toggleChatBox = () => {
    this.setState((prevState) => ({
      isChatBoxOpen: !prevState.isChatBoxOpen,
    }));
  };

  handleInputChange = (event) => {
    this.setState({ inputMessage: event.target.value });
  };

  sendMessage = () => {
    const { inputMessage, messages } = this.state;
    if (inputMessage.trim() === "") return;

    const userMessage = { name: "User", message: inputMessage };
    this.setState(
      {
        messages: [...messages, userMessage],
        inputMessage: "",
      },
      () => {
        fetch("http://127.0.0.1:5000/predict", {
          method: "POST",
          body: JSON.stringify({ message: inputMessage }),
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const samMessage = { name: "Sam", message: data.answer };
            this.setState((prevState) => ({
              messages: [...prevState.messages, samMessage],
            }));
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    );
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.sendMessage();
    }
  };

  render() {
    const { isChatBoxOpen, messages, inputMessage } = this.state;

    return (
      <div className="container">
        <div className="chatbox">
          <div
            className={`chatbox__support ${
              isChatBoxOpen ? "chatbox--active" : ""
            }`}
          >
            <div className="chatbox__header" onClick={this.toggleChatBox}>
              <div className="chatbox__image--header">
                <img
                  src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
                  alt="Chat Support"
                />
              </div>
              <div className="chatbox__content--header">
                <h4 className="chatbox__heading--header">Chat support</h4>
                <p className="chatbox__description--header">
                  Hi. My name is Sam. How can I help you?
                </p>
              </div>
            </div>
            <div className="chatbox__messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`messages__item messages__item--${
                    msg.name === "Sam" ? "visitor" : "operator"
                  }`}
                >
                  {msg.message}
                </div>
              ))}
            </div>
            <div className="chatbox__footer">
              <input
                type="text"
                placeholder="Write a message..."
                value={inputMessage}
                onChange={this.handleInputChange}
                onKeyPress={this.handleKeyPress}
              />
              <button
                className="chatbox_send--footer send_button"
                onClick={this.sendMessage}
              >
                Send
              </button>
            </div>
          </div>
          <div className="chatbox__button" onClick={this.toggleChatBox}>
            <button>
              {/* <img src={chatboxIcon} alt="Chatbox icon" /> */}
              <h1>submit</h1>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBot;
