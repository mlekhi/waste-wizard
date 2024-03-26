// to do: random location generation (based on api level check), have sorted items disappear

import React, { useState, useEffect } from 'react';
import './Play.css';

function Play() {
  const [draggedItem, setDraggedItem] = useState(null);
  const [score, setScore] = useState(0);
  const [strikes, setStrikes] = useState(3);
  const [fact, setFact] = useState('');
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

  const minTop = window.innerHeight * 0.20; // Minimum top position (25% from the top)
  const maxTop = window.innerHeight * 0.65; // Maximum top position (75% from the top)
  const minLeft = window.innerWidth * 0.30; // Minimum left position (25% from the left)
  const maxLeft = window.innerWidth * 0.70; // Maximum left position (75% from the left)

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await fetch('http://localhost:5000/get-score');
        if (!response.ok) {
          throw new Error('Failed to fetch score');
        }
        const data = await response.json();
        setScore(data.score);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchScore();
  }, []); // Empty dependency array to run only once on component mount
  
  function setImageVisibility(imageName, isVisible) {
    imageVisibility[imageName] = isVisible;
  }  
  
  const decrementStrikes = () => {
    setStrikes(prevStrikes => prevStrikes - 1);
  };  
  const incrementStrikes = () => {
    if (strikes <= 5) {
      setStrikes(prevStrikes => prevStrikes + 1);
    }
  };  

  useEffect(() => {
    const fetchFact = async () => {
      try {
        const response = await fetch('http://localhost:5000/get-fact');
        if (!response.ok) {
          throw new Error('Failed to fetch fact');
        }
        const data = await response.text();
        setFact(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFact();
    const interval = setInterval(() => {
      fetchFact();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const handleDragStart = (e, imageName) => {
    setDraggedItem(imageName);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

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
          .then(response => response.json())
          .then(data => {
            setImageVisibility(imageName, false);
            // If fetch returns true, hide the image
            if (data && data.success) {
              console.log("correct bin");
              // Update score after successful drop
              fetch('http://localhost:5000/update-score', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json' // Specify the content type as JSON
                },          
                body: JSON.stringify({ score_update: 5 })
              })
              .then(response => response.json())
              .then(data => {
                if (data) {
                  // Update score state variable
                  setScore(data.score);
                  console.log("update score");
                }
              })
              .catch(error => {
                console.error('Error:', error);
              });
            } else {
              console.log("wrong bin");
              fetch('http://localhost:5000/update-score', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json' // Specify the content type as JSON
                },          
                body: JSON.stringify({ score_update: -3 })
              })
              .then(response => response.json())
              .then(data => {
                if (data) {
                  // Update score state variable
                  decrementStrikes();
                  setScore(data.score);
                  console.log("update score");
                }
              })
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
        }
    });
  };

  return (
    <div className="App">
      <div className="header">
        <img src="pause.png" class="header-pause"></img>
        <p class="logo">Waste Wizard</p>
        <div>
          <p>Score: { score }</p>
        </div>
      </div>
      <div className="gameplay">
        <div class="bin-bar">
          <div class="wand-bar">
          {Array.from({ length: strikes }).map((_, index) => (
            <img key={index} src="wand.png" className="wand" alt="Wand"></img>
          ))}
          </div>
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
              top: `${Math.random() * (maxTop - minTop) + minTop}px`, // Generate random top position 
              left: `${Math.random() * (maxLeft - minLeft) + minLeft}px`, // Generate random left position
            }}      
            onDragStart={(e) => handleDragStart(e, imageName)}
            onDragEnd={(e) => handleDrop(e, imageName)}
            onDragOver={handleDragOver}
            alt={imageName}
          />
        )
      ))}
      <img onClick={incrementStrikes}
        style={{
          position: 'absolute',
          top: `${Math.random() * (maxTop - minTop) + minTop}px`, // Generate random top position 
          left: `${Math.random() * (maxLeft - minLeft) + minLeft}px`, // Generate random left position
        }}      
        src="powerup.png" class="draggable"/>
      <div class="facts-container">
        <p class="facts">{fact}</p>
      </div>
      <div>
        <img src="portal.png" className="portal"/>
      </div>
    </div>
  );
}

export default Play;