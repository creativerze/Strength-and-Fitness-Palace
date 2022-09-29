import './SingleInformation.css';

const SingleInformation = ({ card,timeBtn}) => {
  const { picture, name, about, age, time } = card;
  // const [times, setTimes] = useState(0);

  
  // console.log(name);
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
        <button onClick={()=>timeBtn(card)} className='add-to-list-btn'>Add to list</button>
      </div>
    </div>
  );
};

export default SingleInformation;