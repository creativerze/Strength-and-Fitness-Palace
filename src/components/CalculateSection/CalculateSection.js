import React, { useState } from 'react';
import MyDetails from '../MyDetails/MyDetails';
import './CalculateSection.css';

const CalculateSection = ({ times }) => {
  // const [brkTime, setBrkTime] = useState(0);
  const [breaktimes, setBreakTimes] = useState(0);

  const breakTime = (e) => {
    const localTime = e.target.innerText
    setBreakTimes(localTime) 
  };

  return (
    <div>
      <h2>From Calculate Section</h2>
      <MyDetails></MyDetails>
      <h3>Add A Break</h3>
      <button onClick={breakTime} className='time-btn'>10s</button>
      <button onClick={breakTime} className='time-btn'>20s</button>
      <button onClick={breakTime} className='time-btn'>30s</button>
      <button onClick={breakTime} className='time-btn'>40s</button>
      <button onClick={breakTime} className='time-btn'>50s</button>

      <div className="">
        <h3>Exercise Details</h3>
        <h3>Exercise time: {times} <small>Secounds</small></h3>
        <h3>Break time: {breaktimes}</h3>
        <button className='activity-btn'>Activity Completed</button>
      </div>
    </div>
  );
};



export default CalculateSection;