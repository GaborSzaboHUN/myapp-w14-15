import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import { useState } from 'react';



function App() {
  const [showTimer, setShowTimer] = useState(true)
  /* 
    const state = useState(true)
    console.log(state)
    const showTimer = state[0]
    const setShowTimer = state[1]
   */
  // a shoTimer az állapotot adja vissza, a setShowTimer pedig a függvényt, ami megváltoztatja az állapotot



  return (
    <div className="App">
      <header className="App-header">

        {showTimer ? <Timer /> : <div>No timer</div>}
        <button onClick={() => { setShowTimer(false) }}>Hide</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
