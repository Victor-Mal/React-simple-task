import React from "react";
import Avatar from './AvatarGallery/Avatar1.png';
import './index.css';

function AvatarGallery (props) {
    return (
      <img className='Avatar' src={Avatar} alt="Avatar" />
    );
  }

export default AvatarGallery;