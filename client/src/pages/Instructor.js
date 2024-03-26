import React from 'react';
import './Instructor.css';
 
function Instructor(){
    const numberOfRows = 10;

    const players = [];
    for (let i = 1; i <= numberOfRows; i++) {
      players.push({
        playerName: `Player ${i}`,
        levelsCompleted: Math.floor(Math.random() * 10), 
        totalScore: Math.floor(Math.random() * 1000), 
        coinsCollected: Math.floor(Math.random() * 100) 
      });
    }
    return(
<>
<head>
    <title>Player Data Chart</title>
</head>
<body>
    <h2>Player Data</h2>

    <table>
        <div>
            <thread>
                <tr>
                    <th width="1000px">Player Name</th>
                    <th width="1000px">Levels Completed</th>
                    <th width="1000px">Total Score</th>
                    <th width="1000px">Coins Collected</th>
                </tr>

            <tbody>

            {players.map((player, index) => (
            <tr key={index}>
              <td>{player.playerName}</td>
              <td>{player.levelsCompleted}</td>
              <td>{player.totalScore}</td>
              <td>{player.coinsCollected}</td>
            </tr>
          ))}


            </tbody>
            </thread>
        </div>
    </table>
</body>
</>
);
}

export default Instructor;