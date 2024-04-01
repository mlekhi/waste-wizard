import React from 'react';
import './Debug.css';

function Debug() {
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleLevelButton = (level) => {
    window.location.href = `/Play?level=${level}`;
  };

  return (
    <div className="App">
      <h1>Debug: Level Selection</h1>
      <div className="DebugInfo">
        <div className="DebugSpacing">
          <div className="DebugLevelBox">
            <div className="LevelDisplay">
              {levels.map((level) => (
                <button
                  key={level}
                  className="DebugButton" 
                  onClick={() => handleLevelButton(level)}
                >
                  Level {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Debug;

