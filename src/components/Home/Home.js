import React from 'react';
import './Home.css'
import CalculateSection from '../CalculateSection/CalculateSection';
import ExerciseSection from '../ExerciseSection/ExerciseSection';

const Home = () => {
  return (
    <div>
      <h2>from home</h2>
      <div className="home-section">
        <ExerciseSection></ExerciseSection>
        <CalculateSection></CalculateSection>

      </div>
    </div>
  );
};

export default Home;