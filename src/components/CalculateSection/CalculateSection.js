import React, { useEffect, useState } from 'react';
import MyDetails from '../MyDetails/MyDetails';
import Swal from 'sweetalert2'
import './CalculateSection.css';

const CalculateSection = ({ times }) => {
  // const [brkTime, setBrkTime] = useState(0);
  const [breaktimes, setBreakTimes] = useState(0);

  const breakTime = (e) => {
    setBreakTimes(e.target.innerText);
    localStorage.setItem('newTime', e.target.innerText);
  };

  const sweetAlert = ()=>{
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
  // console.log(localStorage.getItem('newTime'))
  const newLocalStoraTime = localStorage.getItem('newTime')
  
  // useEffect(() => {
  //   const getTime = localStorage.getItem('newTime');
  //   return getTime;
  // }, []);

  return (
    <div>
      <MyDetails></MyDetails>
      <h4 className='mt-3'>Add A Break</h4>
      <button onClick={breakTime} className='time-btn'>10s</button>
      <button onClick={breakTime} className='time-btn'>20s</button>
      <button onClick={breakTime} className='time-btn'>30s</button>
      <button onClick={breakTime} className='time-btn'>40s</button>
      <button onClick={breakTime} className='time-btn'>50s</button>

      <div className="my-3">
        <h4 className='my-4'>Exercise Details</h4>
        <h4>Exercise time: {times} <small>Secounds</small></h4>
        <h4 className='mt-5'>Break time: {newLocalStoraTime}</h4>
        <button onClick={sweetAlert} className='activity-btn my-5' >Activity Completed</button>
      </div>
    </div>
  );
};



export default CalculateSection;