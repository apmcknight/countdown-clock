import React, { useState, useEffect } from 'react';
import './App.css';
import Play from './assets/play-circle-regular.svg';
import Pause from './assets/pause-circle-solid.svg';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true); 
  const [intervialId, setIntervalId] = useState(null);


  useEffect(() => {
    if(isRunning){
      const id = window.setInterval(() => {
        setSeconds(seconds => seconds+1);
      }, 1000);
      return () => window.clearInterval(id);
    } else {}
  }, [isRunning]);


  return(
    <div className="App">

      <div className="circle-holder">
        <div className="circle red"></div>
        <div className="circle green"></div>
        <div className="circle blue"></div>
      </div>

      <div className="time">
        {seconds}
      </div>

      <div className="buttons">
        <img onClick={() => {setIsRunning(true);}} src={Play} width={50} height={50} alt="Play"/>
        <img onClick={() => {setIsRunning(false);}} src={Pause} width={50} height={50} alt="Pause"/>
      </div>

      <div className="copy">
        <p>
          Developed by <a href="https://www.mcknight.netlify.com">Adam McKnight</a>
          <br/>Hit Pause to Pause timer.
          <br/>Hit Play to resume timer.
        </p>
      </div>
    </div>
  )
}

export default App;