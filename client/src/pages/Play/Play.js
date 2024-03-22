import React, { useState } from 'react';
import './Play.css';

function Play() {
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, imageName) => {
    setDraggedItem(imageName);
    fetch('https://localhost:5000/waste-check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ imageName: imageName })
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetItem) => {
    e.preventDefault();
    // Logic to swap positions of draggedItem and targetItem
    console.log(`Dropped ${draggedItem} onto ${targetItem}`);
  };

  return (
    <div className="App">
      <div className="header">
        <img src="pause.png" class="header-pause"></img>
        <p class="logo">Waste Wizard</p>
        <div>
          <img src="star.png" class="header-star"></img>
          <img src="star.png" class="header-star"></img>
          <img src="star.png" class="header-star"></img>
        </div>
      </div>
      <div className="gameplay">
        <div className="conveyor-belt">
          <p>Sort Waste!</p>
        </div>
        <div className="conveyor-belt">
          <p>Sort Waste!</p>
        </div>
        <div className="conveyor-belt">
          <p>Sort Waste!</p>
        </div>
        <div class="bin-bar">
          <div>
            <img src="bin.png" class="bin"></img>
            <img src="bin.png" class="bin"></img>
            <img src="bin.png" class="bin"></img>
          </div>
          <img src="wizard.png" class="wizard"></img>
        </div>
      </div>
      <img src="waste/paper.png" className="draggable" draggable onDragStart={(e) => handleDragStart(e, 'Item 1')} />
    </div>
  );
}

export default Play;