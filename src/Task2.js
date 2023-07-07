import React, { useState, useEffect } from 'react';
import './Task2.css';
import jQuery from 'jquery';
import $ from 'jquery'; 

import List from './Task1';
const Clock=()=> {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);
  const [maxCycles, setMaxCycles] = useState(2);

  useEffect(() => {
    let timer = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (cyclesCompleted >= maxCycles) {
        setIsRunning(false);
      } else {
        if (cyclesCompleted % 2 === 0) {
          setTimeLeft(5 * 60);
        } else {
          setTimeLeft(25 * 60);
        }
        setCyclesCompleted(cyclesCompleted + 1);
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, cyclesCompleted, maxCycles]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTimeLeft(25 * 60);
    setIsRunning(false);
    setCyclesCompleted(0);
  };
  $(document).ready(function () {

    $("#btn2").click(function () {
      $("#task").slideUp("slow");
      $("#task2").slideDown("slow");

      });    });
  return (
    <div>
      <div className='header'>
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2 class="animate-charcter">Assignment</h2>
            </div>
          </div>
        </div>
        </div>
      <div className='hide1' id="task2">
      <h1><font color="white">Countdown Clock</font></h1>
      <font color="white"><h2>{`${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`}</h2> </font> 
      <button className='but1' onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button className="but2"onClick={handleReset}>Reset</button>
      </div>
      <div className='button1'>
              <button class="glow-on-hover" id="btn2"> Task2</button></div>
    </div>
  );
}

export default Clock;