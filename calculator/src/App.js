import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState({num1: 0, num2: 0});
  const [result, setResult] = useState(0);
  const inputChanged = (event) => {
   setNumbers({...numbers, [event.target.name]: event.target.value});
  }

  const calculateAddition = () => {
    setResult(Number(numbers.num1) + Number(numbers.num2));
  }

    const calculateSubtraction = () => {
    setResult(Number(numbers.num1) - Number(numbers.num2));
  }

  return (
    <div className="App">
      <p>Result = {result}</p>
    <input name="num1" value={numbers.num1} onChange={inputChanged} />
    <input  name="num2" value={numbers.num2} onChange={inputChanged} />
    <button onClick={calculateAddition}>+</button>
    <button onClick={calculateSubtraction}>-</button>
    </div>
  );
}

export default App;
