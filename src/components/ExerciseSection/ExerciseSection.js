import React, { useEffect, useState } from 'react';
import CalculateSection from '../CalculateSection/CalculateSection';
import Question from '../Question/Question';
import SingleInformation from '../SingleInformation/SingleInformation';
import './ExerciseSection.css';

const ExerciseSection = () => {
  const [information, setInformation] = useState([]);

  const [times, setTimes] = useState(0);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setInformation(data));
  }, []);

  const timeBtn = (card) => {
    // console.log(card);
    const newTime = times + card.time;
    setTimes(newTime);
  };

  return (
    <div className=''>
      <h4 className='exercise-title'>Select exercise</h4>
      <div className="all-sections">
        <div className='all-card'>
          {
            information.map(card => <SingleInformation
              card={card}
              key={card.id}
              timeBtn={timeBtn}
            ></SingleInformation>)
          }
        </div>
        <div className="ps-5 ps-md-0">
          <CalculateSection
            times={times}
          ></CalculateSection>
        </div>
      </div>
      <Question></Question>
    </div>
  );
};

export default ExerciseSection;