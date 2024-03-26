import React, { useState, useEffect } from 'react';
import './Play.css';
import Modal from './Modal';

function Play() {
  const [draggedItem, setDraggedItem] = useState(null);
  const [imageVisible, setImageVisible] = useState(true);
  const [score, setScore] = useState(0);
  const [fact, setFact] = useState('');
  const [isPaused, setIsPaused] = useState(false);


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

  const handleResumeButton = () => {
    setIsPaused(false);
  };

  const handlePauseButton = () => {
    setIsPaused(true);
  };

  const handleQuitGame = () => {
    console.log("Quitting game ...");
    window.location.href = '/';
  }

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
            setImageVisible(false);
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
        <img src="pause.png" className="header-pause" onClick={handlePauseButton} alt="Pause Button" /> {/* Pause button */}        
        <p class="logo">Waste Wizard</p>
        <div>
          <p>Score: { score }</p>
        </div>
      </div>
      <div className="gameplay">
        <div class="bin-bar">
          <div class="wand-bar">
            <img src="wand.png" class="wand"></img>
            <img src="wand.png" class="wand"></img>
            <img src="wand.png" class="wand"></img>
          </div>
          <div>
            <img src="bin.png" class="bin"></img>
            <img src="bin.png" class="bin"></img>
            <img src="bin.png" class="bin"></img>
          </div>
          <img src="wizard.png" class="wizard"></img>
        </div>
      </div>
      <img src="portal.png" className="portal"/>
      {imageVisible && (
        <img
          src="waste/paper.png"
          className="draggable"
          onDragStart={(e) => handleDragStart(e, 'paper')}
          onDragEnd={(e) => handleDrop(e, 'paper')}
          onDragOver={handleDragOver}
          alt="paper"
        />
      )}
      <p>{fact}</p>
      <Modal isOpen={isPaused} onClose={handleResumeButton} onQuit={handleQuitGame} /> {/* Render the modal */}
    </div>
  );
}

export default Play;