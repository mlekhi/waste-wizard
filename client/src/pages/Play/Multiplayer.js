import React, { useState, useEffect } from 'react';
import './Play.css';
import Modal from '../../components/Modal/Modal';
import WinModal from '../../components/WinModal/WinModal';
import LoseModal from '../../components/LoseModal/LoseModal';

function Multiplayer() {
  const [draggedItem, setDraggedItem] = useState(null);
  const [strikes, setStrikes] = useState(3);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const imageVisibility = {
    bananaPeel: true,
    paper: true,
    can: true,
    cheese: true,
    container: true,
    drinkCan: true,
    glassBottle: true,
    lettuce: true,
    plasticBag: true,
    plasticBottle: true,
    pizzaBox: true,
    potatoPeel: true,
    takeOutContainer: true,
  };  

  const minTop1 = window.innerHeight * 0.20; // Minimum top position (25% from the top)
  const maxTop1 = window.innerHeight * 0.65; // Maximum top position (75% from the top)
  const minLeft1 = window.innerWidth * 0.10; // Minimum left position (25% from the left)
  const maxLeft1 = window.innerWidth * 0.40; // Maximum left position (75% from the left)
  const minTop2 = window.innerHeight * 0.20; // Minimum top position (25% from the top)
  const maxTop2 = window.innerHeight * 0.65; // Maximum top position (75% from the top)
  const minLeft2 = window.innerWidth * 0.60; // Minimum left position (25% from the left)
  const maxLeft2 = window.innerWidth * 0.90; // Maximum left position (75% from the left)

  function setImageVisibility(imageName, isVisible) {
    imageVisibility[imageName] = isVisible;
  }  
  
  const handleDragStart = (e, imageName) => {
    setDraggedItem(imageName);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleQuitGame = () => {
    console.log("Quitting game ...");
    window.location.href = '/';
  }

  const handleRedoLevel = () => {
    window.location.href = '/Play';
  }

  useEffect(() => {
    const garbageLeft = Object.values(imageVisibility).some(isVisible => isVisible);
    if(!garbageLeft){
      setIsGameOver(true);
      setIsWin(true);
    }
  }, [imageVisibility]);

  const handleDrop = (e, imageName) => {
    console.log("drop handling");
    e.preventDefault();

    // Get the coordinates of the drop event
    const dropX = e.clientX;
    const dropY = e.clientY;
  
    // Get all bin elements
    const binElements = document.querySelectorAll('.bin');
  
    // Iterate through each bin element
    binElements.forEach((binElement, index) => {
      // Get the bounding box of the bin element
      const binRect = binElement.getBoundingClientRect();
  
      // Check if the drop occurred within the bounds of the current bin
      if (
        dropX >= binRect.left &&
        dropX <= binRect.right &&
        dropY >= binRect.top &&
        dropY <= binRect.bottom
        ) {
          // If the drop occurred within the current bin, log a message
          console.log(`${imageName} dropped into bin ${index}`);
          fetch('http://localhost:5000/waste-check', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ imageName: imageName, binNum: index })
          })
          .catch(error => {
            console.error('Error:', error);
          });
        }
    });
  };

  return (
    <div class="split-screen">
        <div class="left">
        <div className="gameplay">
            <div class="bin-bar-left">
            <div>
                <img src="bins/garbage.png" class="bin"></img>
                <img src="bins/recycling.png" class="bin"></img>
                <img src="bins/compost.png" class="bin"></img>
            </div>
            <img src="wizard.png" class="wizard-left"></img>
            </div>
        </div>
        {Object.entries(imageVisibility).map(([imageName, isVisible]) => (
            isVisible && (
            <img
                key={imageName} // Add a unique key for each image
                src={`waste/${imageName}.png`} // Use template literals to dynamically set the image source
                className="draggable"
                style={{
                position: 'absolute',
                top: `${Math.random() * (maxTop1 - minTop1) + minTop1}px`, // Generate random top position 
                left: `${Math.random() * (maxLeft1 - minLeft1) + minLeft1}px`, // Generate random left position
                }}      
                onDragStart={(e) => handleDragStart(e, imageName)}
                onDragEnd={(e) => handleDrop(e, imageName)}
                onDragOver={handleDragOver}
                alt={imageName}
            />
            )
        ))}
        <img
            style={{
            position: 'absolute',
            top: `${Math.random() * (maxTop1 - minTop1) + minTop1}px`, // Generate random top position 
            left: `${Math.random() * (maxLeft1 - minLeft1) + minLeft1}px`, // Generate random left position
            }}      
            src="powerup.png" class="draggable"/>
        <div>
            <img src="portal.png" className="portal"/>
        </div>
        </div>
        <div className="right">
        <div className="gameplay">
            <div class="bin-bar-right">
            <div>
                <img src="bins/garbage.png" class="bin"></img>
                <img src="bins/recycling.png" class="bin"></img>
                <img src="bins/compost.png" class="bin"></img>
            </div>
            <img src="wizard.png" class="wizard"></img>
            </div>
        </div>
        {Object.entries(imageVisibility).map(([imageName, isVisible]) => (
            isVisible && (
            <img
                key={imageName} // Add a unique key for each image
                src={`waste/${imageName}.png`} // Use template literals to dynamically set the image source
                className="draggable"
                style={{
                position: 'absolute',
                top: `${Math.random() * (maxTop2 - minTop2) + minTop2}px`, // Generate random top position 
                left: `${Math.random() * (maxLeft2 - minLeft2) + minLeft2}px`, // Generate random left position
                }}      
                onDragStart={(e) => handleDragStart(e, imageName)}
                onDragEnd={(e) => handleDrop(e, imageName)}
                onDragOver={handleDragOver}
                alt={imageName}
            />
            )
        ))}
        <img
            style={{
            position: 'absolute',
            top: `${Math.random() * (maxTop2 - minTop2) + minTop2}px`, // Generate random top position 
            left: `${Math.random() * (maxLeft2 - minLeft2) + minLeft2}px`, // Generate random left position
            }}      
            src="powerup.png" class="draggable"/>
        </div>
    </div>
  );
}

export default Multiplayer;