import React from 'react';
import './SingleInformation.css'

const SingleInformation = ({ card }) => {
  const { picture, name, about, age, time } = card;
  console.log(name);
  return (
    <div>
      <div className="single-card">
        <img src={picture} alt="" />
        <div className="card-info">
          <h3>{name}</h3>
          <p>{about}</p>
          <h4>For Age: {age}</h4>
          <h4>Time required: {time}s</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleInformation;