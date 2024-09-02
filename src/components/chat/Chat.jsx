import "./chat.scss";
import React, { useState } from "react";

export default function Chat() {
  const [chat, setChat] = useState(true);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet ....</p>
        </div>
        {/* Add more message blocks as needed */}
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet ....</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet ....</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet ....</p>
        </div>
        {/* Add more message blocks as needed */}
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet ....</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet ....</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet ....</p>
        </div>
        {/* Add more message blocks as needed */}
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet ....</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet ....</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet ....</p>
        </div>
        {/* Add more message blocks as needed */}
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet ....</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet ....</p>
        </div>
  
      </div>

      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              john doe
            </div>
            <div className="close" onClick={() => setChat(null)}>
              x
            </div>
          </div>
          <div className="center">
            <div className="chatMessage own">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi incidunt rerum ab?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi incidunt rerum ab?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi incidunt rerum ab?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi incidunt rerum ab?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi incidunt rerum ab?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi incidunt rerum ab?</p>
              <span>1 hour ago</span>
            </div>
            {/* More chat messages here */}
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
