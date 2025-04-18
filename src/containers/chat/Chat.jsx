import React, { useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import "./chat.css";

const Chat = () => {
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm a bot! 😊", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <>
      {show ? (
        <div className="chat">
          <div className="chat-header">
            <span>ChatBot</span>
            <IoIosArrowDown
              className="close-icon"
              onClick={() => setShow(false)}
            />
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      ) : (
        <FaFacebookMessenger
          className="messenger-icon"
          onClick={() => setShow(true)}
        />
      )}
    </>
  );
};


export default Chat;  
