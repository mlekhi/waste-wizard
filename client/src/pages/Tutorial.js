import React from 'react';
import './Tutorial.css';

function Tutorial() {
  return (
    <><head>
          <meta charSet="UTF-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <title>HOW TO PLAY!</title>


      </head><body>
              <h1>HOW TO PLAY!</h1>
              <video id="Temp" width="640" height="360" controls>
                  <source src="path_to_video/video.mp4" type="video/mp4"></source>

              </video>

              <div>
                  <button onClick="seekToTime(0)">Time Stamp 1</button>
                  <button onClick="seekToTime(30)">Time Stamp 2</button>
                  <button onClick="seekToTime(60)">Time Stamp 3</button>
              </div>
              <div>
                <button onClick="seekToTime(0)">Time Stamp 4</button>
                <button onClick="seekToTime(30)">Time Stamp 5</button>
                <button onClick="seekToTime(60)">Time Stamp 6</button>
              </div>

          </body></>
  );
}

export default Tutorial;