import React from 'react';
import './Question.css';

const Question = () => {
  return (
    <div>
      <h2 className='question-title'>How does react work?</h2>
      <p className='anwser'>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
      <h2 className='question-title'>Difference between props and state</h2>
      <p className='anwser'><b>Props:</b> <br />
        Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
      <p className='anwser'><b>State:</b> <br />
        The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
      <h2 className='question-title'> useEffect uses without using data load</h2>
      <p className='anwser'>
      useEffect after render: We know that, the useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component.
      </p>
    </div>
  );
};

export default Question;