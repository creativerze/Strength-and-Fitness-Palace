import logo from './logo.svg';
import './App.css';
import ExerciseSection from './components/ExerciseSection/ExerciseSection';

function App() {
  return (
    <div className="App">
      <div className="App-New-Title text-primary">
        <h2><i className='bi bi-award-fill'></i> Strength and Fitness Palace</h2>
      </div>
      <ExerciseSection></ExerciseSection>
    </div>
  );
}

export default App;
