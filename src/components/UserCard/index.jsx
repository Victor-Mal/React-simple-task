import React from "react";
import AvatarGallery from "../UserAvatar";
import './index.css'

function UserCard(props) {
  return (
    <main className='UserCard'>
      <div className="headline">
        <AvatarGallery />
        <h1>John Doe</h1>
      </div>
      <div className="persInfo">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
          quas.
        </p>
      </div>
    </main>
  );
}

export default UserCard;
