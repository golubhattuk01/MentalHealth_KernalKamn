import React, { Component } from "react";
import "./style.css"; // Import your CSS file

class ChatBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChatBoxOpen: false,
      messages: [],
      inputMessage: "",
    };
    this.messagesEndRef = React.createRef();
  }

  componentDidMount() {
    // Scroll to the bottom of the chat messages when component mounts
    this.scrollToBottom();
  }

  componentDidUpdate() {
    // Scroll to the bottom of the chat messages when component updates with new messages
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  toggleChatBox = () => {
    this.setState((prevState) => ({
      isChatBoxOpen: !prevState.isChatBoxOpen,
    }));
  };

  handleInputChange = (event) => {
    this.setState({ inputMessage: event.target.value });
  };

  sendMessage = async () => {
    const { inputMessage, messages } = this.state;
    if (!inputMessage.trim()) return;

    const userMessage = { name: "User", message: inputMessage };
    this.setState(
      {
        messages: [...messages, userMessage],
        inputMessage: "",
      },
      async () => {
        try {
          const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            body: JSON.stringify({ message: inputMessage }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          const samMessage = { name: "Sam", message: data.answer };
          this.setState((prevState) => ({
            messages: [...prevState.messages, samMessage],
          }));
        } catch (error) {
          console.error("Error:", error);
        }
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

    // Reverse the order of messages to display user messages on top
    const reversedMessages = [...messages].reverse();

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
                {/* Placeholder image */}
                <img
                  src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
                  alt="Chat Support"
                />
              </div>
              <div className="chatbox__content--header">
                <h4 className="chatbox__heading--header">Chat support</h4>
                <p className="chatbox__description--header">
                  Hi. My name is Nova. How can I help you?
                </p>
              </div>
            </div>
            <div className="chatbox__messages">
              {reversedMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`messages__item ${
                    msg.name === "Sam"
                      ? "messages__item--operator"
                      : "messages__item--visitor"
                  }`}
                >
                  {msg.message}
                </div>
              ))}
              {/* Empty div used as ref to scroll to bottom */}
              <div ref={this.messagesEndRef} />
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
              {/* Placeholder image */}
              <img
                className="img-bot"
                src="https://w7.pngwing.com/pngs/408/238/png-transparent-pink-and-blue-illustration-discord-computer-icons-logo-user-internet-bot-discord-icon-purple-angle-violet-thumbnail.png"
                alt="Chatbox icon"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBot;
