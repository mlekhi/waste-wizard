import React from 'react';
import './Debug.css';

function Debug() {
    return (
        <div className="App">
          <h1>Debug: Level Selection</h1>
          <div className="DebugInfo">
          <div className="DebugSpacing">
            <div className="DebugLevelBox">
                <div className="LevelDisplay">
                <button class = "DebugButton">Level 1</button>
                <button class = "DebugButton">Level 2</button>
                <button class = "DebugButton">Level 3</button>
                <button class = "DebugButton">Level 4</button>
                <button class = "DebugButton">Level 5</button>
                <button class = "DebugButton">Level 6</button>
                <button class = "DebugButton">Level 7</button>
                <button class = "DebugButton">Level 8</button>
                <button class = "DebugButton">Level 9</button>
                <button class = "DebugButton">Level 10</button>
                </div>
            </div>
            </div>
          </div>
        </div>
      );
}

export default Debug;