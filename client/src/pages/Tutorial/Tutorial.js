import React, { useState } from 'react';
import './Tutorial.css';

function Tutorial() {
  // State to manage the currently displayed image
  const [currentImage, setCurrentImage] = useState('WASTEWIZARDLOGO.png');

  // Function to change the displayed image
  const changeImage = (imagePath) => {
    setCurrentImage(imagePath);
  };

  return (
    <div>
      <h1>HOW TO PLAY!</h1>
      <img src={currentImage} alt="Tutorial" height="360" />

      <div>
        <button onClick={() => changeImage('Play.png')}>Play</button>
        <button onClick={() => changeImage('Multiplayer.png')}>Multiplayer</button>
        <button onClick={() => changeImage('Shop.png')}>Shop</button>
      </div>
      <div>
        <button onClick={() => changeImage('Leaderboard.png')}>Leaderboard</button>
        <button onClick={() => changeImage('Debug.png')}>Debug</button>
        <button onClick={() => changeImage('Login.png')}>Login</button>
      </div>
    </div>
  );
}

export default Tutorial;