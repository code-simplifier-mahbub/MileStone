import './App.css';
import Direction from './component/Direction/Direction';
import Watch from './component/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Direction name={'Tanzil Rahman'} age={22}></Direction>
      <Watch></Watch>
    </div>
  );
}

export default App;
