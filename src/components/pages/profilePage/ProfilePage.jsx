import "./profilePage.scss";
import Chat from "../../chat/Chat";
import List from "../../list/List";
import React from "react";

export default function ProfilePage () {
  return (
    <div className='profilePage'>
      <div className='details'>
        <div className='wrapper'>
          <div className='title'>
            <h1>user information</h1>
            <button>Update profile</button>
          </div>
          <div className='info'>
            <span>
              Avatar:
              <img
                src='https://www.w3schools.com/howto/img_avatar.png'
                alt='Avatar'
                className='avatar'
              />
            </span>
            <span>
              Username: <b>john doe</b>
            </span>
            <span>
              E-mail: <b>john doe@gmail</b>
            </span>
          </div>
          <div className='title'>
            <h1>My List</h1>
            <button>create new post</button>
          </div>
          <List />
          <div className='title'>
            <h1>saved List</h1>
          </div>
        </div>
      </div>
      <div className='chatContainer'>
        <div className='wrapper' >
        <Chat/>
        </div>
      </div>
    </div>
  )
}
