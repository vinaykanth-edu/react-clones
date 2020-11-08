import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MjcwNDkxNjYz/hilary-duff-17191546-1-402.jpg",
      message: "Whats up",
    },
    {
      name: "Ellen",
      image:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MjcwNDkxNjYz/hilary-duff-17191546-1-402.jpg",
      message: "How's it going?",
    },
    {
      message: "Where is  it going?",
    },
  ]);

  const handleSend = e => {
      e.preventDefault();
      setMessages([...messages, {message: input}]);
      setInput("");
  };
  
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        You matched with Ellen on 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              classname="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen__input">
          <input
            value={input}
            onChange = {e => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message..."
            type="text"
          />
          <button onClick={handleSend} type="submit" className="chatScreen__inputBtn">SEND</button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
