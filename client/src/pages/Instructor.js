import React from 'react';
import './Instructor.css';
 
function Instructor(){
    return(
 <><head>
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
                <tr>
                    <td>Player 1</td>
                    <td>10</td>
                    <td>100</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Player 1</td>
                    <td>10</td>
                    <td>100</td>
                    <td>60</td>
                </tr>
                <tr>
                    <td>Player 1</td>
                    <td>10</td>
                    <td>100</td>
                    <td>70</td>
                </tr>
                <tr>
                    <td>Player 1</td>
                    <td>10</td>
                    <td>100</td>
                    <td>10</td>
                </tr>
            </tbody>
            </thread>
        </div>
    </table>



</body>
    
    
    
    
    </>

);
}

export default Instructor;