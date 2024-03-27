import React from 'react';
import './Leaderboard.css';

function Leaderboard(){
    const numberOfRows = 10;

    const players = [];
    for (let i = 1; i <= numberOfRows; i++) {
    players.push({
        playerName: `Player ${i}`,
        highScore: Math.floor(Math.random() * 1000) 
        });
    }
    return(
        <><head>
            <meta charSet='UTF-8'></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>Leaderboard</title>
        </head>
        
        <><h1>Leaderboard</h1><table>
            <div>
            <thread>
                <tr>
                    <th width="1000px">USER ID</th>
                    <th width="1000px">SCORE</th>
                </tr>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td>{player.playerName}</td>
                            <td>{player.highScore}</td>
                        </tr>
                    ))}
                </tbody>
            </thread>
            </div>
        </table></></>
    );
}

export default Leaderboard;