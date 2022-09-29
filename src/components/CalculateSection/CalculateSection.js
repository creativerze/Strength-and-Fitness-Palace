import React, { useState } from 'react';
import MyDetails from '../MyDetails/MyDetails';
import './CalculateSection.css';

const CalculateSection = ({ times }) => {
  const [brkTime, setBrkTime] = useState(0);

 
  return (
    <div>
      <h2>From Calculate Section</h2>
      <MyDetails></MyDetails>
      <h3>Add A Break</h3>
      <button className='time-btn'>10s</button>
      <button className='time-btn'>20s</button>
      <button className='time-btn'>30s</button>
      <button className='time-btn'>40s</button>
      <button className='time-btn'>50s</button>

      <div className="">
        <h3>Exercise Details</h3>
        <h3>Exercise time: {times} <small>Secounds</small></h3>
        <h3>Break time</h3>
        <button className='activity-btn'>Activity Completed</button>
      </div>
    </div>
  );
};



export default CalculateSection;