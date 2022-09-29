import React, { useEffect, useState } from 'react';
import SingleInformation from '../SingleInformation/SingleInformation';
import './ExerciseSection.css';

const ExerciseSection = () => {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setInformation(data));
  }, []);
  return (
    <div>
      <h3>Select today's exercise</h3>
      <div className='all-card'>
        {
          information.map(card => <SingleInformation
            card={card}
            key={card.id}
          ></SingleInformation>)
        }
      </div>
    </div>
  );
};

export default ExerciseSection;