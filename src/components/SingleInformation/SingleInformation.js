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
          <h4>{name}</h4>
          <p>{about}</p>
          <h5>For Age: {age}</h5>
          <h5>Time required: {time}s</h5>
        </div>
        <button onClick={()=>timeBtn(card)} className='add-to-list-btn'>Add to list</button>
      </div>
    </div>
  );
};

export default SingleInformation;