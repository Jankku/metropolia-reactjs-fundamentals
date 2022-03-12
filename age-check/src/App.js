import React, { useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({name: '', age: 0});

  const showAlert = (message) => {
    person.age >= 18
      ? alert(`Hello ${person.name}`)
      : alert("You are too young")
    
  }

  const inputChanged = (event) => {
   setPerson({...person, [event.target.name]: event.target.value});
  } 

  return (
    <div className="App">
     <input placeholder="Name" name="name" value={person.name} onChange={inputChanged} />
    <input placeholder="Age" name="age" value={person.age} onChange={inputChanged} />
    <button onClick={showAlert}>Submit</button>
    </div>
  );
}

export default App;
